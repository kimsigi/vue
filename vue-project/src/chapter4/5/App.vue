<template>
    <div>
        <h2>1. Computed</h2>
        <p>
            템플릿 문법{{}}은 간단히 사용 하면 매우 편리합니다. 
            <br>
            하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있습니다. 
            <br>
            예를 들어 아래와 같이 객체가 있는경우:
            <ul>
                <li>강의가 존재합니까? {{  teacher.lectures.length > 0 ? "있음": "없음"}}</li>
                <li>강의가 있다면 몇개입니까? : {{ teacher.lectures.length }}개</li>
                <li><button @click="addLecture">강의추가</button></li>
                <li><button @click="removeLecture">강의삭제</button></li>
            </ul>
            
            <br>
            이 시점에서 템플릿 표현식은 복잡해지며 선언적이지 않습니다. 
            <br>
            또 이러한 코드를 여러곳에서 반복적으로 사용해야 한다면 더더욱 비효율 적일 것입니다.
            <br>
            이럴때 사용하는 것이 계산된 속성(computed property)입니다. 
            <br>
            <ul>
                <li>{{ `강의가 존재합니까(computed)? ${hasLecture}` }}</li>
                <li>{{ `강의가 존재합니까(method)? ${hasLectureMethod()}` }}</li>
                <li>{{ `1강의가 존재합니까(computed)? ${hasLecture}` }}</li>
                <li>{{ `1강의가 존재합니까(method)? ${hasLectureMethod()}` }}</li>
            </ul>
            
            <strong>Computed vs Method</strong>
            <br><br>
            computed와 메서드는 동일한 결과를 얻을 수 있습니다. 
            <br> 
            하지만 차이점은 computed는 결과가 캐시된다는 것입니다.
            <br>
            그리고 computed 내 반응형 데이터가 변경된 경우에만 다시 계산됩니다.
        </p>

        <hr>
        <h2>2. Writable Computed</h2>
        <p>
            Computed는 기본적으로 getter전용입니다. 
            <br>
            계산된 속성에 새 값을 할당하려고 하면 런타임 경고가 표시됩니다.
            <br>
            새로운 계산된 속성이 필요한 경우에 getter와 setter를 모두 제공하여 속성을 만들 수 있습니다.

            <ul>
                <li>firstName: {{ firstName }}</li>
                <li>lastName: {{ lastName }}</li>
                <li>fullName2: {{ fullName2 }}</li>
                <li><button @click="changeName">이름변경</button></li>
            </ul>
        </p>
    </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
    setup () {
        
        // 1. Computed
        const teacher = reactive({
            name: '홍길동',
            lectures: [
                'HTML/CSS',
                'JavaScript',
                'Vue3'
            ]
        });

        const addLecture = () => teacher.lectures.push("추가강의");
        const removeLecture = () => teacher.lectures.pop(0);

        // computed - 내부 값이 변경되기 전에는 캐시됨
        const hasLecture = computed(() => {
            console.log("### hasLecture");
            return teacher.lectures.length > 0 ? "있음" : "없음"
        });

        // method - 항상 호출때마다 로직 실행
        const hasLectureMethod = () => {
            console.log("### hasLectureMethod");
            return teacher.lectures.length > 0 ? "있음": "없음";
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 2. Writable Computed
        const firstName = ref("홍");
        const lastName  = ref("길동");

        const fullName = computed(() => {
            console.log("#### fullName computed: ");
            return firstName.value + " " + lastName.value;
        });
        
        // computed는 readonly 속성이라 .value 로 변경할 수 없음
        //fullName.value = "김 길자";

        const fullName2 = computed({
            get() {
                return firstName.value + " " + lastName.value;
            },
            set(value) {
                //firstName.value = value.split(" ")[0];
                //lastName.value = value.split(" ")[1];

                // 구조분해할당식
                [firstName.value, lastName.value] = value.split(" ");
            }
        });

        const count = ref(0);

        fullName2.value = "김 길자";

        const changeName = () => {
            count.value++;
            fullName2.value = count.value + " 님자" + count.value;
        }

        return {
            teacher,
            addLecture,
            removeLecture,
            hasLecture,
            hasLectureMethod,

            firstName,
            lastName,
            fullName,
            fullName2,

            count,
            changeName

        }
    }
}
</script>

<style lang="scss" scoped>

</style>