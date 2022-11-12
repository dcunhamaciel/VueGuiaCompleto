<template>
    <div style="width: 13%">
        <b-card @click="doTask" :class="['card', cardColor]" style="height: 100px">
            <b-button-close @click="removeTask"></b-button-close>
            <p :class="[textDecoration]">{{ task.description }}</p>
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
        },
        removeTask() {
            this.$emit('removeTask', this.task);
        }
    },
    computed: {
        cardColor() {
            return this.task.done ? 'bg-success' : 'bg-danger';
        },
        textDecoration() {
            return this.task.done ? 'p-decoration' : '';
        }
    }
}
</script>

<style scoped>
    .card {
        border-left-width: 8px;
        margin-right: 10px;
        margin-bottom: 10px;
    }

    .card-body {
        padding: 2%;
    }

    p {
        float: left;
        text-align: center;        
        color: white;
    }

    .p-decoration {
        text-decoration: line-through;
    }
</style>
