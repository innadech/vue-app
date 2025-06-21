<script>
export default {
  props: ['fruit'],

  emits: ['removed-fruit', 'edited-fruit'],
}
</script>

<template>
  <li class="completed">
    <span v-on:click="$emit('edited-fruit', fruit + '!')" class="task-text">
      {{ fruit }}
    </span>
    <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton">
      Удалить
    </button>
  </li>
</template>
