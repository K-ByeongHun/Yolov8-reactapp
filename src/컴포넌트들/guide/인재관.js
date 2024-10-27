import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";


function 인재관(){
  return(
    <>
      <div>
        <h1>충남삼성고의 자랑스러운 기숙사, 인재관</h1>
        <div>
        <h1>인재관에 대해</h1>
        <p>충남삼성고의 인재관은 인재를 키우는 곳이라고 하여 인재관입니다. 
          <br/>
          M동, L동 123층은 남학생층, 456층은 여학생 층으로 분류되어 운영되고 있습니다. 
        </p>
        </div>
        <div>
        <h1>호실</h1>
        <p>호실 안의 정보</p>
        </div>
        <div>
        <h1>택배실</h1>
        <p>택배실에 대한 정보</p>
        </div>
        <div>
        <h1>규칙</h1>
        <p>인재관의 규칙에 대하여</p>
        </div>
        <Link to='/guide'>
        <button className="GoBackButton">뒤로가기</button>
        </Link>
      </div>
    </>
  );
}

export default 인재관;