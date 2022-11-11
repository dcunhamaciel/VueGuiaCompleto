<template>
    <div style="width: 13%">
        <b-card @click="doTask" :class="['card', cardColor]" style="height: 100px">
            <b-button-close></b-button-close>
            <p>{{ task.description }}</p>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        task: Object
    },
    methods: {
        doTask() {
            this.$emit('doTask', this.task);
        }
    },
    computed: {
        cardColor() {
            return this.task.done ? 'bg-success' : 'bg-danger';
        }
    }
}
</script>

<style scoped>
    .card {
        border-left-width: 8px;   
    }

    .card-body {
        padding: 2%;
    }

    p {
        float: left;
        text-align: center;
    }
</style>
