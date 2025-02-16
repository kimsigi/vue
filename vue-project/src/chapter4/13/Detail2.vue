<template>
  <div>
    <p>제목: {{ title }}</p>
    <p>내용: {{ content }}</p>
    <p>객체: {{ objs }}</p>

    <hr>

    <p>제목: {{ dfn.title }}</p>
    <p>내용: {{ dfn.content }}</p>
    <p>객체: {{ dfn.objs }}</p>

    <hr>

    <p>Detail2 - 인젝트 값: {{ params }}</p>

    <hr>

    <Detail2Detail :dfn-values="dfn"/>

  </div>
</template>

<script setup>
import { inject } from 'vue';
import Detail2Detail from './Detail2Detail.vue';

  const dfn = defineProps({
    title: {
      type: String,
      required: true
    },
    content: String,
    scriptRef: String,  // 부모에서 script-ref로 넘어와도 "script-ref"로 받거나 scriptRef로 받아도 된다.
    objs: Object
  });

  const params = inject("params");

    console.log("### Detail2 - 제목: ", dfn.title);
    console.log("### Detail2 - 내용: ", dfn.content);
    console.log("### Detail2 - scriptRef: ", dfn.scriptRef);
    console.log("### Detail2 - objs: ", dfn.objs, dfn.objs.value1);
</script>

<style lang="scss" scoped>

</style>
