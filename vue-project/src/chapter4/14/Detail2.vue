<template>
  <div>
    <h1>Detail2.vue</h1>

    <hr>
    <!-- <button class="bg-red-500" @click="$emit('someEvent', 1, 'value2', {t1:1, t2:2})">Emit Test</button> -->
  </div>
</template>

<script>
export default {
  emits: {
    someEvent: () => {
      console.log("### someEvent");
      return true;
    }
  },
  setup(props, context) {
    context.emit('someEvent', 'Hello World!', 'hello', 'world');

    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
