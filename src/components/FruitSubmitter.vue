<script>
export default {
  props: ['fruitContent'],

  emits: ['my-event'],
}
</script>

<template>
  <div>
    <input
      type="text"
      v-bind:value="fruit"
      @input="$emit('my-event', $event.target.value)"
      placeholder="Введите задачу"
    />
    <button v-on:click="fruitContent.push(fruit)">Добавить фрукт</button>
  </div>
</template>
