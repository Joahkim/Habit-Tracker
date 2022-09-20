# Habit Tracker
Class Component와 Functional Component의 사용법 차이를 공부하기 위해 생성한 프로젝트 입니다.
Todo list와 비슷하며 Create, Delete 를 활용하여 state의 상태를 업데이트 시킬 수 있습니다.

<br/>

### 증가, 감소 버튼과 댓글 삭제 기능

```js

  const handleIncrement = (habit) => {
    const newHabits = [...habits];
    const dataIndex = newHabits.indexOf(habit);
    newHabits[dataIndex].count++;
    setHabits(newHabits);
  };

  const handleDecrement = (habit) => {
    const newHabits = [...habits];
    const dataIndex = newHabits.indexOf(habit);
    newHabits[dataIndex].count--;
    setHabits(newHabits);
  };

  const handleDelete = (habit) => {
    const newHabits = habits.filter((item) => item.id !== habit.id);
    setHabits(newHabits);
  };
```

> count 값 수정하기

- Object 참조값을 수정해야 하기 때문에 얕은 복사를 진행한다.

리액트에서도 값의 불변성을 지켜야한다. 객체 타입의 데이터를 직접 수정하면 원본을 수정하는 것이기 때문에 최대한 얕은 복사를 통해서 (중첩 객체라면 깊은 복사) 데이터 값을 수정해야 한다. 우리는 count 값을 수정해야 하기 때문에 `habit`이라는 데이터를 최상위 컴포넌트에서 props로 받아온다.

- `newHabits` 라는 새로운 변수에 원본 데이터 `habit`을 얕은 복사하여 할당한다.

- 클릭된 요소 객체가 `onClick` 함수의 인자로 전달된다. 객체를 전달받은 함수는 실행될 때 그 객체의 정보를 가지고 명령을 실행한다.

- `dataIndex` 라는 변수에는 클릭된 객체가 가지는 인덱스 번호를 할당한다.

- `newHabits` 의 데이터에서 인덱스 번호를 대괄호에 입력하면 클릭된 요소를 복사된 데이터에서 접근할 수 있다.

- 결론적으로 실제로 클릭된 요소를 복사된 데이터에서 똑같은 요소에 접근하여 원본을 수정하지 않은채로 count 값을 수정할 수 있다.

<br/>

>filter로 습관 삭제하기

삭제 버튼에 `onClick`함수를 적용한다.

- `filter` 함수의 명령어에는 클릭된 요소가 인자로 들어오면 클릭된 요소의 `id`값에 접근할 수 있다.

- `filter` 메소드의 인자로 클릭된 요소의  `id` 값과 다른 `id`값을 가진 요소들만 필터링하여 새로운 변수 `newHabits`에 할당한다.

- 삭제된 요소만 모아서 `setState` 함수로 `state`값을 업데이트 한다.

<br/>

> 습관 추가하기 (feat. id: DateNow())

```js
import React, {useRef} from 'react';

const inputRef = useRef;

  const submitHabit = (event) => {
    event.preventDefault();
    //form 태그는 자동으로 서버에 form 양식을 전송하면서 새로고침된다. 그것을 방지!
    const name = inputRef.current.value;
    //input에 적힌 값을 가져와 name 변수에 할당한다.
    name && handleAdd(name);
    //name이 빈값이 아니라면 handleAdd를 실행한다. handleAdd의 인자값으로 input 값이 적힌 name이 들어간다.
    formRef.current.reset(); 
    //inputRef.current.value = "" 위의 코드 대신 사용할 수 있다.
    //input창을 비워 아무 값이 남지 않도록한다.
  };

  const handleAdd = (name) => {
    const added = [{ id: Date.now(), name, count: 0 }, ...habits];
    //props로 받아온 데이터 habits의 복사본을 만들고 추가되는 습관이 그 위에 적힐 수 있도록 설정한다.
    setHabits(added);
    //state를 활용하여 업데이트 한다.
  };
```

- `Date.now()`를 `id`값으로 부여하면 습관을 작성하는 시간이라는 고유한 `id`값을 가질 수 있다.

왜?

만약 `id`값이 겹치게 되면 고유한 번호를 찾아서 그 값의 count 값이나 삭제를 할 수 있는데 최대한 고유한 `id` 값을 부여해야 한다.

`useRef` 훅을 사용하여 input 창에 쓰여진 값을 가져올 수 있다. 즉, 다른 요소의 DOM 객체에 직접 접근하지 않고 `ref`객체를 가져오는 것이다.

추가는 여전히 데이터 원본을 수정하지 않게하기 위해서 얕은 복사를 한다.
복사하는 형태는 객체이며 
`{ id: Date.now(), name: name, count: 0 }` 

이전에 추가된 `habits` 앞에 추가되게 쉼표 앞에 작성한다.

함수의 인자로 `name`은 `input`창에 적힌 내용인다.
