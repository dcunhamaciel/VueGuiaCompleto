<template>
    <div style="width: 50%">
        <b-progress>
            <b-progress-bar :value="value" variant="info" :label="`${value}%`"></b-progress-bar>
        </b-progress>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 50
        }
    }
}
</script>
