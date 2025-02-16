<template>
  <div>
    <p>제목: {{ $props.title }}</p>
    <p>내용: {{ $props.content }}</p>
    <p>객체: {{ $props.objs }}</p>
    <hr>
    <p>전체: {{$props}}</p>

    <hr>
    <p>setup props(title): {{ props.title }}</p>
    <p>setup props(content): {{ props.content }}</p>

    <hr>

    <p>Detail1 - 인젝트 값: {{ params }}</p>
  </div>

  </template>

<script>
import { inject } from 'vue';

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        content: String,
        scriptRef: String,  // 부모에서 script-ref로 넘어와도 "script-ref"로 받거나 scriptRef로 받아도 된다.
        objs: Object,
        dynamicValues: Object
    },
  setup (props) {

    const params = inject("params");

    console.log("### Detail1 - 제목: ", props.title);
    console.log("### Detail1 - 내용: ", props.content);
    console.log("### Detail1 - scriptRef: ", props.scriptRef);
    console.log("### Detail1 - objs: ", props.objs, props.objs.value1);
    console.log("### Detail1 - dynamicValues: ", props.dynamicValues);
     return {
      props,params
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
