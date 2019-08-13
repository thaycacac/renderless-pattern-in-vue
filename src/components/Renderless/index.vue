<template>
  <div>
    <slot
      :inputAttrs="{ value: this.newTag }"
      :addTag="addTag"
      :removeTag="removeTag"
      :inputEvent="{
        input:(e) => this.newTag = e.target.value,
        keydown: (e)=> {
          if(e.keyCode === 13) {
            e.preventDefault()
            this.addTag()
          }
        }}"
    />
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      newTag: ""
    };
  },
  methods: {
    addTag() {
      if (
        this.newTag.trim().length === 0 ||
        this.value.includes(this.newTag.trim())
      ) {
        return;
      }
      this.$emit("input", [...this.value, this.newTag.trim()]);
      this.newTag = "";
    },
    removeTag(tag) {
      this.$emit("input", this.value.filter(t => t !== tag));
    }
  }
};
</script>
