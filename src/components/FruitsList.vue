<script>
export default {
  props: ['fruits'],
  emits: ['my-event'],
}
</script>

<template>
  <ul>
    <li v-for="(fruit, idx) in fruits" v-bind:key="idx" class="completed">
      <span
        v-on:click="fruits[idx] = fruits[idx] + '!'"
        class="task-text"
      >
        {{ fruit }}
      </span>
      <button
        v-on:click="$emit('my-event', fruit)""

        class="deleteButton"
      >
        Удалить
      </button>
    </li>
  </ul>
</template>

<!-- v-on:click="fruitContent.splice(fruitContent.indexOf(fruit), 1)" -->
  <!-- v-on:click="fruits = fruits.filter((_, i) => i !== idx)" -->
  <!-- v-on:click="fruits = fruits.filter(f => f !== fruit)" -->
