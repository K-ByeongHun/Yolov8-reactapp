import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {

  const nav = useNavigate();

  const goGuide = () =>{
    nav('/guide');
  }

  const goYolo = () =>{
    nav('/Yolo');
  }

  const goBoard = () =>{
    nav('/board');
  }

  return(
    <Fragment>
      <div className="background-1">
        <button id="guidebutton" onClick={goGuide} className="custom-btn btn-6"><span>투어가이드 둘러보기</span></button>
        <br/>
        <button id="boardbutton" onClick={goBoard} className="custom-btn btn-6"><span>게시판에 질문하기</span></button>
        <br/>
        <button id="yolobutton" onClick={goYolo} className="custom-btn btn-6"><span>Yolo학습모델 체험해보기</span></button>
      </div>
    </Fragment>
  );
}


export default HomeScreen;