<template>
    <div style="width: 25%">
        <b-input-group class="mt-2">
            <b-form-input @keypress.enter="newTask" v-model="task" placeholder="Nova Tarefa?"></b-form-input>
            <b-input-group-append>
                <b-button @click="newTask" variant="primary">+</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        newTask() {
            this.$emit('newTask', this.task);
            this.task = '';
        }
    }
}
</script>
