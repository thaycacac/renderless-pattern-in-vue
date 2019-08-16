<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
      <renderless
      v-model="todos"
      #default="{ addTodo, editTodo, removeTodo, inputAttrs, inputEvent }"
      class="mb-5"
    >
      <div class="tags-input">
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-bind="inputAttrs"
          v-on="inputEvent"
        />
      </div>
      <div class="col-12">
        <h4 class="my-4 text-left">Not yet</h4>
        <div v-for="(todo, index) in todos.filter((i) => {return !i.status})" class="todo done" :key="`tag1-${index}`">
          <h5 class="text-left">{{ todo.title }}</h5>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" @input="editTodo(index, true)">
            <label class="form-check-label" for="inlineCheckbox3">Mark as done</label>
          </div>
          <button type="button" class="icon-remove" @click="removeTodo(todo)">&times;</button>
        </div>
      </div>
      <div class="col-12">
        <h4 class="my-4 text-left">Done</h4>
        <div v-for="(todo, index) in todos.filter((i) => {return i.status})" class="todo undone" :key="`tag2-${index}`">
          <h5 class="text-left">{{ todo.title }}</h5>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" @input="editTodo(index, false)">
            <label class="form-check-label" for="inlineCheckbox3">Mark as undone</label>
          </div>
          <button type="button" class="icon-remove" @click="removeTodo(todo)">&times;</button>
        </div>
      </div>
    </renderless>
    </div>
    <div class="col-md-6">
      <h4>Grid wip</h4>
      <div class="grid-container">
        <img v-for="i in 10" :key="`ix${i}`" src="../../assets/lol.jpg" alt="img1">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Renderless from "@/components/Assignment/Doantu";
export default {
  components: {
    Renderless
  },
  data() {
    return {
      todos: []
    };
  },
};
</script>

<style scoped>
.todo {
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #cecece;
  width: 300px;
  margin: 4px 6px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.done {
  background: #fff;
}

.undone {
  background: #f0f0f0;
}

.icon-remove {
  padding: 4px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.grid-container {
  display: grid;
  grid-template-columns: 40% 30% 30%;
  grid-template-rows: auto auto auto;
  grid-column-gap: 4px;
  grid-row-gap: 8px;
}
</style>
