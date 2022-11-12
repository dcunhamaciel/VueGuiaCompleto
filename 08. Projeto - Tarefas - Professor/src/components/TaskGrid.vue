<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <task v-for="task in tasks" :key="task.name" :task="task"></task>
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>
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
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
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