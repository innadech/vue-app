<script>
export default {
  data() {
    return {
      fruits: [],
      fruit: '',
    }
  },
}
</script>

<template>
  <div class="container">
    <h1>Список фрукты</h1>
    <div>
      <input
        type="text"
        v-bind:value="fruit"
        v-on:input="fruit = $event.target.value"
        placeholder="Введите задачу"
      />
      <button v-on:click="fruits.push(fruit)">Добавить фрукт</button>
      <p>{{ fruits.length }}</p>
    </div>
    <ul>
      <li v-for="(fruit, idx) of fruits" :key="idx" class="completed">
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
  </div>
</template>
