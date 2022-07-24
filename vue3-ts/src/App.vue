<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  // setup은 mixins와 hoc의 문제점을 개선하기 위해 나옴
  // 굳이 사용하지않아도 기존처럼 쓸 수 있음.
  setup() {
    const str1 = ref("");
    str1.value = "hi";
    return { str1 };
  },
  data() {
    return {
      str2: "",
    };
  },
  methods: {
    changeString() {
      this.str2 = "hi";
    },
  },
});
</script>

<style scoped></style>
