<template>
  <div>
    <h1>Detail.vue</h1>

    <hr>
    <button class="bg-blue-500" @click="$emit('testEvt', 1, 'value2', {t1:1, t2:2})">Emit Test</button>
  </div>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
