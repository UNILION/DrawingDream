import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import MemoList from "../memo/MemoList";
import MemoInsert from "../memo/MemoInsert";

const Wrapper = styled(motion.div)`
  box-sizing: border-box;
  width: 600px;
  height: 600px;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: ${({ theme }) => theme.widgetColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  letter-spacing: -1px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: fit-content;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  margin-top: 2rem;
  display: flex;
  align-items: end;
  margin-bottom: 20px;
`;

const MemoModal = ({ layoutId }) => {
  const [status, setStatus] = useState("list");
  const [isListLoading, setIsListLoading] = useState(true);
  const [memoId, setMemoId] = useState("");

  const onClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Wrapper onClick={onClick} layoutId={layoutId}>
      <Header>
        <Title>메모</Title>
      </Header>
      {status === "list" && (
        <MemoList
          setMemoId={setMemoId}
          setStatus={setStatus}
          isListLoading={isListLoading}
          setIsListLoading={setIsListLoading}
        />
      )}
      {status === "register" && (
        <MemoInsert setStatus={setStatus} setIsListLoading={setIsListLoading} />
      )}
      {status === "modify" && (
        <MemoInsert
          setStatus={setStatus}
          setIsListLoading={setIsListLoading}
          memoId={memoId}
          setMemoId={setMemoId}
        />
      )}
    </Wrapper>
  );
};

export default MemoModal;
