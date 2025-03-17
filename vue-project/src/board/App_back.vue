<template>
  <div class="min-h-screen bg-gray-100 flex">
    <!-- 사이드바 -->
    <aside class="w-64 bg-white shadow-md">
      <div class="p-4">
        <h1 class="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <nav class="mt-6">
        <ul>
          <li>
            <RouterLink
              to="/"
              class="block p-4 text-gray-700 hover:bg-gray-200"
              active-class="bg-gray-200 font-semibold"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/analytics"
              class="block p-4 text-gray-700 hover:bg-gray-200"
              active-class="bg-gray-200 font-semibold"
            >
              Analytics
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/settings"
              class="block p-4 text-gray-700 hover:bg-gray-200"
              active-class="bg-gray-200 font-semibold"
            >
              Settings
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- 메인 콘텐츠 -->
    <div class="flex-1 flex flex-col">
      <!-- 헤더 -->
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h2 class="text-xl font-semibold text-gray-800">Welcome, User!</h2>
        <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Logout
        </button>
      </header>

      <!-- 대시보드 콘텐츠 (RouterView로 동적 렌더링) -->
      <main class="p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
/* 추가적인 커스텀 스타일이 필요하면 여기에 작성 */
</style>