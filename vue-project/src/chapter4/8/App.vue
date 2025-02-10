<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id">{{ item.message }}</li>
        </ul>
        
        <hr>
        
        <ul>
            <li v-for="(item, index) in items" :key="index">{{index}}==>{{ item.message }}</li>
        </ul>
        
        <hr>

        <ul>
            <li v-for="(value, key, index) in myObject" :key="index">{{key}}:{{ value }}</li>
            ==============
            <li v-for="(value, key, index) in myObject" :key="key">
                {{ key }} - {{ value }} - {{ index }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

    const items = reactive([
        { id: 1, message: 'Java' },
        { id: 2, message: 'HTML' },
        { id: 3, message: 'CSS' },
        { id: 4, message: 'JavaScript' },
    ]);

    const myObject = reactive({
        title: '제목입니다.',
        author: '홍길동',
        publishedAt: '2016-04-10',
    });
</script>

<style lang="scss" scoped>

</style>