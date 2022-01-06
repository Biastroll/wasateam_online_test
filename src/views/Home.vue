<template>
  <div class="home">
    <img alt="logo" src="https://mir-s3-cdn-cf.behance.net/user/276/765bdc60173839.5a2a05a479560.jpg">
    <HelloWorld msg="山葵組設計 應徵線上測試"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
    }
  }
}
</script>