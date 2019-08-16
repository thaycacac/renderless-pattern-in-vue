<template>
  <div>
    <slot
      :addTodo="addTodo"
      :removeTodo="removeTodo"
      :editTodo="editTodo"
      :inputAttrs="{ value: this.newTodo }"
      :inputEvent="{
        input: (e) => { this.newTodo = e.target.value },
        keydown: (e) => {
          if(e.keyCode === 13) {
            e.preventDefault()
            this.addTodo()
          }
        }
        }"
      :inputEditAttrs="{ value: this.textEdit }"
      :inputEditEvent="{
        input: (e) => { this.editText = e.target.value },
      }"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      newTodo: "",
      textEdit: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.$emit("input", [ ...this.value, { title: this.newTodo.trim(), status: false } ]);
      this.newTodo = "";
    },
    editTodo(index, status) {
      let editTodo = this.value;
      editTodo[index].status = status;
      this.$emit("input", [...editTodo]);
    },
    removeTodo(item) {
      this.$emit("input", this.value.filter(t => t !== item));
    }
  }
};
</script>
