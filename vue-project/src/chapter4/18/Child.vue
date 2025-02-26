<template>
    <div>
        <p>{{ count }}</p>
        <button @click="increment">증가!</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const count = ref(0);
    const increment = () => count.value++;

    defineExpose({count, increment});
        
    
</script>

<style lang="scss" scoped>

</style>