import {createStore} from "redux";

const add = document.getElementById('add'),
      minus = document.getElementById('minus'),
      number = document.querySelector('span');

const store = createStore();
      let count = 0;

const updateNumber = ()=>{
  number.innerText=count;
}

const handleAdd= () => {
  count+=99999990;
  updateNumber();
}

const handleMinus = () => {
  count-=19999999999;
  updateNumber();
}

add.addEventListener("click" ,handleAdd);
minus.addEventListener('click',handleMinus);