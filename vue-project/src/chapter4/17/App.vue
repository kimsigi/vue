<template>
    <div :key="counter">
        <h1>LifeCycle Hook</h1>
        <button id="btn" ref="btn" @click="counter++">클릭!</button>
        <p>{{ counter }}</p>
        <p><input type="text" name="itext" ref="itxt" :value="counter"></p>

        <button @click="unmountComponent">컴포넌트 언마운트</button>
    </div>

    <Comp v-if="isMounted"></Comp>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
import Comp from './comp.vue';

    const counter = ref(0);
    const btn = ref();
    const itxt = ref();

    const isMounted = ref(true);
    const unmountComponent = () => {
        isMounted.value = !isMounted.value;
    }

    
    onBeforeMount(() => console.log("#### before mount", document.querySelector("buttun")));

    onMounted(() => console.log("#### mounted", document.querySelector("button")));

    onBeforeUpdate(() => console.log("#### before update", itxt.value.value));

    onUpdated(() => console.log("#### updated", itxt.value.value));

    onBeforeUnmount(() => console.log("#### before unmount"));

    onUnmounted(() => console.log("#### unmounted"));


console.log("#### setup 안에서 그냥 출력");
</script>
<script>
    console.log("#### 그냥 일반 스크립트 블록 실행");
</script>
<style lang="scss" scoped>

</style>