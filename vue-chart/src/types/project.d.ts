import { Chart } from "chart.js";
import Vue from "vue";

// Chart 라이브러리의 type 정의가 평범하지 않은 방식이어서 일반적으로는 정상 작동하지 않음. 한번 wrapping이 필요함.
type ChartLib = typeof Chart;

declare module "vue/types/vue" {
  interface Vue {
    $_Chart: ChartLib;
  }
}
