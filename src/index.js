import {createStore} from "redux";

const add = document.getElementById('add'),
      minus = document.getElementById('minus'),
      number = document.querySelector('span');

      number.innerText= 0;

const countModifier = (count = 0, action) => { //modify : 수정하다.
      if(action.type === "add"){
            return count +1;
      }else if(action.type === "minus"){
            return count -1;
      }else
      return count;
};

const countStore = createStore(countModifier);
      

const onchange = () => {
      number.innerText = countStore.getState();
}

countStore.subscribe(onchange);


const handleAdd = ()=>{
      countStore.dispatch({type : 'add'});
}

const handleMinus = () =>{
      countStore.dispatch({type : 'minus'})
}


add.addEventListener('click',handleAdd);
minus.addEventListener('click',handleMinus);

//countStore.dispatch({ type : "ADD"}); // countModifier 인자 중 action인자 값을 보내주는 함수 (dispatch)의 역할임
//console.log(countStore.getState()); //countModifier의 리턴 값을 콘솔로 보여주는 함수