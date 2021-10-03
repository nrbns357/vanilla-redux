import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
      return {
        type: ADD_TODO,
        text
      };
    };
    
    const deleteToDo = id => {
      return {
        type: DELETE_TODO,
        id
      };
    };

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);



const dispatchAddToDo = text => {
      store.dispatch(addToDo(text));
    };
    
    const dispatchDeleteToDo = e => {
      const id = parseInt(e.target.parentNode.id);
      store.dispatch(deleteToDo(id));
    };
    
    const paintToDos = () => {
      const toDos = store.getState();
      ul.innerHTML = "";
      toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
      });
    };
    
    store.subscribe(paintToDos);


const onSubmit = e => {
      e.preventDefault();
      const toDo = input.value;
      input.value = "";
      dispatchAddToDo(toDo);
    };
    
    form.addEventListener("submit", onSubmit);


// const add = document.getElementById('add'),
//       minus = document.getElementById('minus'),
//       number = document.querySelector('span');

//       number.innerText= 0;

//       const Add = 'Add';
//       const Minus = "Minus";

// const countModifier = (count = 0, action) => { //modify : 수정하다.
//       switch(action.type){
//             case Add: 
//                   return count +1;
//             case Minus:
//                   return count -1;
//             default:
//               return count;
//       }
// };

// const countStore = createStore(countModifier);
      

// const onchange = () => {
//       number.innerText = countStore.getState();
// }

// countStore.subscribe(onchange);


// const handleAdd = ()=>{
//       countStore.dispatch({type : Add});
// }

// const handleMinus = () =>{
//       countStore.dispatch({type : Minus})
// }


// add.addEventListener('click',handleAdd);
// minus.addEventListener('click',handleMinus);

// //countStore.dispatch({ type : "ADD"}); // countModifier 인자 중 action인자 값을 보내주는 함수 (dispatch)의 역할임
// //console.log(countStore.getState()); //countModifier의 리턴 값을 콘솔로 보여주는 함수