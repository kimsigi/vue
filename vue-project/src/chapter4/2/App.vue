<template>
    <div>
        <p>카운트: {{ count }}</p>

        <button v-on:click="count++">카운트 직접</button>
        <button v-on:click="increment">카운트 함수</button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
export default {
    props: {
        title: String
    },

    setup (props, context) {   
        const count = ref(0);
        const increment = () => count.value++;

        console.log(props.title);

        console.log("### context: ", context);
        console.log("### context.attrs: ", context.attrs);
        console.log("### context.slots: ", context.slots);
        console.log("### context.emit: ", context.emit);
        console.log("### context.expose: ", context.expose);

        return {
            count,
            increment,
            onMounted
        }
    },

    // 셋업 바깥에 있다.    
    mounted() {
        console.log(this.count);
    }

    
}
</script>

<style lang="scss" scoped>

</style>