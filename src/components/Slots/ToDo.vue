<template>
  <div class="border border-gray-400 mt-2 p-2 rounded">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <slot :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          id: 1,
          text: "Listen to music",
          isComplete: false
        },
        {
          id: 2,
          text: "Play game",
          isComplete: true
        },
        {
          id: 2,
          text: "Learn englist",
          isComplete: false
        }
      ]
    };
  }
};
</script>
