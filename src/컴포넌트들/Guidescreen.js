import React, { Fragment } from "react";
import {useNavigate } from "react-router-dom";


function Guidescreen() {

  return(
    <>
      <Navigation></Navigation>
      <h2 className="guide-title">우리학교 시설에 대해</h2>
      <Place></Place>
    </>
  );
}






function Place(){
  const nav = useNavigate();

  const C동 = () =>{
    nav('/guide/C동');
  }

  const N동 = () =>{
    nav('/guide/N동');
  }

  const S동 = () =>{
    nav('/guide/S동');
  }

  const A동 = () =>{
    nav('/guide/A동');
  }

  const 인재관 = () =>{
    nav('/guide/인재관');
  }


  return(
    <div className="background-2">
      <div className="Whole-Button">
        <div className="button-container">
          <button className="buildingbutton" id="btn1" onClick={C동}>C동</button><br/>
          <button className="buildingbutton" id="btn2" onClick={N동}>N동</button><br/>
          <button className="buildingbutton" id="btn3" onClick={S동}>S동</button><br/>
          <button className="buildingbutton" id="btn4" onClick={A동}>A동</button><br/>
          <button className="buildingbutton" id="btn5" onClick={인재관}>인재관</button><br/>
        </div>
      </div>
    </div>
  );
}








function Navigation(){          //네비게이션 바 치환툴
  const nav = useNavigate();

  const ToHome = () => {
    nav('/home');
  }

  const ToGuide = () => {
    nav('/guide');
  }

  const ToBoard = () => {
    nav('/board');
  }

  return(
    <>
      <header className="homeScreenHeader">
        <div id="mainNav">
          <div id="app-title">CNSA Campus TourGuide</div>
          <button id="button" onClick={ToHome}>
            홈으로 가기
          </button>
          <button id="button" onClick={ToGuide}>
            투어 가이드 둘러보기
          </button>
          <button id="button" onClick={ToBoard}>
            게시판에 질문하기
          </button>
          <button id="button">
            Yolo 모델 체험해보기
          </button>
        </div>
      </header>
    </>
  );
};

export default Guidescreen;