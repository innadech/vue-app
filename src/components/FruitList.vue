<script>
export default {
  props: ['fruitContent'],
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
        v-on:click="fruitContent.splice(fruitContent.indexOf(fruit), 1)"
        class="deleteButton"
      >
        Удалить
      </button>
    </li>
  </ul>
</template>
