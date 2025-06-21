<script>
import FruitItem from './FruitItem.vue'

export default {
  components: { FruitItem },

  props: ['fruits'],

  emits: ['fruits-updated'],

  methods: {
    editFruit(newFruit, oldFruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.map(f => (f === oldFruit ? newFruit : f))
      )
    },
    removeFruit(fruit) {
      this.$emit(
        'fruits-updated',
        this.fruits.filter(f => f !== fruit)
      )
    },
  },
}
</script>

<template>
  <ul>
    <FruitItem
      v-for="(fruit, idx) of fruits"
      v-bind:key="idx"
      v-bind:fruit="fruit"
      v-on:edited-fruit="editFruit($event, fruit)"
      v-on:removed-fruit="removeFruit"
    />
  </ul>
</template>

<!-- v-on:click="fruitContent.splice(fruitContent.indexOf(fruit), 1)" -->
<!-- v-on:click="fruits = fruits.filter((_, i) => i !== idx)" -->
<!-- v-on:click="fruits = fruits.filter(f => f !== fruit)" -->
