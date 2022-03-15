import React, { StrictMode, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
  let posts = "강남 고기 맛집";
  let [따봉, 따봉변경] = useState(0);
  let css = { color: "yellow", fontSize: "30px" };

  let [modal,modal변경] = useState(false);

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

      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
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
        {/* <h3 onClick={() => {modal변경(modal = true)}}>{글제목[2]}</h3> */}
        <h3 onClick={() => {modal변경(true)}}>{글제목[2]}</h3>
        <p>2월 19일</p>
        <hr />
      </div>
      {/* {modal == true ? <Modal /> : null} */}


      {/* 내꺼 */}
      {/* <button onClick={() => {modal변경(modal + 1)}}>버튼</button>
      {
        modal % 2 == true 
        ? <Modal /> 
        : null
      } */}


      {/* 애플코딩 */}
      {/* <button onClick={ ()=>{ modal변경(!modal) } }> 열고닫는버튼 </button>
      { 
        modal == true 
        ? <Modal />
        : null
      } */}
      
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
