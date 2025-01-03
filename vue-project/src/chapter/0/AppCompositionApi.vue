<template>
    <div>
        COMPOSITION API
        <br />
        <button v-on:click="increments">Counter: {{ counter }}</button>
    </div>
</template>

<script>
import {ref, onMounted} from "vue";
export default {
    setup () {
            const counter = ref(0);
            const increments = () => counter.value++;

            onMounted(() => console.log("### 마운트가 완료되었습니다."));
        

        return {
            counter,
            increments
        }
    }
}
</script>

<style lang="scss" scoped>

</style>