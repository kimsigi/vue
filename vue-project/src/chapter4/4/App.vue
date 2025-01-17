<template>
    <div>
        <h2>1. 반응형 상태 선언하기</h2>
        <p>
                JavaScript 객체에서 반응형 상태를 생성하기 위해서는 reactive() 함수를 사용할 수 있습니다.
                <ul>
                    <li>reactive object: {{ state }}</li>
                    <li>reactive object.count: {{ state.count }}</li>
                    <li><button @click="increment">카운트 증가!</button></li>
                </ul>

                <br>
                컴포넌트 template에서 반응형 객체를 사용하려면 setup()함수에서 선언하고 리턴해야 합니다.
                <ul>
                    <li>반환된 상태는 반응형 객체입니다. 반응형 변환은 "깊습니다”</li>
                    <li>컴포넌트의 data()에서 객체를 반환할 때, 이것은 내부적으로 reactive()에 의해 반응형으로 만들어집니다.</li>
                </ul>
        </p>

        <hr>

        <h2>2. ref로 원시값 반응형 데이터 생성하기</h2>
        <p>
            reactive() 함수는 객체타입에만 동작합니다. 그래서 기본타입(number, string, boolean)을 반응형으로 만들고자 할 때  ref 메소드를 사용할 수 있습니다.
            <br><br>
            ref 메서드는 변이가능한(mutable) 객체를 반환합니다. 
            <br>
            이 객체 안에는 value라는 하나의 속성만 포함하는데요. 
            <br>
            value값은 ref() 메서드에서 매개변수로 받은 값을 갖고 있습니다.
            <br>
            이 객체는 내부의 value 값에 대한 반응형 참조(reference) 역할을 합니다.
            <br><br>
            <strong>템플릿에서 사용</strong>
            <br>
            템플릿에서 사용할 때는 자동으로 내부 값(value)을 풀어내기(Unwarpping) 때문에 .value를 추가할 필요없이 사용할 수 있습니다.
            <ul>
                <li>refVar(Unwarpping하므로 .value를 하지 않아도 값이 찍힌다.)=====================> {{ refVar }}</li>
                <li>refVar.value(Unwarpping하므로 .value를 하면 값이 찍히지 않는다.)=====================> {{ refVar.value }}</li>
                <li><button @click="refIncrement">원시값 증가!</button></li>
            </ul>            
        </p>

        <hr>

        <h2>3. 반응형 객체의 ref Unwrapping</h2>
        <p>
            ref가 반응형 객체의 속성으로 접근할 때, 자동적으로 내부 값으로 벗겨내서, 일반적인 속성과 마찬가지로 동작합니다. 
            <br>
            이때 반응형은 연결되어 있습니다.

            <ul>
                <li>count: {{ count }}</li>
                <li>state2.count: {{ state2.count }}</li>
                <li><button @click="increment3">클릭!</button></li>
                
            </ul>
            <br>
            <strong>배열 및 컬렉션의 참조 Unwrapping</strong>
            <br>
            반응형 객체와 달리 ref가 반응형 배열 또는 Map과 같은 기본 컬렉션 타입의 요소로 접근될 때 수행되는 래핑 해제가 없습니다.
            <br>
            <ul>
                <li>array: {{ arr }}=====================> {{ `백틱으로 값 출력: ${arr[0].value}` }}</li>
                <li>array2 : {{arr2}}=====================> {{ arr2.get("count").value }}</li>
            </ul>
        </p>
        
        <hr>

        <h2>4. 반응형 상태 구조 분해하기(Destructuring)</h2>
        <p>
            큰 반응형 객체의 몇몇 속성을 사용하길 원할 때, 원하는 속성을 얻기 위해 ES6 구조 분해 할당을 사용하는 것은 매우 일반적입니다.
            <br><br>
            <ul>
                <li>title: {{ title }}</li>
                <li>contents: {{ contents }}</li>
                <li>regDt: {{ regDt }}</li>
                <li>hit: {{ hit }}</li>
                <li>refHit: {{ refHit }}</li>
                <li><button @click="increment4">증가!</button></li>
                <li>toRef: 객체에서 원시값에 대한 개별로 1개씩 참조</li>
                <li>toRefs: reactive 의 모든 속성에 대해 toRef 한방에 적용, 구조분해할당이 가능하다.</li>
            </ul>
            <br>
            안타깝게도, 그러한 구조 분해로 두 속성은 반응형을 잃게 될 것 입니다. 
            <br>
            이런 경우, 반응형 객체를 일련의 ref 들로 변환해야 합니다. 
            <br>
            이러한 ref 들은 소스 객체에 대한 반응형 연결을 유지합니다.
            <br>
            toRefs, toRef를 사용하면 반응형 객체의 속성과 동기화 됩니다. 
            <br>
            그래서 원본 속성을 변경하면 ref 객체가 업데이트되고 그 반대의 경우도 마찬가지 입니다.
        </p>

        <hr>
        <h2>5. readonly를 이용하여 반응형 객체의 변경 방지</h2>
        <p>
            때때로 반응형 객체(ref나 reactive)의 변화를 추적하기 원하지만, 또한 특정 부분에서는 변화를 막기를 원하기도 합니다. 
            <br>
            예를 들어, Provide/Inject로 주입된 반응형 객체를 갖고 있을 때, 우리는 그것이 주입된 곳에서는 해당 객체가 변이되는 걸 막고자 할 것입니다. 
            <br>
            이렇게 하려면 원래 객체에 대한 읽기 전용 프록시를 생성하십시오.

            <ul>
                <li>org.count: {{ org.count }}</li>
                <li>orgReadonly.count: {{ orgReadonly.count }}</li>
                <li><button @click="increment5">증가!</button></li>
            </ul>

        </p>
    </div>
</template>

<script>

import * as v from 'vue';
// import {reactive, ref } from 'vue';

export default {
    setup () {
        // 1. 반응형 상태 선언하기
        const state = v.reactive({count: 0});
        const increment = () => state.count++;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 2. ref로 원시값 반응형 데이터 생성하기
        const refVar = v.ref(0);
        const refIncrement = () => refVar.value++;

        console.log("#### refVar: ", refVar);   // 참조변수
        console.log("#### refVar.value: ", refVar.value);   // 참조변수의 값

        refVar.value++;

        console.log("#### refVar: ", refVar);   // 참조변수
        console.log("#### refVar.value: ", refVar.value);   // 참조변수의 값
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 3. 반응형 객체의 ref Unwrapping
        const count = v.ref(0);
        const state2 = v.reactive({
            count: count
        });
        const increment3 = () => {
            count.value++;
            state2.count++;
        };

        count.value++;
        state2.count++;
        
        console.log("#### count: ", count.value);
        console.log("#### state2.count: ", state2.count);

        const arr = v.reactive([v.ref("message")]);
        const arr2 = v.reactive(new Map([['count', v.ref(0)]]));
        console.log("### 컬렉션일 경우 .value가 언래핑 되지 않으므로 붙여줘야 한다.: ", arr[0].value);
        console.log("### Map일 경우도 .value가 언래핑 되지 않으므로 붙여줘야 한다.: ", arr2.get("count").value);
///////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 4. 반응형 상태 구조 분해하기(Destructuring)
        const obj = v.reactive({
            title: "제목",
            contents: "내용",
            regDt: new Date(),
            hit: 0
        });

        const {title, contents} = obj;

        console.log("### 얘는 그냥 구조분해할당 했으므로 스트링일까? title: ", typeof title);
        console.log("### 얘는 그냥 구조분해할당 했으므로 스트링일까? contents: ", typeof contents);
        
        const {regDt, hit} = v.toRefs(obj);
        
        console.log("### 얘는 toRefs 구조분해할당 했으므로 객체? regDt: ", typeof regDt);
        console.log("### 얘는 toRefs 구조분해할당 했으므로 객체? hit: ", typeof hit);
        hit.value++;
        hit.value++;

        const refHit = v.toRef(obj, "hit");
        console.log(refHit.value);
        hit.value++;

        const increment4 = () => obj.hit++;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
        // 5. readonly를 이용하여 반응형 객체의 변경 방지
        const org = v.reactive({count: 0});     // org는 리드온리가 아니니까.. 변경된다.
        const orgReadonly = v.readonly(org);    // 리드온리 복사된 orgReadonly는 변경되지 않는다.

        const increment5 = () => {
            org.count++;
            orgReadonly.count++;
        }

        return {
            state,
            increment,

            refVar,
            refIncrement,

            count,
            state2,
            increment3,

            arr,
            arr2,

            obj,
            title,
            contents,
            regDt,
            hit,
            refHit,
            increment4,

            org,
            orgReadonly,
            increment5

        }
    }
}
</script>

<style lang="scss" scoped>

</style>