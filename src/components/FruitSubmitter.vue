<script>
export default {
  emits: ['fruit-submitted'],

  data() {
    return {
      fruit: '',
    }
  },

  methods: {
    handleClickButton() {
      this.$emit('fruit-submitted', this.fruit)
      this.fruit = ''
    },
  },
}
</script>

<template>
  <div>
    <input
      type="text"
      v-bind:value="fruit"
      v-on:input="fruit = $event.target.value"
      placeholder="Введите фрукт"
    />
    <button v-on:click="handleClickButton">Добавить фрукт</button>
  </div>
</template>
