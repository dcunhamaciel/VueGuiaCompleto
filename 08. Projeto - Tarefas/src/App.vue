<template>
    <div id="app">
        <h1>Tarefas</h1>
        <progress-bar></progress-bar>
        <br>
        <input-task @addTask="addTask($event)"></input-task>
        <br>
        {{ taskList }}
        <br><br>
        <div id="pqp">
            <card-task 
                v-for="taskItem in taskList" 
                :key="taskItem.description" 
                :task="taskItem"
                @doTask="doTask($event)">
            </card-task>
        </div>
    </div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import InputTask from './components/InputTask.vue'
import CardTask from './components/CardTask.vue'

export default {
    components: {
        ProgressBar,
        InputTask,
        CardTask
    },
    data() {
        return {
            taskList: []
        }
    },
    methods: {
        addTask(taskDescription) {
            let taskFound = this.taskList.filter(task => task.description == taskDescription);

            if (taskFound.length == 0)
                this.taskList.push({
                    description: taskDescription,
                    done: false
                });
        },
        doTask(task) {
            console.log('teste');
            task.done = !task.done;
        }
    }
}
</script>

<style>
    body {
        font-family: 'Lato', sans-serif;
        background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
    }

    #app {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #app h1 {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 3rem;
        color: #FFF;
    }

    #pqp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>
