<template>
  <div>
    <h1>이벤트 처리</h1>

    <hr>
    <!-- 디폴트 파라메터 event 전달 -->
    <button @click="callevt">버튼</button>

    <br>
    <br>
    <!-- event를 인라인에서 직접 선언시 $event로 사용 -->
    <button @click="callevt2('hello workd', $event)">버튼2</button>

    <hr>
    <!-- 이벤트 버블링을 구현했고, stop을 통해 버블링 전파를 막음 -->
    <strong>이벤트 전파 테스트 & Tailwindcss + scss 테스트</strong>
    <div class="bg-red-300 text-white" @click.stop="eventBubbling1">
      최상위
      <div class="bg-blue-300 text-white pl-[30px]" @click.stop="eventBubbling2">
        중간
        <div class="bg-yellow-300 text-white pl-[60px]" @click.stop="eventBubbling3">
          맨안쪽
        </div>
      </div>
    </div>

    <hr>
    <!-- 서브밋을 구현했고, .prevent를 통해 브라우저의 동작을 중지한다.  -->
    <form @submit.prevent="submitFrm">
      <button class="test-class">SCSS버튼</button>
    </form>
  </div>

    <hr>
    <!-- 수식어 체이닝도 가능하다. -->
    <a href="http://www.naver.com" class="block bg-red-300 text-white" @click.prevent="eventBubblingA1">
        최상위A
        <a href="http://www.naver.com" class="block bg-blue-300 text-white pl-[30px]" @click.stop.prevent="eventBubblingA2">
            중간A
            <a href="http://www.naver.com" class="block bg-yellow-300 text-white pl-[60px]" @click.stop="eventBubblingA3">
                맨안쪽A
            </a>
        </a>
    </a>

    <hr>
    <!-- .once를 적용하면 딱 1번만 실행한다. -->
    <button @click.once="eventOnce">ONCE 테스트</button>

    <hr>
    <!-- 키보드 입력 수식어 이벤트 -->
    <div class="pt-[30px] text-3xl ">
        <strong >이벤트 키 처리</strong>
        <br/>
        단일입력: <input class="border-2 border-indigo-600" type="text" @keyup.enter="keyupEvt" />
        <br/>
        키조합입력: <input class="border-2 border-indigo-600" type="text" @keyup.alt.enter="keyupEvt" />
        <br/>
        확실한키조합(exact): <input class="border-2 border-indigo-600" type="text" @keyup.exact.alt.enter="keyupEvt" />
    </div>

    <hr>

    <!-- 마우스 수식어 컨트롤 -->
     <button class="block bg-red-300" @click.left="mouseEvt('left')">마우스컨트롤LEFT</button>
     <button class="block bg-blue-300" @click.right="mouseEvt('right')">마우스컨트롤RIGHT</button>
     <button class="block bg-yellow-300" @click.middle="mouseEvt('middle')">마우스컨트롤MIDDLE</button>
</template>

<script setup>
  // 이벤트 호출시 디폴트 파라메터로 event 객체를 전달받음
  const callevt = (event) => console.log(event);

  // 파라메터를 설정해서 받음
  const callevt2 = (msg, evt) => {
    console.log(msg);
    console.log(evt);
  };

  // 이벤트 버블링 구현 이벤트
  const eventBubbling1 = (e) => console.log("#버블버블1", e.target.tagName);
  const eventBubbling2 = (e) => console.log("#버블버블2", e.target.tagName);
  const eventBubbling3 = (e) => console.log("#버블버블3", e.target.tagName);

  // preventDefault 구현 이벤트
  const submitFrm = (e) => {
    console.log("### 폼전송:", e);
    //e.target.submit();  // 해당 주석 제거시 서브밋 동작함
  }

  // 이벤트 버블링과 체이닝 구현 위한 이벤트
  const eventBubblingA1 = (e) => console.log("## 버블버블A1", e.target);
  const eventBubblingA2 = (e) => console.log("## 버블버블A2", e.target);
  const eventBubblingA3 = (e) => console.log("## 버블버블A3", e.target);

  // .once 적용 이벤트
  const eventOnce = () => alert("ONCE!");

  // 키 이벤트
  const keyupEvt = (e) => console.log("이벤트KEY: ", e.key, e.target.value)

  // 마우스 이벤트
  const mouseEvt = (message) => console.log("### 마우스컨트롤: ", message);

</script>

<style lang="scss" scoped>
  $COLOR_RED: green;
  .test-class {
    color: $COLOR_RED;
  }
</style>
