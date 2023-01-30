import React from "react";
import style from "./Test.module.css";
import styled from "styled-components";

// 自定义一个标签，首字母大写
// styled.div 创建div标签


const SectionDiv = styled.div.attrs({
  className: "box1",
})`
  width: 100px;
  height: 100px;
  background-color: hotpink;
`;

function Test() {
  return (
    <div>
      <div className={"box"}>全局样式 Test中的div</div>
      <div className={style.item}>Test中的div1</div>
      <SectionDiv />
    </div>
  );
}
export default Test;
