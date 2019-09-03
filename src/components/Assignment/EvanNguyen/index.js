export default {
  data: () => ({
    content: "",
    current: -1
  }),
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    count() {
      return this.value.length;
    },
    doing() {
      return this.value.reduce((v, item) => v + 1 - item.status, 0);
    },
    done() {
      return this.count - this.doing;
    }
  },
  methods: {
    addTask() {
      const content = this.content.trim();
      if (!content) return;
      this.$emit("input", this.value.concat({ content, status: 0 }));
      this.content = "";
    },
    removeTask(index) {
      const newValue = this.value.concat([]);
      newValue.splice(index, 1);
      this.$emit("input", newValue);
    },
    editTask(index) {
      this.current = index;
    },
    updateTask(index, content) {
      this.value[index].content = content;
    },
    toggleTask(index) {
      this.value[index].status = 1 - this.value[index].status;
    }
  },
  render() {
    const {
      addTask,
      removeTask,
      editTask,
      updateTask,
      toggleTask,
      current,
      count,
      done,
      doing
    } = this;
    return this.$scopedSlots.default({
      addTask,
      removeTask,
      editTask,
      updateTask,
      toggleTask,
      current,
      count,
      done,
      doing,
      inputAttrs: {
        value: this.content
      },
      inputEvent: {
        input: e => {
          this.content = e.target.value;
        },
        keydown: e => {
          if (e.keyCode === 13) {
            e.preventDefault();
            this.addTask();
          }
        }
      }
    });
  }
};
