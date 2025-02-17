<template>
    <input v-model="internalValue" />
</template>

<script setup>
import { computed } from 'vue';

  const dfnProps = defineProps({
    modelValue: String
  });
/*
  const dfnEmits = defineEmits({
    'update:modelValue': null
  });
  */
 const dfnEmits = defineEmits();

  /* watch로 처리하는 방법
  const internalValue = ref(dfnProps.modelValue);
  watch(internalValue, (newValue) => {
    dfnEmits('update:modelValue', newValue);
  });
  */

  /* computed로 처리하는 방법 */
  const internalValue = computed({
    get: () => dfnProps.modelValue,
    set: (newValue) => {
      dfnEmits('update:modelValue', newValue);
    }
  });




</script>

<style lang="scss" scoped>

</style>
