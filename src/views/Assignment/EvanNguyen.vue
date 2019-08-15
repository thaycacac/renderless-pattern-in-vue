<template>
  <div class="container">
    author:
    <a href="https://github.com/dacsang97" class="text-green-900 font-bold">EvanNguyen</a>
    <div class="row">
      <div class="col-md-6">
        <Todo
          v-model="todo"
          #default="{ addTask, removeTask, editTask, updateTask, toggleTask, inputAttrs, inputEvent, current, count, done, doing }"
        >
          <div class="layout-1">
            <div class="btn-group btn-group-sm mb-2" role="group">
              <button type="button" class="btn btn-outline-secondary">
                All
                <span class="badge badge-secondary mr-3">{{ count }}</span>
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Done
                <span class="badge badge-secondary mr-3">{{ done }}</span>
              </button>
              <button type="button" class="btn btn-outline-secondary">
                Doing
                <span class="badge badge-secondary">{{ doing }}</span>
              </button>
            </div>
            <div class="input-group mb-3">
              <input class="form-control" v-bind="inputAttrs" v-on="inputEvent" />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addTask">+ Todo</button>
              </div>
            </div>
            <div>
              <div v-for="(item, id) in todo" :key="id" class="item d-flex align-items-center mb-1">
                <input
                  v-if="current === id"
                  class="form-control mr-1"
                  :value="item.content"
                  @input="e => updateTask(id, e.target.value)"
                />
                <div
                  v-else
                  :class="['content flex-grow-1 mr-1', { 'done': item.status }]"
                  @click="toggleTask(id)"
                >{{ item.content }}</div>
                <button
                  class="btn btn-light mr-1"
                  type="button"
                  @click="editTask(id)"
                  v-if="current === -1"
                >Edit</button>
                <button class="btn btn-light mr-1" type="button" @click="editTask(-1)" v-else>Save</button>
                <button class="btn btn-light" type="button" @click="removeTask(id)">Remove</button>
              </div>
            </div>
          </div>
        </Todo>
      </div>
      <div class="col-md-6">
        <Todo
          v-model="todo"
          #default="{ addTask, removeTask, editTask, updateTask, toggleTask, inputAttrs, inputEvent, current, count, done, doing }"
        >
          <div class="layout-1">
            <div class="mb-3">
              All:
              <span class="badge badge-secondary mr-3">{{ count }}</span>
              Done:
              <span class="badge badge-secondary mr-3">{{ done }}</span> Doing:
              <span class="badge badge-secondary">{{ doing }}</span>
            </div>
            <div class="mb-3 d-flex">
              <input class="form-control mr-1" v-bind="inputAttrs" v-on="inputEvent" />
              <button class="btn btn-outline-secondary" type="button" @click="addTask">+</button>
            </div>
            <div>
              <div v-for="(item, id) in todo" :key="id" class="item d-flex align-items-center mb-1">
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    class="form-check-input mt-0"
                    :checked="item.status"
                    @input="toggleTask(id)"
                  />
                </div>
                <input
                  v-if="current === id"
                  class="form-control mr-1"
                  :value="item.content"
                  @input="e => updateTask(id, e.target.value)"
                  @keydown.enter="editTask(-1)"
                />
                <div
                  v-else
                  class="content flex-grow-1 mr-1"
                  @click="editTask(id)"
                >{{ item.content }}</div>
                <button class="btn btn-light" type="button" @click="removeTask(id)">Remove</button>
              </div>
            </div>
          </div>
        </Todo>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Assignment/EvanNguyen";

export default {
  data: () => ({
    todo: []
  }),
  components: {
    Todo
  }
};
</script>

<style lang="scss" scoped>
.layout-1 {
  .item {
    .content {
      cursor: pointer;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: background 0.25s ease-in-out;
      &:hover {
        background: #eae9e9;
      }
    }
    .done {
      text-decoration: line-through;
      background: #f6f6f6;
    }
  }
}
</style>
