import React from "react";
import { useNavigate } from "react-router-dom";

function boardscreen () {
  return(
    <>
    <Navigation></Navigation>
    <h1>안녕하세요 여기는 아마 게시판으로 사용될 것 같습니다.</h1>
    </>
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

export default boardscreen;