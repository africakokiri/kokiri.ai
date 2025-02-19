# Kokiri.ai



## TODO

- [ ] Supabase DB, Auth 
- [ ] Responsive -> Desktop
- [ ] 성능 개선



## MEMO

- [flushSync -> React>=18에서 사용 가능](https://ko.react.dev/reference/react-dom/flushSync)

  - `flushSync`는 React에 제공된 콜백 내부의 모든 업데이트를 동기적으로 처리하도록 강제합니다. DOM이 즉시 업데이트되는 것을 보장합니다.

  - `flushSync()`는 **비동기 API 응답을 즉시 UI에 반영해야 할 때** 유용

    하지만 남용하면 **React의 성능 최적화를 해칠 수 있으므로 주의**

    **일반적인 경우 `then()`을 사용하는 것이 더 안정적이며 React의 배치 업데이트를 활용할 수 있음** 🚀



## Flow

1. userInput
2. userInput -> API
3. API 응답이 완료되는 즉시 `then` 키워드로 zustand store에 반영
4. 반영되는 즉시 UI 렌더링 = ~~flushSync~~ -> 굳이? : **then** ?



## Zustand State

- 현재
  - 문제점
    - UserInput과 각 AI 모델의 응답을 하나의 Store에 정의함
    - `Promise.all` 키워드 때문에 모든 응답이 완료되어야 응답을 확인할 수 있음
  - 개선 방안
    - ~~`Promise.all` -> `Promise.allSettled` 키워드 사용~~
    - `Promise.all` -> `then` 키워드 사용
    - selectedAiModel도 같은 Store에서 관리?
  - 구현
    - Store 내부에서 각 AI 모델의 응답을 `then` 키워드로 즉시 반환할 수 있도록 해야 함
    - 응답이 반환되는 즉시 UI에 렌더링해야 함
    - 



## Supabase

모든 기능이 완료된 다음에 ㄱㄱ
