<template>
    <div>
        <h1 v-if="visible">Hello Vue3!</h1>
        <h1 v-if="visible">하하하</h1>

        <hr>

        <h1 v-if="val===0">0이다!!</h1>
        <h1 v-else-if="val===1">1이다</h1>
        <h1 v-else-if="val===2">2이다</h1>
        <h1 v-else>3이상이다</h1>

        <hr>

        <template v-if="visible">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>

        <hr>

        <h1 v-show="visible">show !!!!</h1>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const visible = ref(true);
    const val = ref(0);
</script>

<style lang="scss" scoped>

</style>