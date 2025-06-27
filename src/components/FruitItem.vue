<script>
export default {
  props: ['fruit'],

  emits: ['removed-fruit', 'edited-fruit'],
}
</script>

<template>
  <li class="completed">
    <input
      v-bind:value="fruit"
      v-on:input="$emit('edited-fruit', $event.target.value)"
    />

    <button v-on:click="$emit('removed-fruit', fruit)" class="deleteButton">
      Удалить
    </button>
  </li>
</template>
