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
      if (this.fruit !== '') {
        this.$emit('fruit-submitted', this.fruit)
        this.fruit = ''
      }
      this.$refs.elInput.focus()
    },
  },
}
</script>

<template>
  <div>
    <input
      ref="elInput"
      type="text"
      v-bind:value="fruit"
      v-on:input="fruit = $event.target.value"
      placeholder="Введите фрукт"
    />
    <button v-on:click="handleClickButton">Добавить фрукт</button>
  </div>
</template>
