<template>
  <div>
    <h1>Detail2 Define</h1>
    <hr>
    PROPS: {{ prop1 }}, {{ prop2 }}
    <br />
    DefindProps: {{ dfnProps }}

    <hr><hr><hr><hr><hr>

    <button class="bg-green-500" @click="someEvent('sendMessage', '샌드메세지')">SendMessage</button>
    <button class="bg-yellow-500" @click="etcEvent('sendMessage', '샌드메세지')">SendMessage</button>

  </div>


</template>

<script setup>
  // 자동 속성 상속 비활성화
defineOptions({
  inheritAttrs: false
})

 const dfnProps = defineProps({
    prop1: String,
    prop2: Object
  });

 const dfnEmits = defineEmits({
    "some-event": null,
    "etc-event": (message) => {
      console.log("#### etc-event:", message+"#####");
      return true;
    }
 });

  const someEvent = (message) => dfnEmits("some-event", message);
  const etcEvent = (messageKey, message) => {
    dfnEmits("etc-event", message);
  }

</script>

<style lang="scss" scoped>

</style>
