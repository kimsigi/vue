<template>
    <div>
        <h2>HTML 클래스 바인딩</h2>
        <p>
            <strong>객체 바인딩</strong> 
            <p>
                클래스를 동적으로 바인딩 하기위해선는 :class(v-bind:class)를 사용할 수 있습니다.
            </p>
            <div class="text" :class="{ active: isActive, 'text-danger': hasError }"></div>

            <div :class="computedObj">computed 바인딩</div>
            <br />
            <div :class="[activeClass, errorClass]">배열에바인딩</div>
            <br />
            
            <div :style="{color: activeColor, fontSize: fontSize + 'px'}">인라인스타일바인딩</div>
            <br />
            <div :style="reactiveObj">인라인스타일바인딩Reactive</div>
            <br />
            <div :style="[reactiveObj, reactiveObj2]">인라인스타일바인딩Reactive배열</div>
        </p>
    </div>
</template>

<script setup>
    import { computed, reactive, ref } from 'vue';
    // 객체바인딩
    const isActive = ref(true);
    const hasError = ref(false);
    
    // computed 바인딩
    const computedObj = computed(() => {
        return {
            active: false,
            'text-danger': false,
        }
    });

    // 배열바인딩
    const activeClass = ref('active');
    const errorClass = ref('text-danger');

    // 인라인스타일바인딩
    const activeColor = ref('red');
    const fontSize = ref(30);
    const reactiveObj = reactive({
        color: 'red',
        fontSize: '30px',
    });
    const reactiveObj2 = reactive({
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'blue',
    });
</script>

<style lang="scss" scoped>

</style>