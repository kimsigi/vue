<template>
  <div>
    <h1>Watch, WatchEffect</h1>
    <p>이름: <input class="border-2 border-indigo-600" type="text" v-model="name" /></p>
    <p>
      더하기:
      <input class="border-2 border-indigo-600" type="text" v-model.number="a" />
      <input class="border-2 border-indigo-600" type="text" v-model.number="b" />
    </p>

    <p>리버스메세지: {{ reverseMessage }}</p>
    <p>reversmsgFunc: {{ reversmsgFunc }}</p>
  </div>
</template>

<script setup>
import axios from 'axios'
import { computed, reactive, ref, watch, watchEffect } from 'vue'
// 싱글 레프
const name = ref('Kim')
watch(name, (newValue, oldValue) =>
  console.log('## newValue: ', newValue, '## oldValue: ', oldValue),
)

// getter로
const a = ref(0)
const b = ref(0)
watch(
  () => a.value + b.value,
  (newval) => console.log('## sum: ', newval),
)

// array
watch([name, () => a.value + b.value], ([newVal1, newVal2]) => {
  console.log('### newName:', newVal1)
  console.log('### a+b:', newVal2)
})

const obj = reactive({
  a: 1,
  b: 2,
})

// 그냥 obj.a를 하면 얘는 단순한 숫자일 뿐 reactive가 아니기 때문에 동작하지 않음
//watch(obj.a, (newVal) => console.log('## 그냥 obj newVal: ', newVal))
// getter로 해야 reactive로 동작
watch(() => obj.a, (newVal) => console.log('## watch obj.a newVal: ', newVal));

const person = reactive({
  name: '홍길동',
  age: 30,
  hobby: '운동',
  obj: {
    count: 0,
  },
})
// deep: true로 하면 obj까지 감지 가능 ( default는 false )
// 이로써 해당 reactive 반응형 객체(person)에 대한 모든 변화를 감지하고 싶으면 deep: true로 설정
// deep 옵션은 큰 데이터 구조에서 사용할 때 비용이 많이 들 수 있습니다.
//  -> 필요한 경우에만 사용하고 성능 영향에 주의하십시오.
watch(() => person, (newVal) => console.log('## person newVal: ', newVal),{ deep: true });

// immediate: true로 하면 watch가 처음에 무조건 한번은 자동 실행
const message = ref("hello world");
const reverseMessage = ref("");
watch(message, (newVal) => {
  reverseMessage.value = newVal.split("").reverse().join("");
}
, { immediate: true }
);

// 최초에 한번 실행하게끔 함수로 선언하고 아래에서 호출하는 방법도 있으나, 이 방법은 watchEffec를 통해서 대체할 수 있음
const reversFunc = () => {
  reverseMessage.value = message.value.split("").reverse().join("");
  console.log("### reversFunc: ", message.value);
}

watch(message, reversFunc);
reversFunc();

// watch로 구현하는걸 computed도 할 수 있다.
// 대체로 computed로 가능하면 computed로 하는게 옳다.
const msg = ref("hi man!");
const reversmsg = ref("");
const reversmsgFunc = computed(() => {
  console.log(`${reversmsg.value} 백틱도 되나요!`);
  return msg.value.split('').reverse().join('')
});

// watchEffect랑 watch랑 computed랑은 실무에서 테스트하면서 그때그떄 필요한걸 써야겠네.
let response = {};
watchEffect(async () => {
  try {
    response = await axios.get('https://reqres.in/api/users?page=1&per_page=100');

    const {data, status} = await axios.get('https://reqres.in/api/users?page=2&per_page=10');

    console.log("## response2:", data, status);
  } catch(e) {
    console.log('## error!!!!: ', e);
  } finally {
    console.log('## response: ', response);
  }
  console.log("### 다 끝났다");
});

</script>

<style lang="scss" scoped></style>
