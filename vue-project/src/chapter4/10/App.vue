<template>
  <div>
    <h1>양방향 바인딩(v-model)</h1>
    <input class="border-2 border-indigo-600" type="text" v-model="message" />
    <!-- <input class="border-2 border-indigo-600" type="text" v-model.lazy="message" /> -->
    <!-- <input class="border-2 border-indigo-600" type="text" v-model.number="message" /> -->
    <!-- <input class="border-2 border-indigo-600" type="text" v-model.trim="message" /> -->
    <p>바인딩결과값 노출: {{ message }}</p>
  </div>

  ... 다 비슷비슷하지만 체크박스랑 라디오버튼이랑 selectbox는  실습하자.
  <div>
    <h1>체크박스</h1>
    <p>
      <input type="checkbox" id="checkbox1" v-model="chk1Val" /><label for="checkbox1">체크박스1</label>
      <input type="checkbox" id="checkbox2" v-model="chk2Val" /><label for="checkbox2">체크박스2</label>
      <input type="checkbox" id="checkbox3" v-model="chk3Val" true-value="예" false-value="아니오"/><label for="checkbox3">체크박스3</label>
    </p>

    <h1>혹시 멀티 체크박스?</h1>
    <p>
      <input type="checkbox" id="checkbox4" value="체크1" v-model="selVal" /><label for="checkbox4">1</label>
      <input type="checkbox" id="checkbox5" value="체크2" v-model="selVal" /><label for="checkbox5">2</label>
      <input type="checkbox" id="checkbox6" value="체크3" v-model="selVal" /><label for="checkbox6">3</label>
    </p>
    <h1>라디오버튼</h1>
    <p>
      <input type="radio" id="radio1" name="rdo" value="true" v-model="chk1Val" /><label for="radio1">예</label>
      <input type="radio" id="radio2" name="rdo" value="false" v-model="chk1Val" /><label for="radio2">아니오</label>
    </p>

    <h1>셀렉트박스</h1>
    <select v-model="selVal" multiple>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    ============ 셀렉트박스 선택 출력: {{ selVal }} ============

    <ul>
      <li v-for="(item, index) in selVal" :key="index">{{ item }}</li>
    </ul>

  </div>

</template>

<script setup>
import { ref } from 'vue';

  const message = ref(null);
  const chk1Val = ref(false);
  const chk2Val = ref(true);
  const chk3Val = ref("아니오");
  const selVal = ref([]);
</script>

<style lang="scss" scoped>

</style>
