<template>
  <div class="p-4 rounded border bg-white">
    <div class="flex">
      <input
        class="text-input flex-1 mr-2"
        placeholder="New tag"
        @keydown.enter.prevent="addTag"
        v-model="newTag"
      />
      <button type="button" class="btn btn-primary" @click="addTag">Add</button>
    </div>

    <ul v-show="value.length > 0" class="mt-4 pl-6 text-left">
      <li v-for="(tag, index) in value" class="mb-2" :key="`tag-${index}`">
        <span class="mr-2">{{ tag }}</span>
        <button
          class="text-grey-dark hover:text-grey-darkest underline text-sm"
          @click="removeTag(tag)"
        >Remove</button>
      </li>
    </ul>
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
.tags-input {
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

.text-input {
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  width: 100%;
}

.text-input:focus {
  outline: 0;
}

.btn {
  font-weight: 600;
  border-radius: 0.25rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.btn-primary {
  color: #fff;
  background-color: #6574cd;
}

.btn-primary:hover {
  background-color: #7886d7;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
