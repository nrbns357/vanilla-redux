# Vanilla Redux

Learning Vanilla-Redux and React-Redux

****새로 배운 내용****<br/><br/>


**#dispatch() 함수**  
인자에 값을 전달하는 함수<br/><br/>

**#예시**<br/>
```
const countModifier = (count = 0, action) => { //modify : 수정하다.
      if(action.type === "add"){
            return count +1;
      }else if(action.type === "minus"){
            return count -1;
      }else
      return count;
};

countStore.dispatch({ type : "add"}); //countModifier 함수에 인자중 action 인자로 { type : "add"}이런 객체나 값을 보내는 역할을 한다.
```


**#subscribe() 함수**  
무엇이든 변화할때 실행되는 함수<br/><br/>

**#예시**<br/>
```
const onchange = () => {
      number.innerText = countStore.getState();
}

countStore.subscribe(onchange); //state의 값이 바뀔 때 마다 onChange함수를 실행한다.
```


**#createStore() 함수**  
redux를 쓰기위해 쓰는 함수

**#예시**<br/>
```
import {createStore} from "redux"; //redux 불러오기

const countStore = createStore(countModifier); //redux를 쓰기위해 변수 선언 하고 어떤 함수를 사용 할 것인지 쓰기
```


**#getState() 함수**  
지정한 변수의 값을 보여주는 함수

**#예시**<br/>
```console.log(countStore.getState()); //countModifier의 리턴 값을 콘솔로 보여주는 함수```
