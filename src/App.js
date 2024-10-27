import { Fragment } from 'react';
import './App.css'; import'./컴포넌트들/component.css';
import { BrowserRouter as Router, Route, Routes}
from 'react-router-dom';
import 초기화면 from './컴포넌트들/초기화면.js'; //초기화면 불러오는 임포트
import MainScreen from './컴포넌트들/mainscreen.js';  // 메인화면 불러오는 임포트
import HomeScreen from './컴포넌트들/homescreen.js';  // 홈화면 불러오는 임포트
import Guidescreen from './컴포넌트들/Guidescreen.js';  // 가이드화면 불러오는 임포트
import boardscreen from './컴포넌트들/boardscreen.js';  //
import Yolo from './컴포넌트들/Yolo.js';  

import C동 from './컴포넌트들/guide/C동.js'
import N동 from './컴포넌트들/guide/N동.js'
import S동 from './컴포넌트들/guide/S동.js'
import A동 from './컴포넌트들/guide/A동.js'
import 인재관 from './컴포넌트들/guide/인재관.js'


function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' Component={초기화면}></Route>
          <Route path='/home' Component={HomeScreen}></Route>
          <Route path='/main' Component={MainScreen}></Route>
          <Route path='/guide' Component={Guidescreen}></Route>
          <Route path='/board' Component={boardscreen}></Route>
          <Route path='/Yolo' Component={Yolo}></Route>
          <Route path='/guide/C동' Component={C동}/>
          <Route path='/guide/N동' Component={N동}/>
          <Route path='/guide/S동' Component={S동}/>
          <Route path='/guide/A동' Component={A동}/>
          <Route path='/guide/인재관' Component={인재관}/>
        </Routes>
      </Router>
    </Fragment>
  );
};



export default App;
