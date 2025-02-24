<template>
  <div class="myComp">
    <header>
      <slot name="header">헤더 기본 콘텐츠</slot>
    </header>
    <main>
      <slot >본문 기본 콘텐츠</slot>
    </main>
    <footer>
      <slot name="footer">푸터 기본 콘텐츠</slot>
  </footer>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
