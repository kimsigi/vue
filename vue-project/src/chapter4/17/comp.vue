<template>
    <div>
        자식 컴포넌트
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

    onBeforeMount(() => console.log("###자식 컴포넌트 비포 마운트"));
    onMounted(() => console.log("#### 자식 컴포넌트 마운트"));
    onBeforeUpdate(() => console.log("#### 자식 컴포넌트 비포 업데이트"));
    onUpdated(() => console.log("#### 자식 컴포넌트 업데이트"));
    onBeforeUnmount(() => console.log("#### 자식 컴포넌트 비포 언마운트"));
    onUnmounted(() => console.log("#### 자식 컴포넌트 언마운트"));
    
</script>

<style lang="scss" scoped>

</style>