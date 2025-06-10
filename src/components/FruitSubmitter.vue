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
      :value="fruit"
      @input="fruit = $event.target.value"
      placeholder="Введите задачу"
    />
    <button v-on:click="$emit('my-event', fruit)">Добавить фрукт</button>
  </div>
</template>
