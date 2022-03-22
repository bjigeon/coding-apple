import React, { StrictMode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let css = { color: "yellow", fontSize: "30px" };
  let posts = "강남 고기 맛집";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal,modal변경] = useState(false);  
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값,입력값변경] = useState('');

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {/* <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span onClick={() => { 따봉변경(따봉 + 1); }}>👍</span>{따봉}
        </h3>

        <p>2월 17일 발행</p>
        <button onClick={제목바꾸기}>버튼</button>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => {modal변경(modal = true)}}>{글제목[2]}</h3>
        <h3 onClick={() => {modal변경(true)}}>{글제목[2]}</h3>
        <p>2월 19일</p>
        <hr />
      </div> */}
      {/* {modal == true ? <Modal /> : null} */}


      {/* 내꺼 */}
      {/* <button onClick={() => {modal변경(modal + 1)}}>버튼</button>
      {
        modal % 2 == true 
        ? <Modal /> 
        : null
      } */}

      

      {/* 글제목의 갯수 만큼 */}
      {/* 글 : 글제목안에 있는 하나하나의 데이터 값 */}
      {/* i : 카운트 수 */}
      {
        글제목.map(function(글,i){
          return ( 
            <div className="list" key={i}>
            <h3 onClick={() => {누른제목변경(i)}}> {글} 
              <span onClick={() => { 따봉변경(따봉 + 1); }}>👍</span>
              {따봉}
            </h3>
            <p>2월 18일</p>
            <hr />
          </div>
          )
        })
      }

      {/* <button onClick={() => {누른제목변경(0)}}>버튼1</button>
      <button onClick={() => {누른제목변경(1)}}>버튼2</button>
      <button onClick={() => {누른제목변경(2)}}>버튼3</button> */}

      {/* <input onChange={ (e) => { 입력값변경(e.target.value) }}></input> */}

      {/* 애플코딩 */}
      <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
      { 
        modal == true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      }

    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.누른제목]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
