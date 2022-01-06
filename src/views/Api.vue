<template>
    <button @click="imortApi,btn=!btn" >Get Api</button>
    <div v-if="btn">
        <ul v-for="jsonApi in imortApi" :key="jsonApi.name">
            <li>Name : {{ jsonApi.name }}</li>
            <li>City : {{ jsonApi.city }}</li>
        </ul>
    </div>
</template>

<script>
import jsonApi from "@/assets/fake data.json";

export default {
  name: 'Api',
  data(){
      return {
          apiItem: [],
          btn: false
      }
  },
  computed: {
    imortApi() {
      return jsonApi.map((item) => {
        return item;
      });
    },
  },
}
</script> 

<style scoped>
    button {
        width: 20%;
        height: 1.8rem;
        border: 0;
        border-radius: 10px;
        padding: 2px;
        background-color: #6E9032;
        color: #eee;
        cursor: pointer;
    }
    ul {
        margin: auto;
        margin-top: 5px;
        padding-inline: 30vw;
        text-align: start;
    }
    li {
        list-style: none;
        width: 70%;
        margin-inline: auto;
    }
</style>