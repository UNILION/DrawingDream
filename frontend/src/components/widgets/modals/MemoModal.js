import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import MemoList from "../memo/MemoList";

const Wrapper = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-around; */
  /* letter-spacing: -1px; */
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: fit-content;
  margin: 2rem;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: black;
  display: flex;
  align-items: end;
  margin-bottom: 20px;
`;

const MemoModal = ({ layoutId }) => {
  const [showDetail, setShowDetail] = useState(false);

  const onClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={onClick} layoutId={layoutId}>
      <Header>
        <Title>메모</Title>
      </Header>

      {showDetail ? <div></div> : <MemoList />}
    </Wrapper>
  );
};

export default MemoModal;
