<template>
  <div>
    <h1>Home</h1>
    <p>{{$route}}</p>
    <hr><hr><hr><hr><hr><hr><hr>
    <p>{{ $route.path }}</p>
    <hr><hr><hr><hr><hr><hr><hr>
    <button class="btn btn-primary" @click="goAboutPage">About으로 이동</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
  const router = useRouter();
  const route = useRoute();

  console.log(`route.path: ${route.path}`);
  console.log(`route.name: ${route.name}`);

  const goAboutPage = () => {
    router.push("/about");
  }
</script>

<style lang="scss" scoped>

</style>
