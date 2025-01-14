<template>
    <div>
        <h2>텍스트 보간법</h2>
        <p>데이터 바인딩의 가장 기본형태는 \{\{ data \}\}(이중 중괄호, 콧수염 괄호)를 사용하는 것입니다. </p>
        <ul>
            <li>이중 중괄호를 사용하면 해당 문법은 컴포넌트 인스턴스의 message 값으로 대체됩니다.</li>
            <li>message 속성이 변경될 때 마다 갱신(반응)됩니다.</li>
        </ul>

        <p>문자열: {{ message }}</p>
        <p v-once>문자열(V-ONCE): {{ message }}</p>
        <button @click="fnMessage">클릭!</button>

        <hr>
        <h2>HTML (v-html)</h2>
        <p>이중 중괄호는 데이터를 HTML이 아닌 일반 텍스트로 해석합니다. 실제 HTML을 출력하려면 v-html 디렉티브를 사용해야 합니다.</p>

        <p>텍스트: {{ rawHtml }}</p>
        <p>v-html 속성 적용: <span v-html="rawHtml"></span></p>

        <hr>

        <h2>속성 바인딩 (v-bind)</h2>
        <p>이중 중괄호는 HTML 속성에 사용할 수 없습니다. 대신 v-bind 디렉티브를 사용하세요.</p>
        <p v-bind:title="tooltiptext">마우스를 올려봐</p>
        <p>Boolean 속성 은 속성 존재 자체가 참(true), 거짓(false)을 의미하는 속성입니다.</p>
        <p><input type="text" v-bind:placeholder="rawHtml" v-bind:disabled="disableControl"></p>

        <h3>단축 표현</h3>
        <p>v-bind는 매우 자주 사용하기 때문에 단축 문법이 있습니다.</p>
        <p>: 을 사용하여 속성을 바인딩할 수 있습니다. </p>

        <p :title="tooltiptext">마우스를 올려봐</p>
        <p>Boolean 속성 은 속성 존재 자체가 참(true), 거짓(false)을 의미하는 속성입니다.</p>
        <p><input type="text" :placeholder="rawHtml" :disabled="disableControl"></p>

        <hr>

        <h2>다중 속성 바인딩</h2>
        <p>여러 속성을 한번에 바인딩할 수 있습니다.</p>
        
        <!-- 얘는 : 못쓰고 v-bind써야 되네? -->
        <input v-bind="attrs" />    

        <hr>

        <h2>JavaScript 표현식 사용</h2>
        <p>Vue에서는 모든 데이터 바인딩 내에서 JavaScript 표현식이 가능합니다.</p>
        
        <p>{{ disableControl ? "비활성화" : "활성화" }}</p>
        <p>글자를 반대로: {{ message.split("").reverse().join("") }}</p>
        <p><input type="text" :placeholder="`백틱으로 적용한다-> ${disableControl}`" /></p>
        
        <div>{{ todays() }}</div>
        

    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const message = ref("ref로 선언한 메세지입니다.");
        const fnMessage = () => message.value = message.value + "!";

        const rawHtml = ref("<strong>rawHtml 내용</strong>");

        const tooltiptext = ref("툴팁텍스트입니다.");
        const disableControl = ref(true);

        const attrs = {
            id: "pwdid",
            type: "password",
            placeholder: "비밀번호 입력해"
        };

        const todays = () => "시간: " + new Date();
            
        return {
            message,
            fnMessage,

            rawHtml,

            tooltiptext,
            disableControl,

            attrs,

            todays
        }
    }
}

</script>

<style lang="scss" scoped>

</style>