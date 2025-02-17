<template>
  <div>
    <Detail @test-evt="callbackFunc" />

    <hr><hr><hr><hr><hr>
    <Detail2 @some-event="callbackFunc2" />
    <hr><hr><hr><hr><hr>
    <Detail3 class="test-class" prop1="프롭1" :prop2="objs" @some-event="dfnCallback" @etc-event="dfnCallback"></Detail3>

  </div>
</template>

<script setup>
import Detail from './Detail.vue';
import Detail2 from './Detail2.vue';
import Detail3 from './Detail3.vue';

const callbackFunc = (a,b,c) => {
  console.log("#### callbackFunc P1:", a);
  console.log("#### callbackFunc P2:", b);
  console.log("#### callbackFunc P3:", c);
};

const callbackFunc2 = (a,b,c) => {
  console.log("#### callbackFunc2 P1:", a);
  console.log("#### callbackFunc2 P2:", b);
  console.log("#### callbackFunc2 P3:", c);
}

const objs = {
  name: '이름',
  age: 20
};

const dfnCallback = message => console.log("### 부모 메세지:", message);

</script>

<style lang="scss" scoped>

</style>
