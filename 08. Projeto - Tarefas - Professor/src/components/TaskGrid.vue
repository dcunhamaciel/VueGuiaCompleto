<template>
    <div class="task-grid">
        <template>
            <task v-for="task in tasks" :key="task.name" :task="task"></task>
        </template>
    </div>
</template>

<script>
import Task from './Task.vue';

export default {
    components: { Task },
    props: {
        tasks: { 
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    .task {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pending {
        border-left: 12px solid #B73229;
        background-color: #F44336;
    }

    .done {
        color: #DDD;
        border-left: 12px solid #0A8F08;
        background-color: #4CAF50;
        text-decoration: line-through;
    }
</style>