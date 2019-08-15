<template>
  <div id="app">
    <renderless v-model="todos" #default="{ addTodo, removeTodo, completeTodo, inputAttrs, inputEvent }">
      <div class="container">
        <div class="todos-wrapper">
          <div class="d-flex justify-content-between">
            <input
              class="text-input d-block w-100 mr-2"
              placeholder="New tag"
              v-bind="inputAttrs"
              v-on="inputEvent"
            />
            <b-button type="button" variant="primary" @click="addTodo">Add</b-button>
          </div>
          <ul v-show="todos.length > 0" class="mt-4 pl-6 text-left">
            <b-list-group v-for="(todo, index) in todos" class="mb-2" :key="`todo-${index}`" @click="completeTodo(todo)">
              <b-list-group-item :disabled="todo.completed" class="d-flex justify-content-between">
                <span class="mr-2" :class="todo.completed ? 'completed' : ''">{{ todo.name }}</span>
                <b-button
                  variant="danger"
                  size="sm"
                  @click="removeTodo(todo)"
                >Remove</b-button>
              </b-list-group-item>
            </b-list-group>
          </ul>
        </div>
      </div>
    </renderless>
  </div>
</template>

<script>
import Renderless from './components/Renderless'

export default {
  name: 'app',
  components: {
    Renderless
  },
  data() {
    return {
      todos: [
        {
          name: "Study",
          completed: true
        },
        {
          name: "Do homework",
          completed: false
        }
      ]
    }
  }
}
</script>
<style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .todos-wrapper {
    width: 500px
  }
  .completed {
    text-decoration: line-through
  }
  .text-input {
    border-radius: 5px;
    padding: 0 15px;
    border: 1px solid rgba(0, 0, 0, 0.125)
  }
  .text-input:hover, :focus {
    outline: none
  }
</style>

