<template>
  <div>
    <label for="todo-input">오늘 할 일 : </label>
    <input type="text" id="todo-input" @keyup.enter="addTodo" :value="item" @input="handleInput" />
    <button @click="addTodo" type="button">추가</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { VueEvent } from "@/types/index";
export default Vue.extend({
  props: {
    item: String,
  },
  methods: {
    addTodo() {
      this.$emit("add");
    },
    handleInput(event: VueEvent.Input<HTMLInputElement>) {
      this.$emit("input", event.target.value);
    },
  },
});
</script>

<style scoped></style>
