<!-- Dashboard.vue -->
<template>
  <div class="dashboard">
    <!-- GNB (Top Navigation) -->
    <header class="gnb">
      <div class="gnb-content">
        <h1>대시보드</h1>
        <div class="user-menu">
          <span>사용자 이름</span>
          <button @click="logout">로그아웃</button>
        </div>
      </div>
    </header>

    <!-- Main Layout -->
    <div class="main-container">
      <!-- LNB (Left Navigation) -->
      <nav class="lnb">
        <ul class="lnb-menu">
          <li
            v-for="(menu, index) in menus"
            :key="index"
            :class="{ active: selectedMenu === index }"
            @click="addTab(index)"
          >
            {{ menu.name }}
          </li>
        </ul>
      </nav>

      <!-- Content Area -->
      <main class="content">
        <div class="content-inner">
          <div v-if="activeTab !== null" class="tab-content">
            <h2>{{ tabs[activeTab].name }}</h2>
            <p>{{ tabs[activeTab].content }}</p>
          </div>
          <div v-else class="no-content">
            <p>메뉴를 선택하세요.</p>
          </div>
        </div>

        <!-- Tabs at Bottom -->
        <div class="tab-bar">
          <div
            v-for="(tab, index) in tabs"
            :key="tab.id"
            :class="{ 'tab-active': activeTab === index }"
            class="tab-item"
            @click="setActiveTab(index)"
          >
            <span>{{ tab.name }}</span>
            <button class="close-btn" @click.stop="removeTab(index)">X</button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 메뉴 데이터
const menus = ref([
  { name: '홈', content: '홈 화면에 오신 것을 환영합니다.' },
  { name: '사용자 관리', content: '사용자 관리 콘텐츠입니다.' },
  { name: '설정', content: '설정 페이지입니다.' },
  { name: '보고서', content: '보고서 데이터를 확인하세요.' },
  { name: '알림', content: '최신 알림 목록입니다.' },
]);

// 열린 탭 목록
const tabs = ref([]);
// 현재 선택된 LNB 메뉴
const selectedMenu = ref(null);
// 현재 활성 탭
const activeTab = ref(null);

// 탭 추가
const addTab = (index) => {
  const menu = menus.value[index];
  // 이미 탭에 존재하는지 확인
  if (!tabs.value.some((tab) => tab.name === menu.name)) {
    tabs.value.push({ ...menu, id: Date.now() }); // 고유 ID 추가
  }
  selectedMenu.value = index;
  activeTab.value = tabs.value.findIndex((tab) => tab.name === menu.name);
};

// 탭 전환
const setActiveTab = (index) => {
  activeTab.value = index;
};

// 탭 제거
const removeTab = (index) => {
  tabs.value.splice(index, 1);
  if (tabs.value.length === 0) {
    activeTab.value = null;
    selectedMenu.value = null;
  } else if (activeTab.value === index) {
    activeTab.value = Math.min(index, tabs.value.length - 1);
  } else if (activeTab.value > index) {
    activeTab.value -= 1;
  }
};

// 로그아웃 함수
const logout = () => {
  console.log('로그아웃 처리');
};
</script>

<style scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* GNB 스타일 */
.gnb {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #4f46e5;
  color: white;
  padding: 1rem;
  z-index: 1000;
}

.gnb-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-menu button {
  background: #ffffff;
  color: #4f46e5;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Main Layout */
.main-container {
  display: flex;
  flex: 1;
  margin-top: 60px;
}

/* LNB 스타일 */
.lnb {
  width: 250px;
  background-color: #f3f4f6;
  padding: 1rem;
  height: calc(100vh - 60px);
  overflow-y: auto;
}

.lnb-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.lnb-menu li {
  padding: 1rem;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.lnb-menu li:hover {
  background-color: #e5e7eb;
}

.lnb-menu li.active {
  background-color: #4f46e5;
  color: white;
}

/* Content 스타일 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #ffffff;
}

.content-inner {
  flex: 1;
}

.tab-content {
  animation: fadeIn 0.3s ease-in;
}

.no-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #666;
}

/* Bottom Tab Bar 스타일 */
.tab-bar {
  display: flex;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}

.tab-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  border-radius: 4px;
  cursor: pointer;
}

.tab-item.tab-active {
  background-color: #4f46e5;
  color: white;
}

.tab-item span {
  margin-right: 0.5rem;
}

.close-btn {
  background: none;
  border: none;
  color: #666;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
}

.tab-active .close-btn {
  color: white;
}

.close-btn:hover {
  color: #ff4444;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
