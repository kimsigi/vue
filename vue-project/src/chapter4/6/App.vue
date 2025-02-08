<template>
    <div>
        테스트: {{ test }}
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const test = ref(1);
</script>

<style lang="scss" scoped>

</style>