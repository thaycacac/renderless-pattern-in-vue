<template>
  <div>
    <slot
      :addTodo="addTodo"
      :all="all"
      :done="done"
      :doing="doing"
      :removeTodo="removeTodo"
      :completeTodo="completedTodo"
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
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    all() {
      return this.value.length;
    },
    done() {
      return this.value.filter(todo => todo.completed).length;
    },
    doing() {
      return this.value.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    addTodo() {
      if (
        this.newTodo.trim().length === 0 ||
        this.value.includes(this.newTodo.trim())
      ) {
        return;
      }
      this.$emit("input", [
        ...this.value,
        {
          name: this.newTodo.trim(),
          completed: false
        }
      ]);
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.$emit("input", this.value.filter(t => t.name !== todo.name));
    },
    completedTodo(todo) {
      this.$emit(
        "input",
        this.value.map(t =>
          t.name === todo.name
            ? {
                name: t.name,
                completed: !t.completed
              }
            : t
        )
      );
    }
  }
};
</script>
