<template>
    <h2>Choose the type of input.</h2>
    <div class="type-select">
      <router-link to="/inputtype/text">Text</router-link> ||
      <router-link to="/inputtype/radio">Radio</router-link> ||
      <router-link to="/inputtype/select">Select</router-link>
    </div>
    <router-view/>

  <ChangeType />
</template>

<script>
import ChangeType from '@/components/ChangeType.vue'

export default {
  name: 'InputType',
  data() {
    return {
      typeState: '',
      }
  },
  components: {
    ChangeType,
  }
}
</script>

<style scope>
.type-select {
  padding: 20px;
}
.type-select a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
.type-select a.router-link-exact-active {
  color: #42b983;
}
</style>