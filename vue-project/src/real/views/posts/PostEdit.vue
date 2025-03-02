<template>
  <div>
    <h2>게시글 수정</h2>
    <hr class="my-4">
    <form>
      <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" class="form-control" id="title" placeholder="제목을 입력하세요.">
      </div>
      <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea class="form-control" id="content" rows="3"></textarea>
      </div>
      <div class="pt-4">
        <button type="button" class="btn btn-outline-danger" @click="cancel">취소</button>
        <button class="btn btn-primary" @click="update">수정</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const cancel = () => router.push(`/posts/${route.params.id}`);
  /*
  const update = () => {
    router.push(`/posts/${route.params.id}`);
  }
    */
</script>

<style lang="scss" scoped>

</style>
