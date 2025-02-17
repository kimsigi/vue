<template>
  <div>
      이름: <input v-model="computedTitle" />
      <br/>
      나이:<input v-model="computedAuthor" />
  </div>
</template>

<script setup>
import { computed } from 'vue';

  const dfnProps = defineProps({
    title: String,
    author: Number
  });

  const dfnEmits = defineEmits({
    'update:title': null,
    'update:author': null,
  });

  const computedTitle = computed({
  get: () => dfnProps.title,
  set: (newValue) => {
    dfnEmits('update:title', newValue);
  }
});

const computedAuthor = computed({
  get: () => dfnProps.author,
  set: (newValue) => {
    dfnEmits('update:author', newValue);
  }
});



</script>

<style lang="scss" scoped>

</style>
