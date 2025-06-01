<script>
export default {
  props: ['fruitContent'],
}
</script>

<template>
  <ul>
    <li v-for="(fruit, idx) in fruitContent" v-bind:key="idx" class="completed">
      <span v-on:click="fruits[idx] = fruits[idx] + '!'" class="task-text">
        {{ fruit }}
      </span>
      <button
        v-on:click="fruits = fruits.filter(f => f !== fruit)"
        class="deleteButton"
      >
        Удалить
      </button>
    </li>
  </ul>
</template>
