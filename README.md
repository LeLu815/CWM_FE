# CWM_FE

## 프로젝트 설명

한국 관광지를 소개하는 웹은 많지만 외국인을 타겟으로 설정하여 한국 관광지를 소개하는 웹은 적습니다.
특히 외국인 이동약자가 한국관광지가 보유하고 있는 편의시설을 검색하기에 한계가 있습니다.
따라서 외국인 이동약자를 위한 편의시설 보유 관광지 소개 웹을 개발해보자는 목표로 시작하게 되었습니다.

2023 KIT 해커톤 제1회 SW 및 AI 융합 공모전 제출를 위해 팀프로젝트를 진행하였으나
프론트 팀원의 도망과 백엔드 서버가 제출 하루 전날 열렸으며 백엔드 url과 연결에서 에러가 발생하여 제출하지 못한 아쉬운 프로젝트였습니다.

그래도 포기하지 않고 완성하고자 합니다.
개인 프로젝트가 되어 서버는 파이어베이스를 이용하여 서버를 연결하였습니다.

## 이용한 기술

- react
- redux
- firebase
- react query
- next.js
- typescript
- tailwind CSS

## 해결해야할 문제들

### 1. 로그인 유지 기능, 전역으로 유저 정보 관리하기

- 사용자 정보 context 를 사용하여 전역으로 관리하기

### 2. 페이지와 컴포넌트를 분리하기

페이지는 url이 가르키는 공간이라고 생각한다.
리액트 강의를 듣다보면 페이지 역할을 하는 컴포넌트는 css 파일이 들어가 있지 않고 컴포넌트들의 조합으로 이루어져 있다.
나는 컴포넌트와 페이지의 역할이 구분없이 존재하게 만들어 디자인이나 역할이 변화할 때 수정하기 어렵게 코드를 작성했다.
위와 같은 문제를 해결하기 위해 화면의 구성요소들을 기능별로 최대한 묶고 컴포넌트로 분리하는 작업을 진행하였다.

위의 문제는 전역변수 사용과도 연관이 있다.
전역변수를 사용하지 못하고 props로만 내려주는 행동을 하게 되어 페이지 컴포넌트에도 props가 들낙날락하게 되고 컴포넌트로 자유롭게 분리가 되지 않아
엉기게 되는 문제가 발생하였다.

### 3. react router 를 사용하여 계층화하기

loader와 action을 사용

비동기 통신을 통하여 데이터를 불러오면 최초 렌더링 되고 난 후에 정보를 다 받으면 다시 렌더링이 되는 문제가 발생할 수 있다.
이런 문제를 해결하기 위해 리액트 라우터에서는 loader 기능을 지원하여 컴포넌트 렌더 전에 loader가 가르키는 함수를 먼저 실행하여
비동기 통신을 통한 데이터 얻기를 먼저 수행할 수 있게 도와준다.

### 4. redux 를 사용하여 전역변수 관리하기

언어 설정탭

한국어, 영어, 일본어, 중국어, 대만어, 태국어를 선택할 때마다 화면에 있는 모든 글자가 해당 언어로 변화하게 하기
언어설정탭은 각 언어 사용 유저들이 인지하기 쉽도록 각각 해당 언어로 변경하기

검색 키워드를 누를 때마다 아래 컨텐츠들이 변화해야 한다.
검색어를 불러올 때 검색어들을 전역적으로 관리하고 한번에 불러옴으로써 컴포넌트 랜더링을 최소화하고 관리하기 쉽게 만들수 있다.

### 5. 검색 최근내역 구현해보기

### 6. 무한 스크롤링 구현해보기

### 7. typescript 를 모든 코드에 적용해보기

## 궁금했던 내용들

### 1. localStorage는 비동기인가? 비동기는 무엇인가?

- localStorage는 비동기가 아닙니다.
  localStorage는 웹 브라우저의 웹 스토리지 기능 중 하나로, 동기적으로 작동하는 로컬 저장소입니다.
  비동기 함수는 일반적으로 AJAX 요청이나 파일 로딩과 같은 비동기 작업을 처리하는 데 사용됩니다.

- 웹 스토리지?

### 2. 리덕스 함수에서 localStorage를 변경하는 작업을 해도 좋은가?

- 안됩니다! redux 정신에 위배됩니다!
  redux 함수에서 localStorage를 변경하는 작업을 수행하게되면 해당 함수는 순수 함수라고 할 수 없습니다. 순수 함수는 입력값에 의해서만 결정되며, 외부 상태를 변경하지 않고 동일한 입력에 대해 항상 동일한 출력을 반환하는 함수를 말합니다.

  localStorage는 외부 상태를 변경하는 작업을 수행하는 저장소이므로, redux 함수에서 localStorage를 변경하는 작업을 포함한다면 해당 함수는 외부 상태를 변경하게 됩니다. 이는 순수 함수의 조건에 위배됩니다.

  Redux는 상태 관리 라이브러리로써, 순수 함수인 리듀서(reducer)를 통해 상태 변화를 관리합니다. 리듀서는 이전 상태와 액션을 기반으로 새로운 상태를 반환하는 함수로, 순수 함수의 특성을 갖습니다. 따라서 가능하다면 redux 함수에서 외부 상태 변경 작업을 수행하는 것은 권장되지 않습니다.

  만약 redux 함수에서 localStorage를 사용해야 한다면, 외부 상태 변경을 최소화하기 위해 순수 함수인 리듀서에서 해당 작업을 수행하고, redux 함수에서는 단순히 리듀서를 호출하는 역할을 수행하는 것이 좋습니다. 이렇게 함으로써 코드의 예측 가능성과 유지 보수성을 높일 수 있습니다.
