<template>
    <div style="width: 50%">
        <b-progress>
            <b-progress-bar :value="tasksDone" variant="info" :label="`${tasksDone}%`"></b-progress-bar>
        </b-progress>
    </div>
</template>

<script>
export default {
    props: {
        taskList: Array
    },
    computed: {
        tasksDone() {
            if (this.taskList.length == 0)
                return 0;

            let taskListDone = this.taskList.filter(task => task.done);
            let done = (taskListDone.length * 100 / this.taskList.length).toFixed(2);

            return done;
        }
    }
}
</script>
