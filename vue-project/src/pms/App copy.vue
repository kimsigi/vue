<template>
  <div class="container">
    <div class="row justify-content-center align-items-center min-vh-100">
      <div class="col-md-5 col-sm-8">
        <div class="card shadow-lg border-0">
          <div class="card-body p-4">
            <!-- 로고 및 제목 -->
            <div class="text-center mb-4">
              <!-- 로고 대신 아이콘 사용 -->
              <div class="mb-3 d-flex justify-content-center">
                <div class="rounded-circle bg-primary d-flex align-items-center justify-content-center" style="width: 70px; height: 70px;">
                  <i class="bi bi-person-circle text-white" style="font-size: 2.5rem;"></i>
                </div>
              </div>
              <h2 class="fw-bold">로그인</h2>
            </div>
            
            <!-- 로그인 폼 -->
            <form @submit.prevent="handleLogin">
              <!-- 아이디 입력 -->
              <div class="mb-3">
                <label for="username" class="form-label">아이디</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    v-model="username"
                    placeholder="아이디를 입력하세요"
                    required
                  />
                </div>
              </div>
              
              <!-- 비밀번호 입력 -->
              <div class="mb-3">
                <label for="password" class="form-label">비밀번호</label>
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="bi bi-lock"></i>
                  </span>
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    id="password"
                    v-model="password"
                    placeholder="비밀번호를 입력하세요"
                    required
                  />
                  <button 
                    class="btn btn-outline-secondary" 
                    type="button"
                    @click="showPassword = !showPassword"
                  >
                    <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                  </button>
                </div>
              </div>
              
              <!-- 로그인 옵션 -->
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="remember"
                    v-model="rememberMe"
                  />
                  <label class="form-check-label" for="remember">로그인 상태 유지</label>
                </div>
                <a href="#" class="link-primary text-decoration-none small">비밀번호 찾기</a>
              </div>
              
              <!-- 로그인 버튼 -->
              <button
                type="submit"
                class="btn btn-primary w-100 py-2 mb-3"
                :disabled="isLoading"
              >
                <span v-if="isLoading" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                {{ isLoading ? '로그인 중...' : '로그인' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 상태 관리
const username = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);

// 로그인 핸들러
const handleLogin = () => {
  isLoading.value = true;
  
  // 여기에 로그인 로직 구현
  // 예: API 호출 등
  
  setTimeout(() => {
    // 테스트를 위한 타임아웃 - 실제 구현 시에는 제거
    isLoading.value = false;
    console.log('로그인 시도:', { 
      username: username.value, 
      password: password.value,
      rememberMe: rememberMe.value 
    });
  }, 1500);
};
</script>