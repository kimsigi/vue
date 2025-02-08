<template>
    <div>
        <h2>HTML 클래스 바인딩</h2>
        <p>
            <strong>객체 바인딩</strong> 
            <p>
                클래스를 동적으로 바인딩 하기위해선는 :class(v-bind:class)를 사용할 수 있습니다.
            </p>
            <div class="text" :class="{ active: isActive, 'text-danger': hasError }"></div>
        </p>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const isActive = ref(true);
    const hasError = ref(false);
    
</script>

<style lang="scss" scoped>

</style>