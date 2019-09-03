<template>
  <div class="container mx-auto">
    <!-- Slot Content/ Compilation Scope/ Compilation Scope -->
    <h5 class="text-teal-500 underline mt-5">Slot Content/ Compilation Scope/ Fallback Content</h5>
    <box></box>
    <box>
      <h1 class="text-2xl">This is heading 1</h1>
      <p>This is paragraph</p>
    </box>
    <!-- Named Slots -->
    <h5 class="text-teal-500 underline mt-5">Named Slots</h5>
    <card>
      <p
        slot="content"
        class="text-gray-700 text-base"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
      <div
        slot="title"
        class="text-gray-900 font-bold text-xl mb-2 text-left"
      >Can coffee make you a better developer?</div>
    </card>
    <!-- Scoped Slots -->
    <h5 class="text-teal-500 underline mt-5">Scoped Slots</h5>
    <counter v-slot="slotProps">
      <p>parent: {{ slotProps.count + 1 }}</p>
    </counter>
    <to-do v-slot="{ todo }">
      <span v-if="todo.isComplete">✓</span>
      {{ todo.text }}
    </to-do>
  </div>
</template>

<script>
import { Box, Card, Counter, ToDo } from "@/components/Slots";
export default {
  components: {
    Box,
    Card,
    Counter,
    ToDo
  }
};
</script>
