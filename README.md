# Study Typescript With Vue ![Generic badge](https://img.shields.io/badge/nodejs-v12.18.2-blue.svg) ![Generic badge](https://img.shields.io/badge/npm-v6.14.5-blue.svg)   
**공부 기간 :** 2022.06.30 ~

## 참고 자료

- [인프런 강의](https://www.inflearn.com/course/vue-ts)
- [인프런 강의 깃헙](https://github.com/joshua1988/learn-vue-typescript)
- [타입스크립트 공식 홈페이지](https://www.typescriptlang.org/)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/)

## 뷰 프로젝트에 타입스크립트를 점진적으로 적용하는 방법
1. Vue + Typescript 프로젝트 생성
2. 기존 서비스 코드와 라이브러리를 새 프로젝트에 이동
3. 기본적인 빌드 에러 해결
4. 타입스크립트의 혜택을 볼 수 있는 주요 파일들 위주로 `.js` -> `.ts`로 변환하며 적용 (ex: vuex, api 등)
> 팁 : 타입 체킹 정도는 덜 엄격한 방식에서 점점 엄격한 방식으로 적용하는 것을 추천

## 메모

- 프로젝트 생성 이후, `jsconfig`, `tsconfig`, `eslintrc`, `prettierrc`, `.vscode/settings.json` 등 설정파일 세팅
- .vue TS 컴포넌트 생성 스니펫 : `ts` (`Vetur`에서 지원 : `vsbase-ts`)
- `input`에 `v-model` 사용 시, 한글 지원 문제로 인해 한글자의 입력이 끝나야 연동이 되는 문제가 있음. custom v-model 구현하면 해결됨.
- `vuex` 타입 적용 시, `vue 2`는 어쩔 수 없이 node_modules에 손을 대야함. 메모하여 꼭 참고하기.
- `vue 2`에서는 `vuex module`의 `타입 정의`는 어려움.
  - 단순하게 쓴다면 `RootState` 하나로 사용을 추천.
  - `Module` 꼭 필요하다면 인텔리센스를 사용할 순 없음.