<template>
  <div>
    <h2>게시글 목록</h2>
    <hr class="my-4">
    <div class="row g-3">
      <div class="col-3" v-for="post in posts" :key="post.id">
        <PostItem :title="post.title" :content="post.content" :createAt="post.createAt" @click="goPage(post.id)"></PostItem>
      </div>
    </div>
  </div>
</template>

<script setup>
import PostItem from '@/real/components/posts/PostItem.vue';
import {getPosts} from '@/real/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = ref([]);
const fetchPosts = () => posts.value = getPosts();

fetchPosts();

const goPage = (id) => router.push(`/posts/${id}`);
//const goPage = (id) => router.push({name: 'post-detail', params: {id}});
//const goPage = (id) => router.push({name: 'post-detail', params: {id}, query: {queryparam: id, qp2: '2222'}, hash: '#hashparam'});
</script>

<style lang="scss" scoped>

</style>
