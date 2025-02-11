<template>
  <div>
    <h1>Watch, WatchEffect</h1>
    <p>
      이름: <input class="border-2 border-indigo-600 " type="text" v-model="name" />
    </p>
    <p>
      더하기:
        <input class="border-2 border-indigo-600 " type="text" v-model.number="a" />
        <input class="border-2 border-indigo-600 " type="text" v-model.number="b" />
    </p>

  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
  // 싱글 레프
  const name = ref('Kim');
  watch(name, (newValue, oldValue) => console.log("## newValue: ", newValue, "## oldValue: ", oldValue))

  // getter로
  const a = ref(0);
  const b = ref(0);
  watch(() => a.value + b.value, (newval) => console.log("## sum: ", newval));

  // array
  watch([name, () => a.value + b.value], ([newVal1, newVal2]) => {
    console.log("### newName:", newVal1);
    console.log("### a+b:", newVal2);
  });

  const obj = reactive({
    a: 1,
    b: 2,
  });

  // 그냥 obj.a를 하면 얘는 단순한 숫자일 뿐
  watch(obj.a, newVal => console.log("## newVal: ", newVal));
  // getter로 해야 reactive로 동작
  watch(() => obj.a, newVal => console.log("## Getter newVal: ", newVal));


</script>

<style lang="scss" scoped>

</style>
