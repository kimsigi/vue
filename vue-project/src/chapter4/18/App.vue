<template>
    <div>
        <ul>
            <li v-for="(item, index) in items" :key="index" ref="itemRefs">
            {{ index }}: {{ item }}
            </li>
        </ul>
    </div>

    <div>
        <hr><hr><hr><hr><hr><hr>
        <Child ref="child"></Child>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Child from './Child.vue';
    const itemRefs = ref([]);
    const items = ref([1,2,3]);

    onMounted(() => console.log(itemRefs.value));
    const child = ref();
    onMounted(() => {
        console.log("카운트::::", child.value.count); // 초기 값: 0
        child.value.increment(); // count 증가
    });

    
</script>

<style lang="scss" scoped>

</style>