<template>
  <div>
    author:
    <a href="https://github.com/phongpv" class="text-green-900 font-bold">PhongPV</a>
    <div class="container-todo">
      <renderless-todo
        v-model="list_one"
        #default="{ addItem, removeItem, inputAttrs, inputEvent, doneItem, editItem, inputEditAttrs, inputEditEvent, editItemClick }"
        class="todo-form mx-2"
      >
        <div class="p-5 rounded border bg-white form-wrap">
          <input
            placeholder="Add item..."
            class="text-input flex-1"
            v-bind="inputAttrs"
            v-on="inputEvent"
          />
          <div class="text-left">
            <div v-for="(item, index) in list_one" :key="`item-${index}`" class="mt-2 todo-item-1">
              <div class="item-answer">
                <div class="item-text-wrapper">
                  <span v-if="item.done" class="w-10 mr-1 pl-4 check">&radic;</span>
                  <span v-else class="w-10 mr-1 pl-4 check">&nbsp;</span>
                  <div
                    @click="doneItem(index)"
                    :class="item.done ?'done-item': 'title-text'"
                  >{{ item.title }}</div>
                </div>
                <div class="item-text-wrapper" v-if="item.show && !item.done">
                  <input
                    placeholder="Edit item..."
                    class="text-input flex-1 ml-2"
                    v-bind="inputEditAttrs"
                    v-on="inputEditEvent"
                  />
                  <div v-if="item.show" @click="editItem(index)" class="mx-2 remove-normal">Edit</div>
                </div>
              </div>
              <div
                v-if="!item.show && !item.done"
                @click="editItemClick(index, item)"
                class="ml-2 remove-normal"
              >Edit</div>
              <div @click="removeItem(item)" class="ml-2 remove-normal">&times;</div>
            </div>
          </div>
        </div>
      </renderless-todo>
      <renderless-todo
        v-model="list_two"
        #default="{ addItem, removeItem, inputAttrs, inputEvent, doneItem, editItem, inputEditAttrs, inputEditEvent, editItemClick }"
        class="todo-form mx-2"
      >
        <div class="p-4 rounded border bg-white form-wrap">
          <div class="flex">
            <input
              class="text-input flex-1 mr-2"
              placeholder="New item"
              v-bind="inputAttrs"
              v-on="inputEvent"
            />
            <button type="button" class="btn btn-primary" @click="addItem">Add</button>
          </div>
          <ul v-show="list_two.length > 0" class="mt-4 text-left">
            <li v-for="(item, index) in list_two" class="mb-2 todo-item-1" :key="`item-${index}`">
              <div class="item-answer">
                <div class="item-text-wrapper">
                  <span v-if="item.done" class="w-10 mr-1 pl-4 check">&radic;</span>
                  <span v-else class="w-10 mr-1 pl-4 check">&nbsp;</span>
                  <div
                    @click="doneItem(index)"
                    :class="item.done ?'done-item': 'title-text'"
                  >{{ item.title }}</div>
                </div>
                <div class="item-text-wrapper" v-if="item.show && !item.done">
                  <input
                    placeholder="Edit item..."
                    class="text-input flex-1 ml-2"
                    v-bind="inputEditAttrs"
                    v-on="inputEditEvent"
                  />
                  <button
                    type="button"
                    v-if="item.show"
                    @click="editItem(index)"
                    class="mx-2 btn btn-primary remove-button"
                  >Edit</button>
                </div>
              </div>
              <button
                type="button"
                v-if="!item.show && !item.done"
                @click="editItemClick(index, item)"
                class="ml-2 btn btn-primary remove-button"
              >Edit</button>
              <button
                class="text-grey-dark text-sm ml-2 btn btn-primary remove-button"
                @click="removeItem(item)"
              >&times;</button>
            </li>
          </ul>
        </div>
      </renderless-todo>
    </div>
  </div>
</template>

<script>
import RenderlessTodo from "@/components/Assignment/PhongPV";
export default {
  components: {
    RenderlessTodo
  },
  data() {
    return {
      list_one: [
        { title: "Ngủ", done: false, show: false },
        { title: "Ăn", done: true, show: false }
      ],
      list_two: [
        { title: "Uống", done: true, show: false },
        { title: "Tắm", done: false, show: false }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container-todo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .todo-form {
    width: 100%;
    display: flex;
    justify-content: center;
    .form-wrap {
      width: 100%;
    }
  }
  .todo-item-1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item-answer {
      width: 100%;
      .item-text-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 0;
        background-color: #e2e8f0;
        display: flex;
        flex-direction: row;
        .check {
          border-right: 1px;
          border-right-color: #ddd;
          border-right-style: solid;
        }
      }
    }
  }
  .done-item {
    text-decoration: line-through;
    cursor: pointer;
    text-align: left;
    width: 100%;
  }
  .title-text {
    cursor: pointer;
    text-align: left;
    width: 100%;
  }
  .remove-normal {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: blue;
    }
  }
  .remove-button {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
