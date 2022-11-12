<template>
    <div id="app">
        <h1>Tarefas</h1>
        <task-progress :taskList="taskList"></task-progress>
        <br>
        <task-input @addTask="addTask($event)"></task-input>
        <br>
        <div id="task">
            <h6 v-if="taskList.length == 0">Sua vida está em dia :)</h6>
            <task-card
                v-for="taskItem in taskList" 
                :key="taskItem.description" 
                :task="taskItem"
                @doTask="doTask($event)"
                @removeTask="removeTask($event)">
            </task-card>
        </div>
    </div>
</template>

<script>
import TaskProgress from './components/TaskProgress.vue'
import TaskInput from './components/TaskInput.vue'
import TaskCard from './components/TaskCard.vue'

export default {
    components: {
        TaskProgress,
        TaskInput,
        TaskCard
    },
    data() {
        return {
            taskList: []
        }
    },
    methods: {
        addTask(taskDescription) {
            if (taskDescription.trim() == '')
                return;

            if (!this.hasTask(taskDescription))
                this.taskList.push({
                    description: taskDescription,
                    done: false
                });                
        },
        removeTask(task) {
            let taskIndex = this.taskList.indexOf(task);

            this.taskList.splice(taskIndex, 1);
        },
        doTask(task) {            
            task.done = !task.done;
        },
        hasTask(taskDescription) {
            if (this.taskList.length == 0)
                return false;

            let taskFound = this.taskList.filter(task => task.description == taskDescription);

            return taskFound.length > 0;
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

    #app h1, h6 {
        margin-bottom: 5px;
        font-weight: 300;
        font-size: 3rem;
        color: #FFF;
    }

    #task {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;          
        width: 100%;
    }
</style>
