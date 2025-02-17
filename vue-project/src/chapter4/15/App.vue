<template>
  <div>
    <Form class="bg-red-500" v-model="username"></Form>

    <p>결과값: {{ username }}</p>


    <hr><hr><hr><hr>

    <BookComponent
      v-model:title="bookTitle"
      v-model:author="bookAuthor"
    />
    <br>
    bookTitle: {{ bookTitle }}
    <br>
    bookAuthor: {{ bookAuthor }}
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Form from './form.vue';
import BookComponent from './BookComponent.vue';

const username = ref('');
const bookTitle = ref('');
const bookAuthor = ref(0);

</script>

<style lang="scss" scoped>

</style>
