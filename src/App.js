import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

let[글제목,b] = useState(['남자 셔츠 추천', '여름 신상 추천', '콩국수 추천맛집']);
let [좋아요,좋아요변경] = useState(0);
let [싫어요,싫어요변경] = useState(0);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>Hoya-Blog</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}<span onClick={ ()=>{좋아요변경(좋아요+1)} }>💛</span>{좋아요}<span onClick={()=>{싫어요변경(싫어요+1)}}>💢</span>{싫어요}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>6월 25일 발행</p>
      </div>
    </div>
  );
}
export default App;
