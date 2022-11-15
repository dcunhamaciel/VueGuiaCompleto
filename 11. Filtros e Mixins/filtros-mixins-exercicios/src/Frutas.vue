<template>
    <div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import frutasMixin from './frutasMixin.js';
import usuarioMixin from './usuarioMixin.js';

export default {
    mixins: [frutasMixin, usuarioMixin],
    created() {
        console.log('Created - Frutas.vue!');
    }    
}
</script>