<template>
  <div class="tags-input">
    <span v-for="(tag, index) in value" class="tags-input-tag" :key="`tag-${index}`">
      <span>{{ tag }}</span>
      <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
    </span>
    <input
      class="tags-input-text"
      placeholder="Add tag..."
      @keydown.enter.prevent="addTag"
      v-model="newTag"
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

<style lang="scss">
html CSS Babel Result EDIT ON .tags-input {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.tags-input-tag {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.tags-input-tag:last-of-type {
  margin-right: 0;
}

.tags-input-remove {
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
}

.tags-input-remove:first-child {
  margin-right: 0.25rem;
}

.tags-input-remove:last-child {
  margin-left: 0.25rem;
}

.tags-input-remove:focus {
  outline: 0;
}

.tags-input-text {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
