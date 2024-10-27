import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";
import image from "./배경화면.jpg"
import 면학실 from "C:/Users/user/OneDrive/바탕 화면/helloreact/src/images/면학실.jpg"

ReactModal.setAppElement("#root");

function DecoModal({ isOpen, onClose, title, content, imageSrc}) {
  const style = {
    content: {
      backgroundColor: '#000000', // Dark background color
      color: '#fff', // Light text color
      border: 'none',
      borderRadius: '8px',
      maxWidth: '700px',
      maxHeight: '800px',
      margin: 'auto',
      padding: '10px',
    }
  };
  return (
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={style}>
        <h1>{title}</h1>
        {imageSrc && <img src={imageSrc} alt={title} 
        style={{ maxWidth: '100%', maxHeight: '400px',
        marginBottom: '10px' }} />}
        <p>{content}</p>
        <button onClick={onClose}>Close</button>
      </ReactModal>
    </>
  );
}

function C동() {
  const [isGalaxyHallOpen, setGalaxyHallOpen] = useState(false);
  const [isStudyRoomOpen, setStudyRoomOpen] = useState(false);

  const openGalaxyHall = () => {
    setGalaxyHallOpen(true);
  };
  const closeGalaxyHall = () => {
    setGalaxyHallOpen(false);
  };
  const openStudyRoom = () => {
    setStudyRoomOpen(true);
  };
  const closeStudyRoom = () => {
    setStudyRoomOpen(false);
  };

  return (
    <>
      <h1>C동에 오신것을 환영합니다.</h1>
      <div className="containerC">
        <div className="button-matrixC">
          <button onClick={openGalaxyHall} className="C동버튼 btn-6 custon-btn"><span>갤럭시홀</span></button>
          <button onClick={openStudyRoom} className="C동버튼 btn-6 custon-btn"><span>면학실</span></button>
        </div>
      </div>
      <Link to='/guide'>
        <button className="GoBackButton">뒤로가기</button>
      </Link>
      
      <DecoModal
        isOpen={isGalaxyHallOpen}
        onClose={closeGalaxyHall}
        title="갤럭시홀"
        content="갤럭시홀은 학생들이 모두 모여서 강연을 듣거나 교육을 받는 곳입니다."
        imageSrc={image}
      />
      <DecoModal
        isOpen={isStudyRoomOpen}
        onClose={closeStudyRoom}
        title="면학실"
        content="면학실은 학생들이 조용히 공부할 수 있는 공간입니다."
        imageSrc={면학실}
      />
    </>
  );
}

export default C동;
