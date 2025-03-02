<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one">Nested One</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two">Nested Two</RouterLink>
      </li>
      <!-- replace는 히스토리에 쌓지 않는다. 그러므로 뒤로가기시 페이지를 남기지 않는다. -->
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name: 'NestedOne', replace: true}">Nested One Replace</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" :to="{name: 'NestedTwo', replace: true}">Nested Two Replace</RouterLink>
      </li>
    </ul>
    <hr class="my-4">
    <RouterView></RouterView>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
