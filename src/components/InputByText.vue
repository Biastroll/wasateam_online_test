<template>
    <input v-model="textContent" placeholder="Type something ..."> 
    <p>Input content : {{ textContent }}</p>   
</template>

<script>
export default {
  name: 'InputByText',
  data() {
    return {
        textContent: ''
      }
  },
}
</script>

<style scoped>
  p {
    margin: 5px;
  }
</style>