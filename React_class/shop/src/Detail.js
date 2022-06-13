import { number } from "prop-types";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import data from "./data";
import styled from "styled-components";
import "./Detail.scss";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

function Detail(props) {
  let { id } = useParams();
  let [alert, setalert] = useState(true);

  //방문기록 등을 저장해놓는 object
  let history = useHistory();

  let prce = data.sort(function (a, b) {
    return a.price - b.price;
  });

  useEffect(() => {
    let a = setTimeout(() => {
      setalert(false);
    }, 2000);

    return () => {
      console.log(1);
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="container">
      {/* <박스>
        <제목 색상={"red"}>Detail</제목>
        <제목 색상="red" className="red">
          Detail
        </제목>
      </박스> */}
      {/* <div className="my-alert2">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div> */}

      <div className="container">
        {alert == true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null}
      </div>

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          {/* <h4 className="pt-5">{props.shoes[id].title}</h4> */}
          <h4 className="pt-5">{prce[id].title}</h4>

          {/* <p>상품설명</p> */}
          <p>{props.shoes[id].content}</p>
          {/* <p>120000원</p> */}
          <p>{props.shoes[id].price}원</p>

          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
              // history.push('/a')
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
