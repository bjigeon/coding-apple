import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [a,b] = useState(['남자 코트 추천', '강남 우동 맛집']);

  let posts = '강남 고기 맛집'
  let css = { color : 'yellow',fontSize : '30px' }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{a[1]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App; 