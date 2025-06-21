<script>
export default {
  props: ['fruits'],

  emits: ['removed-fruit', 'edited-fruit'],
}
</script>

<template>
  <ul>
    <li v-for="(fruit, idx) of fruits" v-bind:key="idx" class="completed">
      <span
        v-on:click="$emit('edited-fruit', { x: fruit, y: fruit + '!' })"
        class="task-text"
      >
        {{ fruit }}
      </span>
      <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton">
        Удалить
      </button>
    </li>
  </ul>
</template>

<!-- v-on:click="fruitContent.splice(fruitContent.indexOf(fruit), 1)" -->
<!-- v-on:click="fruits = fruits.filter((_, i) => i !== idx)" -->
<!-- v-on:click="fruits = fruits.filter(f => f !== fruit)" -->
