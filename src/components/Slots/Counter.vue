<template>
  <div class="border border-gray-400 mt-2 p-2 rounded">
    <p>children: {{ count }}</p>
    <slot :count="count"></slot>
    <div class="inline-flex">
      <button
        @click="increase"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >+</button>
      <button
        @click="decrease"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >-</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count += 1;
    },
    decrease() {
      this.count -= 1;
    }
  }
};
</script>
