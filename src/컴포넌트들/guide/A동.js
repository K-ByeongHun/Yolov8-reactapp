import React, {useState} from "react";
import { Link} from "react-router-dom";
import ReactModal from "react-modal";
import 글로벌라운지정문 from "/Users/user/OneDrive/바탕 화면/helloreact/src/images/글로벌 라운지 정문.jpg"
import 글로벌라운지지도 from "/Users/user/OneDrive/바탕 화면/helloreact/src/images/글로벌 라운지 지도.jpg"
import 로고스랩 from "/Users/user/OneDrive/바탕 화면/helloreact/src/images/로고스랩.jpg"

ReactModal.setAppElement("#root");

function DecoModal({isOpen, onClose, title, content, imageSrc}){
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
  return(
    <>
      <ReactModal isOpen={isOpen} onRequestClose={onClose} style={style}>
        <div><h1>{title}</h1></div>
        {imageSrc && <img src={imageSrc} alt={title} 
        style={{ maxWidth: '100%', maxHeight: '400px',
        marginBottom: '10px' }} />}
        <div><p>{content}</p></div>
        <div><buttom onClick={onClose}>Close</buttom></div>
      </ReactModal>
    </>
  );
}




function A동(){
  const [isGlobalOpen, setGlobalOpen] = useState(false);
  const [isLogosOpen, setLogosOpen] = useState(false);

  // 글로벌라운지
  const openGlobal = () => {
    setGlobalOpen(true);
  };
  const closeGlobal = () => {
    setGlobalOpen(false);
  };
//로고스랩
  const openLogos = () => {
    setLogosOpen(true);
  };
  const closeLogos = () => {
    setLogosOpen(false);
  };

  return(
    <>
    <h1>A동에 오신 것을 환영합니다.</h1>
    <div className="containerC">
      <div className="button-matrixC">
        <div><button onClick={openGlobal} className="A동버튼 btn-6 custom-btn"><span>Global Lounge</span></button></div>
        <div><button onClick={openLogos} className="A동버튼 btn-6 custom-btn"><span>Logos Lab</span></button></div>
      </div>
    </div>
    <Link to='/guide'>
      <button className="GoBackButton">뒤로가기</button>
    </Link>

      <DecoModal
        isOpen={isGlobalOpen}
        onClose={closeGlobal}
        title="Global Lounge"
        content="글로벌 라운지에 대한 설명"
        imageSrc={글로벌라운지정문}
      />

      <DecoModal
        isOpen={isLogosOpen}
        onClose={closeLogos}
        title="Logos Lab"
        content="로고스랩에 대한 설명"
        imageSrc={로고스랩}
      />

    </>
  );
}

export default A동;