# Vanilla Redux

Learning Vanilla-Redux and React-Redux

****새로 배운 내용****<br/><br/><br/>


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
```