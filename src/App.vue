<script>
export default {
  data() {
    return {
      fruits: [],
      currentFruit: '',
      editedFruit: 1,
    }
  },
}
</script>

<template>
  <div id="app" class="container">
    <h1>Список фрукты</h1>
    <div>
      <input
        type="text"
        v-on:input="currentFruit = $event.target.value"
        id="taskInput"
        placeholder="Введите задачу"
      />
      <button v-on:click="fruits.push(currentFruit)" id="addTaskButton">
        Добавить фрукт
      </button>
      <p>{{ fruits.length }}</p>
    </div>
    <ul id="taskList">
      <li v-for="(fruit, idx) of fruits" :key="idx" class="completed">
        <input
          type="checkbox"
          class="checkbox"
          checked
          v-model="fruit.completed"
        />
        <span v-on:click="fruits[idx] = 'новый текст'" class="task-text">
          {{ fruit }}</span
        >
        <button
          v-on:click="fruits = fruits.filter((_, i) => i !== idx)"
          class="deleteButton"
        >
          Удалить
        </button>
      </li>
    </ul>
  </div>
</template>
