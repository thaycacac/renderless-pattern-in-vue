<template>
  <div class="container">
    author:
    <a href="https://github.com/thongdo2101" class="text-green-900 font-bold">
      Thong Do
    </a>
    <div class="row mt-5">
      <TodoList
        v-model="list_one"
        class="col-md-6"
        #default="{ addTask, removeTask, editTask, showEditInput, markDoneOrNot }"
      >
        <div class="row mb-3">
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              placeholder="Enter New Task"
              @keyup.enter="addTask($event.target.value)"
            />
          </div>
        </div>
        <ul class="mt-3">
          <li v-for="(item, index) in list_one" :key="index" class="row mb-1">
            <div
              v-if="item.show === false"
              :class="[
                'alert',
                'col-md-9',
                item.done ? 'alert-success' : 'alert-secondary'
              ]"
              @click="markDoneOrNot(index)"
            >
              {{ item.title }}
            </div>
            <div v-if="item.show === true" class="col-md-9">
              <input
                type="text"
                class="form-control"
                :value="item.title"
                @keyup.enter="editTask(index, $event.target.value)"
              />
            </div>
            <div class="col-md-3">
              <p>
                <span class="mr-2 action" @click="showEditInput(index)">
                  Edit
                </span>
                <span @click="removeTask(index)" class="action">Delete</span>
              </p>
            </div>
          </li>
        </ul>
      </TodoList>
      <TodoList
        v-model="list_one"
        class="col-md-6"
        #default="{ addTask, removeTask, editTask, showEditInput, markDoneOrNot }"
      >
        <div class="row mb-3">
          <div class="col-md-9">
            <input
              type="text"
              class="form-control"
              placeholder="Enter New Task"
              @keyup.enter="addTask($event.target.value)"
            />
          </div>
        </div>
        <ul class="mt-3">
          <li v-for="(item, index) in list_one" :key="index" class="row mb-1">
            <div
              v-if="item.show === false"
              :class="[
                'alert',
                'col-md-9',
                item.done ? 'alert-info' : 'alert-light'
              ]"
              @click="markDoneOrNot(index)"
            >
              {{ item.title }}
            </div>
            <div v-if="item.show === true" class="col-md-9">
              <input
                type="text"
                class="form-control"
                :value="item.title"
                @keyup.enter="editTask(index, $event.target.value)"
              />
            </div>
            <div class="col-md-3">
              <p>
                <span class="mr-2 action" @click="showEditInput(index)">
                  Edit
                </span>
                <span @click="removeTask(index)" class="action">Delete</span>
              </p>
            </div>
          </li>
        </ul>
      </TodoList>
    </div>
  </div>
</template>
<script>
import TodoList from "@/components/Assignment/ThongDo";

export default {
  components: {
    TodoList
  },
  data() {
    return {
      list_one: [
        { title: "Ngủ", done: false, show: false },
        { title: "Ăn", done: true, show: false }
      ]
    };
  }
};
</script>
<style scoped>
.action {
  cursor: pointer;
  text-decoration: underline;
  color: blue;
}
li {
  height: 50px;
}
p {
  line-height: 50px;
}
</style>
