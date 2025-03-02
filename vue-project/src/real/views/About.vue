<template>
  <div>
    <h1>About</h1>
    <p>{{$route}}</p>
    <hr><hr><hr><hr><hr><hr><hr>
    <p>{{ $route.path }}</p>
    <hr><hr><hr><hr><hr><hr><hr>
    <button class="btn btn-primary" @click="$router.push('/')">HOME으로 이동</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

  const route = useRoute();
  console.log(`route.path: ${route.path}`);
  console.log(`route.name: ${route.name}`);
</script>

<style lang="scss" scoped>

</style>
