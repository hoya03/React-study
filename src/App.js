import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

let[글제목,글제목변경] = useState(['남자 셔츠 추천', '여름 신상 추천', '콩국수 추천맛집']);
let [좋아요,좋아요변경] = useState([0, 0, 0]);
let [싫어요,싫어요변경] = useState([0, 0, 0]);
let [modal, setModal] = useState(0);



  return (
    <div className="App">
      <div className="black-nav">
        <h4>Hoya-Blog</h4>
      </div>

      <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    } }> 정렬버튼 </button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '여자코드 추천';
        글제목변경(copy)
      }}>글수정</button>

      {/* <div className="list">
        <h4>{글제목[0]}<span onClick={ ()=>{좋아요변경(좋아요+1)} }>💛</span>{좋아요}<span onClick={()=>{싫어요변경(싫어요+1)}}>💢</span>{싫어요}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 25일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{글제목[2]}</h4>
        <p>6월 25일 발행</p>
      </div> */}

      {
        글제목.map(function(a,i){
          return (
            <div className="list" key={i} >
            <h4 onClick={()=>{setModal(!modal)}}>{a}
            <span onClick={ ()=>{
              let copy = [...좋아요];
              copy[i] = copy[i] + 1;
              좋아요변경(copy)
            } }>💛</span>{좋아요[i]}<span onClick={()=>{
              let copy = [...싫어요];
              copy[i] = copy[i] + 1;
              싫어요변경(copy)}}>💢</span>{싫어요[i]}
            </h4>
            <p>6월 25일 발행</p>
          </div>
          )
        })
      }

      {
        modal == 1 ? <Modal color ={'red'} 글제목 = {글제목}/> : null
      }



    </div>
  );
}

function Modal(props){
  return(
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
  </div>
  )
}

export default App;
