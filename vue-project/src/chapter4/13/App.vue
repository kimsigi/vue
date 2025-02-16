<template>
  <div>
    <h1>Props 테스트!!</h1>
    <hr>
    <!-- 디테일1 컴포넌트 임포트: 고전적인 props 연습 -->
    <Detail1 title="제목이다" content="내용이다" :script-ref="scriptVal" :objs="params" :dynamic-values= "dynamics"/>

    <hr><hr><hr><hr>

    <!-- defindProps 테스트 -->
    <Detail2 title="제목이다" content="내용이다" :script-ref="scriptVal" :objs="params" :dynamic-values= "dynamics"/>

    <hr><hr><hr><hr>

  </div>
</template>

<script setup>
import { provide, reactive } from 'vue';
import Detail1 from './Detail1.vue';
import Detail2 from './Detail2.vue';
const scriptVal ="스크립트 변수는 콜론으로 넘기는구나";
const params = {value1: "값1", value2: 2}

const dynamics = reactive({
  value1: 1,
  value2: 2,
});

  // provide를 사용하면 하위 컴포넌트(1뎁스만이 아니라 더 깊은 뎁스)에서 inject로 사용할 수 있다.
  provide('params', {
    인젝트제목: "제목이다",
    인젝트내용: "내용이다",
    dynamicTest: reactive({
      value1: 1,
      value2: 2,
    })
  });

</script>

<style lang="scss" scoped>

</style>
