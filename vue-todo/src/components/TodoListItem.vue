<template>
  <li>
    <span :class="[{ complete: todoItem.done }, 'item']" @click="toggleDoneItem"> {{ todoItem.title }} </span>
    <button @click="removeItem">삭제</button>
  </li>
</template>

<script lang="ts">
import { Todo } from "@/App.vue";
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    todoItem: Object as PropType<Todo>,
    index: Number,
  },
  methods: {
    removeItem() {
      this.$emit("remove", this.index);
    },
    toggleDoneItem() {
      this.$emit("toggleDone", this.todoItem, this.index);
    },
  },
});
</script>

<style scoped>
.item {
  cursor: pointer;
}

.complete {
  text-decoration: line-through;
}
</style>
