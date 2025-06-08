<script>
export default {
  props: ['fruitContent'],
  emits: ['my-event'],
}
</script>

<template>
  <ul>
    <li v-for="(fruit, idx) in fruitContent" v-bind:key="idx" class="completed">
      <span
        v-on:click="fruitContent[idx] = fruitContent[idx] + '!'"
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
