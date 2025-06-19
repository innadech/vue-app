<script>
import FruitSubmitter from './components/FruitSubmitter.vue'
import TitleText from './components/TitleText.vue'
import FruitsList from './components/FruitsList.vue'
import FruitsCount from './components/FruitsCount.vue'

export default {
  components: { FruitSubmitter, TitleText, FruitsList, FruitsCount },

  data() {
    return {
      fruits: ['banana', 'cherry'],
    }
  },
}
</script>

<template>
  <div class="container">
    <TitleText caption="Список фруктов" v-on:click="fruits = []" />

    <FruitsCount v-bind:fruits-count="fruits.length" />

    <FruitsList
      v-bind:fruits="fruits"
      v-on:my-event="fruits = fruits.filter(f => f !== $event)"
    />

    <FruitSubmitter v-on:fruit-submitted="fruits.push($event)" />

    <!-- <div>
      <input
        type="text"
        v-bind:value="fruit"
        v-on:input="fruit = $event.target.value"
        placeholder="Введите задачу"
      />
      <button v-on:click="fruits.push(fruit)">Добавить фрукт</button>
    </div> -->
  </div>
</template>

<style>
.container {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
}
h1 {
  margin-bottom: 20px;
  color: #333;
}
#taskInput {
  width: calc(100% - 50px);
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}
#addTaskButton {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
#addTaskButton:hover {
  background-color: #0056b3;
}
#taskList {
  list-style-type: none;
  padding: 0;
}
#taskList li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}
.checkbox {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  width: 20px;
  height: 20px;
}
.task-text {
  display: inline-block;
  margin-left: 40px;
  width: calc(100% - 110px);
  vertical-align: middle;
}
.deleteButton {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
}
.deleteButton:hover {
  background-color: #c82333;
}
#taskList .completed {
  background-color: #d4edda;
  text-decoration: none;
  color: #155724;
}
</style>
