<template>
    <div id="app">
        <h1>Tarefas</h1>
        <progress-bar></progress-bar>
        <br>
        <input-task></input-task>
        <br>
        <card-task></card-task>
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
</style>
