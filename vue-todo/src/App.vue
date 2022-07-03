<template>
  <div>
    <h1>Vue Todo with Typescript</h1>
    <main>
      <todo-input :item="todoText" @input="updateTodoText" @add="addTodoItem" />
      <div>
        <ul>
          <todo-list-item />
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoListItem from "./components/TodoListItem.vue";

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = {
  save(todoItems: any[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todoItems));
  },
  fetch(): object[] {
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems);
    return result;
  },
};

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data() {
    return {
      todoText: "",
      todoItems: [] as any[],
    };
  },
  methods: {
    updateTodoText(value: string) {
      this.todoText = value;
    },
    addTodoItem() {
      const value = this.todoText;
      this.todoItems.push(value);
      storage.save(this.todoItems);
      this.initTodoText();
    },
    initTodoText() {
      this.todoText = "";
    },
    fetchTodoItems() {
      this.todoItems = storage.fetch();
    },
  },
  created() {
    this.fetchTodoItems();
  },
});
</script>

<style scoped></style>
