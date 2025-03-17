<template>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h3 class="text-lg font-semibold text-gray-700">Analytics</h3>
      
      <!-- 하위 네비게이션 -->
      <nav class="mt-4 flex space-x-4">
        <RouterLink
          to="/analytics"
          class="text-gray-600 hover:text-blue-500"
          active-class="text-blue-500 font-semibold"
          exact
        >
          Overview
        </RouterLink>
        <RouterLink
          to="/analytics/reports"
          class="text-gray-600 hover:text-blue-500"
          active-class="text-blue-500 font-semibold"
        >
          Reports
        </RouterLink>
        <RouterLink
          to="/analytics/trends"
          class="text-gray-600 hover:text-blue-500"
          active-class="text-blue-500 font-semibold"
        >
          Trends
        </RouterLink>
      </nav>
  
      <!-- 중첩된 콘텐츠 -->
      <div class="mt-6">
        <RouterView />
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink, RouterView } from 'vue-router';
  </script>