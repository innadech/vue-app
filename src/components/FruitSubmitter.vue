<script>
export default {
  emits: ['my-event'],

  data() {
    return {
      fruit: '',
    }
  },
}
</script>

<template>
  <div>
    <input
      type="text"
      v-bind:value="fruit"
      v-on:input="fruit = $event.target.value"
      placeholder="Введите задачу"
    />
    <button v-on:click="$emit('my-event', fruit), (fruit = '')">
      Добавить фрукт
    </button>
  </div>
</template>
