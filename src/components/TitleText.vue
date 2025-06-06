<script>
export default {
  props: ['innaText'],

  emits: ['my-event'],
}
</script>

<template>
  <h1 @click="$emit('my-event', 'my-name-is-Inna')">{{ innaText }}</h1>
</template>
