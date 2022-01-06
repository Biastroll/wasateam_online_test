<template>
    <select name="selection" v-model="textOption">
        <option value="">choose the option</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
    </select>
    <p>Input content : {{ textOption }}</p>   
</template>

<script>
export default {
  name: 'InputBySelect',
  data(){
      return {
          textOption: ''
      }
  },
  props: {
    // inputType: String,
    // typeState: String
  },
  methods: {
  }
}
</script>

<style scoped>
  p {
    margin: 5px;
  }
</style>