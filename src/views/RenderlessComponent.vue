<template>
  <div class="container">
    <renderless
      v-model="tags1"
      #default="{ addTag, removeTag, inputAttrs, inputEvent }"
      class="mb-5"
    >
      <div class="tags-input">
        <span v-for="(tag, index) in tags1" class="tags-input-tag" :key="`tag-${index}`">
          <span>{{ tag }}</span>
          <button type="button" class="tags-input-remove" @click="removeTag(tag)">&times;</button>
        </span>
        <input
          class="tags-input-text"
          placeholder="Add tag..."
          v-bind="inputAttrs"
          v-on="inputEvent"
        />
      </div>
    </renderless>
    <renderless v-model="tags2" #default="{ addTag, removeTag, inputAttrs, inputEvent }">
      <div class="p-4 rounded border bg-white">
        <div class="flex">
          <input
            class="text-input flex-1 mr-2"
            placeholder="New tag"
            v-bind="inputAttrs"
            v-on="inputEvent"
          />
          <button type="button" class="btn btn-primary" @click="addTag">Add</button>
        </div>
        <ul v-show="tags2.length > 0" class="mt-4 pl-6 text-left">
          <li v-for="(tag, index) in tags2" class="mb-2" :key="`tag-${index}`">
            <span class="mr-2">{{ tag }}</span>
            <button
              class="text-grey-dark hover:text-grey-darkest underline text-sm"
              @click="removeTag(tag)"
            >Remove</button>
          </li>
        </ul>
      </div>
    </renderless>
  </div>
</template>

<script>
import Renderless from "@/components/Renderless";
export default {
  components: {
    Renderless
  },
  data() {
    return {
      tags1: ["Testing", "Design"],
      tags2: ["Coder", "Developer"]
    };
  }
};
</script>
