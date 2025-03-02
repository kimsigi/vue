<template>
  <header class="bg-gray-800 p-4">
    <nav>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white hover:text-gray-400">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="text-white hover:text-gray-400">About</router-link>
        </li>
        <li>
          <router-link to="/posts" class="text-white hover:text-gray-400">게시판 목록</router-link>
        </li>
        <li>
          <router-link to="/nested" class="text-white hover:text-gray-400">Nested</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-outline-light" @click="write">글쓰기</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import router from '../router';

  const write = () => {
    router.push('/posts/create')
  }
</script>

<style lang="scss" scoped>

</style>
