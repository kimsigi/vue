<template>
  <div>
    <hr><hr><hr><hr><hr><hr><hr><hr><hr>
    <h1>상세중에 상세!!</h1>
    <p>$props: {{ $props }}</p>
    <p>인젝트 : {{ params }}</p>
    <p>dfnValues1: {{ dfn.dfnValues }}</p>
    <p>dfnValues2: {{ dfnValues }}</p>
  </div>
</template>

<script setup>
import { inject } from 'vue';

  const params = inject("params");
  const dfn = defineProps({
    dfnValues: Object
  });

  console.log("### Detail2Detail - params: ", params);
  console.log("### Detail2Detail - dfn: ", dfn, "### values: ", dfn.dfnValues);
</script>

<style lang="scss" scoped>

</style>
