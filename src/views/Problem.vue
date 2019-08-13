<template>
  <div class="flex mb-4">
    <div class="w-1/2">
      <div class="bg-grey-lighter px-8 py-8 min-h-screen">
        <div class="max-w-sm w-full mx-auto">
          <tags-input-one v-model="tags1"></tags-input-one>
        </div>
      </div>
    </div>
    <div class="w-1/2">
      <div id="app" class="font-sans text-black bg-grey-lighter px-8 py-8 min-h-screen">
        <div class="max-w-sm w-full mx-auto">
          <tags-input-two v-model="tags2"></tags-input-two>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TagsInputOne from "@/components/TagsInput/TemplateOne";
import TagsInputTwo from "@/components/TagsInput/TemplateTwo";

export default {
  components: {
    TagsInputOne,
    TagsInputTwo
  },
  data() {
    return {
      tags1: ["Testing", "Design"],
      tags2: ["Coder", "Developer"]
    };
  }
};
</script>
