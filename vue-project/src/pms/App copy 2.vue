<template>
  <div>
    <!-- 상단 네비게이션 바 (대메뉴) -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="bi bi-building me-2"></i>
          관리 시스템
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item" v-for="menu in mainMenus" :key="menu.id">
              <a
                class="nav-link"
                :class="{ 'active': activeMainMenu === menu.id }"
                href="#"
                @click.prevent="setActiveMainMenu(menu.id)"
              >
                <i :class="menu.icon + ' me-1'"></i>
                {{ menu.name }}
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center">
            <span class="text-light me-3">홍길동님</span>
            <button class="btn btn-outline-light btn-sm" @click="logout">
              <i class="bi bi-box-arrow-right me-1"></i>로그아웃
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid">
      <div class="row">
        <!-- 좌측 사이드바 (중메뉴) -->
        <div class="col-md-2 bg-light min-vh-100 p-0 border-end">
          <div class="list-group list-group-flush">
            <div class="p-3 bg-primary text-white">
              <i class="bi bi-list-nested me-2"></i>
              {{ activeMainMenuName }} 메뉴
            </div>
            <a
              v-for="submenu in filteredSubmenus"
              :key="submenu.id"
              href="#"
              class="list-group-item list-group-item-action"
              :class="{ 'active': activeSubMenu === submenu.id }"
              @click.prevent="setActiveSubMenu(submenu.id)"
            >
              <i :class="submenu.icon + ' me-2'"></i>
              {{ submenu.name }}
            </a>
          </div>
        </div>

        <!-- 메인 컨텐츠 영역 (탭 구성) -->
        <div class="col-md-10 p-4">
          <h4 class="mb-4">
            <i :class="activeSubMenuIcon + ' me-2'"></i>
            {{ activeSubMenuName }}
          </h4>

          <!-- 탭 네비게이션 -->
          <ul class="nav nav-tabs mb-3">
            <li class="nav-item" v-for="tab in tabs" :key="tab.id">
              <button
                class="nav-link position-relative"
                :class="{ 'active': activeTab === tab.id }"
                @click="setActiveTab(tab.id)"
              >
                {{ tab.name }}
                <button
                  v-if="tab.closable"
                  class="btn-close btn-close-sm position-absolute top-0 end-0"
                  style="font-size: 0.5rem; margin-top: 2px; margin-right: 2px;"
                  @click.stop="closeTab(tab.id)"
                ></button>
              </button>
            </li>
            <li class="nav-item">
              <button
                class="nav-link text-success"
                @click="addNewTab"
              >
                <i class="bi bi-plus-circle"></i>
              </button>
            </li>
          </ul>

          <!-- 탭 컨텐츠 -->
          <div class="tab-content border border-top-0 rounded-bottom p-3">
            <div v-if="activeTab === 'tab1'">
              <h5>사용자 목록</h5>
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>부서</th>
                    <th>직책</th>
                    <th>이메일</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in sampleUsers" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.department }}</td>
                    <td>{{ user.position }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                      <span :class="'badge bg-' + user.statusColor">{{ user.status }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else-if="activeTab === 'tab2'">
              <h5>대시보드</h5>
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h6 class="card-title text-muted">총 사용자</h6>
                      <h2 class="mb-0">152</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h6 class="card-title text-muted">활성 사용자</h6>
                      <h2 class="mb-0">98</h2>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mb-3">
                    <div class="card-body">
                      <h6 class="card-title text-muted">대기 중인 요청</h6>
                      <h2 class="mb-0">24</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else-if="activeTab === 'tab3'">
              <h5>사용자 등록</h5>
              <form class="row g-3">
                <div class="col-md-6">
                  <label for="inputName" class="form-label">이름</label>
                  <input type="text" class="form-control" id="inputName">
                </div>
                <div class="col-md-6">
                  <label for="inputEmail" class="form-label">이메일</label>
                  <input type="email" class="form-control" id="inputEmail">
                </div>
                <div class="col-md-6">
                  <label for="inputDepartment" class="form-label">부서</label>
                  <select class="form-select" id="inputDepartment">
                    <option selected>선택...</option>
                    <option>관리부</option>
                    <option>영업부</option>
                    <option>개발부</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputPosition" class="form-label">직책</label>
                  <select class="form-select" id="inputPosition">
                    <option selected>선택...</option>
                    <option>사원</option>
                    <option>대리</option>
                    <option>과장</option>
                    <option>차장</option>
                    <option>부장</option>
                  </select>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">등록</button>
                </div>
              </form>
            </div>
            <div v-else>
              <p>{{ activeTabName }} 컨텐츠</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 대메뉴 데이터
const mainMenus = [
  { id: 'menu1', name: '관리', icon: 'bi bi-gear' },
  { id: 'menu2', name: '운영', icon: 'bi bi-bar-chart' },
  { id: 'menu3', name: '통계', icon: 'bi bi-graph-up' },
  { id: 'menu4', name: '설정', icon: 'bi bi-sliders' }
];

// 중메뉴 데이터
const submenus = [
  { id: 'submenu1', mainMenuId: 'menu1', name: '사용자 관리', icon: 'bi bi-people' },
  { id: 'submenu2', mainMenuId: 'menu1', name: '권한 관리', icon: 'bi bi-shield-lock' },
  { id: 'submenu3', mainMenuId: 'menu1', name: '부서 관리', icon: 'bi bi-diagram-3' },
  { id: 'submenu4', mainMenuId: 'menu2', name: '업무 관리', icon: 'bi bi-briefcase' },
  { id: 'submenu5', mainMenuId: 'menu2', name: '일정 관리', icon: 'bi bi-calendar3' },
  { id: 'submenu6', mainMenuId: 'menu3', name: '사용 통계', icon: 'bi bi-pie-chart' },
  { id: 'submenu7', mainMenuId: 'menu3', name: '접속 현황', icon: 'bi bi-activity' },
  { id: 'submenu8', mainMenuId: 'menu4', name: '시스템 설정', icon: 'bi bi-gear-wide' },
  { id: 'submenu9', mainMenuId: 'menu4', name: '알림 설정', icon: 'bi bi-bell' }
];

// 탭 데이터
const tabs = ref([
  { id: 'tab1', name: '사용자 목록', closable: false },
  { id: 'tab2', name: '대시보드', closable: true },
  { id: 'tab3', name: '사용자 등록', closable: true }
]);

// 샘플 사용자 데이터
const sampleUsers = [
  { id: 'U001', name: '홍길동', department: '관리부', position: '과장', email: 'hong@example.com', status: '활성', statusColor: 'success' },
  { id: 'U002', name: '김영희', department: '영업부', position: '대리', email: 'kim@example.com', status: '활성', statusColor: 'success' },
  { id: 'U003', name: '이철수', department: '개발부', position: '차장', email: 'lee@example.com', status: '비활성', statusColor: 'secondary' },
  { id: 'U004', name: '박지민', department: '영업부', position: '사원', email: 'park@example.com', status: '활성', statusColor: 'success' },
  { id: 'U005', name: '최윤서', department: '개발부', position: '부장', email: 'choi@example.com', status: '휴가중', statusColor: 'warning' }
];

// 활성 상태 관리
const activeMainMenu = ref('menu1');
const activeSubMenu = ref('submenu1');
const activeTab = ref('tab1');
let tabCounter = ref(4); // 새 탭 생성 시 사용할 카운터

// 활성 대메뉴 이름 계산
const activeMainMenuName = computed(() => {
  const menu = mainMenus.find(menu => menu.id === activeMainMenu.value);
  return menu ? menu.name : '';
});

// 필터링된 중메뉴 계산
const filteredSubmenus = computed(() => {
  return submenus.filter(submenu => submenu.mainMenuId === activeMainMenu.value);
});

// 활성 중메뉴 이름 계산
const activeSubMenuName = computed(() => {
  const submenu = submenus.find(submenu => submenu.id === activeSubMenu.value);
  return submenu ? submenu.name : '';
});

// 활성 중메뉴 아이콘 계산
const activeSubMenuIcon = computed(() => {
  const submenu = submenus.find(submenu => submenu.id === activeSubMenu.value);
  return submenu ? submenu.icon : '';
});

// 활성 탭 이름 계산
const activeTabName = computed(() => {
  const tab = tabs.value.find(tab => tab.id === activeTab.value);
  return tab ? tab.name : '';
});

// 대메뉴 설정
const setActiveMainMenu = (menuId) => {
  activeMainMenu.value = menuId;
  // 해당 대메뉴의 첫 번째 중메뉴 자동 선택
  const firstSubmenu = submenus.find(submenu => submenu.mainMenuId === menuId);
  if (firstSubmenu) {
    activeSubMenu.value = firstSubmenu.id;
  }
};

// 중메뉴 설정
const setActiveSubMenu = (submenuId) => {
  activeSubMenu.value = submenuId;
};

// 탭 설정
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

// 탭 닫기
const closeTab = (tabId) => {
  const index = tabs.value.findIndex(tab => tab.id === tabId);
  if (index !== -1) {
    tabs.value.splice(index, 1);
    if (activeTab.value === tabId) {
      // 닫은 탭이 활성화 탭이었다면 첫 번째 탭으로 이동
      activeTab.value = tabs.value[0].id;
    }
  }
};

// 새 탭 추가
const addNewTab = () => {
  const newTabId = 'tab' + tabCounter.value;
  tabs.value.push({
    id: newTabId,
    name: '새 탭 ' + (tabCounter.value - 3),
    closable: true
  });
  activeTab.value = newTabId;
  tabCounter.value++;
};

// 로그아웃
const logout = () => {
  // 로그아웃 로직 구현
  console.log('로그아웃');
  // 로그인 페이지로 리다이렉트할 수 있음
};
</script>
