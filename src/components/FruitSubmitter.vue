<script>
export default {}
</script>

<template>
  <div>
    <input
      type="text"
      v-bind:value="fruit"
      v-on:input="fruit = $event.target.value"
      placeholder="Введите задачу"
    />
    <button v-on:click="fruits.push(fruit)">Добавить фрукт</button>
  </div>
</template>
