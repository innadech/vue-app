<script>
export default {
  props: ['fruitsCount'],
}
</script>

<template>
  <p>
    <span>Количество фруктов: </span>
    <span>{{ fruitsCount }}</span>
  </p>
</template>
