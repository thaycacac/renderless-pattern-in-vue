<template>
  <div>
    <slot
      :removeTask="removeTask"
      :editTask="editTask"
      :showEditInput="showEditInput"
      :addTask="addTask"
      :markDoneOrNot="markDoneOrNot"
    ></slot>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    removeTask(index) {
      const temp = this.value;
      temp.splice(index, 1);
      this.$emit("input", temp);
    },
    showEditInput(index) {
      this.value.forEach((ele, i) => {
        if (index !== i) {
          ele.show = false;
        }
      });
      this.value[index].show = !this.value[index].show;
    },
    editTask(index, editText) {
      this.value[index].title = editText;
      this.value[index].show = !this.value[index].show;
    },
    addTask(text) {
      const temp = {};
      temp.title = text;
      temp.show = false;
      temp.done = false;
      this.value.push(temp);
    },
    markDoneOrNot(index) {
      this.value[index].done = !this.value[index].done;
    }
  }
};
</script>
<style></style>
