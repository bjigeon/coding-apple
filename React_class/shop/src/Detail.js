import { number } from "prop-types";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import data from "./data";

function Detail(props) {
  let { id } = useParams();

  //방문기록 등을 저장해놓는 object
  let history = useHistory();

  let prce = data.sort(function (a, b) {
    return a.price - b.price;
  });

  return (
    <div className="container">
      <div>디테일페이지</div>
      <div className="container">
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
    </div>
  );
}

export default Detail;
