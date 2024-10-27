import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const nav = useNavigate();
  const [isVisible, setInVisible] = useState(false);

  useEffect(()=>{
    const timer = setTimeout(() => {
      setInVisible(true);
    }, 100);  //약간의 지연을 줘서 부드럽게 시작되게 설정함.
    return () => clearTimeout(timer);
  }, []);

  const goHome = () =>{
    alert('주의 : 이 웹은 투어만을 위한 가이드 입니다. 아이리스 학생의 말에 잘 따라주시면 감사하겠습니다.');    //경고 문구를 넣어둘 것. ex)아이리스의 말을 잘 따라 주시면 감사하겠습니다.
    nav('/home');
  }
  
  return(
    <Fragment>
      <div className="background-1">
        <div className="초기화면텍스트">
          <h1 className={`fade-in ${isVisible ? 'show' : ''}`}>
            충남삼성고 캠퍼스 투어 가이드
          </h1>
          <p className={`fade-in ${isVisible ? 'show' : ''} 초기화면p`}>
            안녕하십니까? 
            <br/>저는 IT디플로마를 이수하고 있는 230401강병훈입니다.
            <br/>본 웹페이지는 캠퍼스 투어를 진행할 때, 보면서 정보를 제공하는 페이지입니다.
            <br/> 아이리스의 설명을 잘 들으면서 진행해주시면 감사하겠습니다.
          </p>
        </div>
        <div className={`fade-in ${isVisible ? 'show' : ''}`}>
        <button className="custom-btn btn-6" onClick={goHome}>
        <span>입장하기</span>
        </button>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeScreen;