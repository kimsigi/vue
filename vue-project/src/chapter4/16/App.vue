<template>
  <div>
    <MyComponent>
      <p>부모에서 전달한 콘텐츠입니다!</p>
    </MyComponent>
    <hr><hr><hr><hr><hr><hr>
    <MyComponent2>
      <template v-slot:header>부모에서 넘긴 헤더 슬롯에 들어갈 내용</template>
      <template v-slot:[dynamicValue]>부모에서 넘긴 헤더 슬롯에 들어갈 내용</template>
      <strong>이내용은 어디로갈까?</strong>
      <br>
      <p>스트롱부터 p까지가 본문에 들어가나</p>
      <template #:footer>부모에서 넘긴 푸터 슬롯에 들어갈 내용</template>
      <template #:[dynamicValue]>부모에서 넘긴 푸터 슬롯에 들어갈 내용</template>
    </MyComponent2>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MyComponent from './MyComponent.vue';
import MyComponent2 from './MyComponent2.vue';
  const dynamicValue = ref('footer');
</script>

<style lang="scss" scoped>

</style>
