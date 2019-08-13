<template>
  <div class="container mx-auto">
    <!-- Slot Content/ Compilation Scope/ Compilation Scope -->
    <h1 class="text-teal-500 underline mt-5">Slot Content/ Compilation Scope/ Fallback Content</h1>
    <box>This is paragraph</box>
    <box>
      <h1 class="text-2xl">This is heading 1</h1>
      <p>This is paragraph</p>
    </box>
    <!-- Named Slots -->
    <h1 class="text-teal-500 underline mt-5">Named Slots</h1>
    <card>
      <div
        slot="title"
        class="text-gray-900 font-bold text-xl mb-2 text-left"
      >Can coffee make you a better developer?</div>
      <p
        slot="content"
        class="text-gray-700 text-base"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </card>
    <!-- Scoped Slots -->
    <h1 class="text-teal-500 underline mt-5">Scoped Slots</h1>
    <counter v-slot:default="slotProps">
      <p>parent: {{ slotProps.count + 1 }}</p>
    </counter>
    <counter>
      <template slot-scope="{ count }">
        <p>parent: {{ count + 2 }}</p>
      </template>
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
