<template>
  <div class="container">
    author:
    <a href="https://github.com/aupous" class="text-green-900 font-bold">TuanPV</a>
    <b-row>
      <b-col>
        <todo-list
          v-model="todos1"
          #default="{ addTodo, removeTodo, completeTodo, inputAttrs, inputEvent, all, done, doing }"
        >
          <div class="d-flex justify-content-between px-5">
            <span>All: {{ all }}</span>
            <span>Doing: {{ doing }}</span>
            <span>Done: {{ done }}</span>
          </div>
          <div class="todos-wrapper">
            <div class="d-flex justify-content-between">
              <input
                class="text-input d-block w-100 mr-2"
                placeholder="New tag"
                v-bind="inputAttrs"
                v-on="inputEvent"
              />
              <b-button type="button" variant="primary" @click="addTodo">+</b-button>
            </div>
            <div v-show="todos1.length > 0" class="mt-4">
              <b-list-group
                v-for="(todo, index) in todos1"
                class="mb-2"
                :key="`todo-${index}`"
                @click="completeTodo(todo)"
              >
                <b-list-group-item
                  :disabled="todo.completed"
                  class="d-flex justify-content-between"
                >
                  <span class="mr-2" :class="todo.completed ? 'completed' : ''">{{ todo.name }}</span>
                  <b-button variant="danger" size="sm" @click="removeTodo(todo)">x</b-button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </todo-list>
      </b-col>
      <b-col>
        <todo-list
          v-model="todos2"
          #default="{ addTodo, removeTodo, completeTodo, inputAttrs, inputEvent, all, done, doing }"
        >
          <b-list-group horizontal>
            <b-list-group-item>All: {{all}}</b-list-group-item>
            <b-list-group-item>Doing: {{doing}}</b-list-group-item>
            <b-list-group-item>Done: {{done}}</b-list-group-item>
          </b-list-group>
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
            <div v-show="todos2.length > 0" class="mt-4">
              <b-list-group
                v-for="(todo, index) in todos2"
                class="mb-2"
                :key="`todo-${index}`"
                @click="completeTodo(todo)"
              >
                <b-list-group-item
                  :disabled="todo.completed"
                  class="d-flex justify-content-between"
                >
                  <span :class="todo.completed ? 'completed' : ''">{{ todo.name }}</span>
                  <b-button variant="danger" size="sm" @click="removeTodo(todo)">Remove</b-button>
                </b-list-group-item>
              </b-list-group>
            </div>
          </div>
        </todo-list>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import TodoList from "@/components/Assignment/TuanPV";

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todos1: [
        {
          name: "Study",
          completed: true
        },
        {
          name: "Do homework",
          completed: false
        }
      ],
      todos2: [
        {
          name: "Study",
          completed: true
        },
        {
          name: "Do homework",
          completed: false
        }
      ]
    };
  }
};
</script>

