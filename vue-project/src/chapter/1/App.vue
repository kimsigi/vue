<template>
    <div>
      <button v-on:click="increments">Counter: {{ counter }}</button>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return  {
          counter: 0
        }
      }
      ,
      methods: {
        increments() {
          this.counter++
        }
      },
      mounted() {
        console.log("#### 마운트 완료");
      }
        
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>