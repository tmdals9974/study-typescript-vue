# vue-todo

## 목표

- todo 앱의 CRUD (추가,조회,수정,삭제) 구현

## 메모

- 프로젝트 생성 이후, `jsconfig`, `tsconfig`, `eslintrc`, `prettierrc`, `.vscode/settings.json` 등 설정파일 세팅
- .vue TS 컴포넌트 생성 스니펫 : `ts` (`Vetur`에서 지원 : `vsbase-ts`)
- `input`에 `v-model` 사용 시, 한글 지원 문제로 인해 한글자의 입력이 끝나야 연동이 되는 문제가 있음. custom v-model 구현하면 해결됨.
