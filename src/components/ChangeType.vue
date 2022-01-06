<template>
  <div class="type-in">
    <div v-if="typeState=='text'">
      <input-by-text />
    </div>
    <div v-else-if="typeState=='radio'">
      <input-by-radio />
    </div>
    <div v-else-if="typeState=='select'">
      <input-by-select />
    </div>
  </div>
</template>

<script>
import InputByText from './InputByText.vue'
import InputByRadio from './InputByRadio.vue'
import InputBySelect from './InputBySelect.vue'

export default {
  name: 'ChangeType',
  data() {
    return {
      }
  },
  components: {
    InputByText,
    InputByRadio,
    InputBySelect,
  },
  props: {
    typeState: String
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style scoped>
.type-in {
  padding: 10px;
}
</style>