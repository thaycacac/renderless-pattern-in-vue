<template>
  <div>
    <slot
      :addItem="addItem"
      :removeItem="removeItem"
      :doneItem="doneItem"
      :editItemClick="editItemClick"
      :editItem="editItem"
      :inputAttrs="{ value: this.newItem }"
      :inputEvent="{
        input: (e) => { this.newItem = e.target.value },
        keydown: (e) => {
          if(e.keyCode === 13) {
            e.preventDefault()
            this.addItem()
          }
        }
        }"
      :inputEditAttrs="{ value: this.editText }"
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
      newItem: "",
      editText: ""
    };
  },
  methods: {
    addItem() {
      let check = false;
      this.value.forEach(element => {
        if (element.title === this.newItem) {
          check = true;
        }
      });
      if (this.newItem.trim().length === 0 || check) {
        return;
      }
      this.$emit("input", [
        ...this.value,
        { title: this.newItem.trim(), done: false }
      ]);
      this.newItem = "";
    },
    doneItem(index) {
      let arr = this.value;
      arr[index].done = !this.value[index].done;
      this.$emit("input", [...arr]);
    },
    editItemClick(index, item) {
      this.editText = item.title;
      let arr = this.value;
      arr[index].show = true;
      this.$emit("input", [...arr]);
    },
    editItem(index) {
      let arr = this.value;
      arr[index].show = false;
      arr[index].title = this.editText;
      this.$emit("input", [...arr]);
    },
    removeItem(item) {
      this.$emit("input", this.value.filter(t => t !== item));
    }
  }
};
</script>
