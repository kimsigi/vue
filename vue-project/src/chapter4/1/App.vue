<template>
  <div>
      <p>리액티브메세지: {{ reactiveMessage }} </p>
      <button v-on:click="fnReactiveMesaage">리액티브 메세지!</button>
      <p>노말메세지: {{ normalMesage }} </p>
      <button v-on:click="fnNormalMessage">노멀 메세지!</button>
  </div>
</template>

<script>

import {isRef, onBeforeMount, onMounted, onUnmounted, ref} from 'vue';

export default {
  setup () {

    console.log("### setup(start)");

    let reactiveMessage = ref("hello reactive message");
    let normalMesage = "hello Normal Message";

    const fnReactiveMesaage = () => {
      reactiveMessage.value = reactiveMessage.value + "!";
    }

    const fnNormalMessage = () => {
      normalMesage = normalMesage + "!";
    }

    console.log("#### 리액티브메세지는 참조함수인가: ", isRef(reactiveMessage));
    console.log("#### 노멀메세지는 참조함수인가: ", isRef(normalMesage));


    onMounted(function() {
      console.log("#### onMounted");
      test();
      fnConst();
      fnLet();
    });

    onBeforeMount(() => console.log("#### onBeforeMount"));

    onUnmounted(() => {
      console.log("#### onUnmounted");
    });

    console.log("### setup(end)");

    return {
        reactiveMessage,
        normalMesage,
        fnReactiveMesaage,
        fnNormalMessage
    }
  }
}

function test() {
  console.log("### call test");
}

const fnConst = () => {
  console.log("#### fnConst");
}

let fnLet = function() {
  console.log("#### fnLet");
}

</script>

<style lang="scss" scoped>

</style>