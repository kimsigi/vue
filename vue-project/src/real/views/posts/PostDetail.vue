<template>
  <div>
    <h2>게시글 상세</h2>
    <hr class="my-4">
    <h2>제목</h2>
    <p>내용</p>
    <p class="text-muted">2020-01-01</p>
    <hr class="my-4">
    <div class="row g-2">
      <div class="col-auto">
        <button type="button" class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button type="button" class="btn btn-outline-dark" @click="goList">목록</button>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-outline-dark" @click="goEdit">수정</button>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-outline-dark">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

  const router = useRouter();
  const route = useRoute();
  const goList = () => router.push('/posts');
  const goEdit = () => router.push(`/posts/edit/${route.params.id}`);
</script>

<style lang="scss" scoped>

</style>
