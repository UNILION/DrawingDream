import React from "react";
import styled from "styled-components";
import character from "assets/img/character.png";
import Button from "components/commons/button";
import { createOnlineClass } from "api/onlineclass";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10rem;
  img {
    width: 100%;
  }
  .text {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    .time {
      color: #ed7331;
    }
  }
`;

const Notice = styled.div`
  width: 100%;
  line-height: 1.6;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.1rem;
`;

const RightContainer = ({ courseInfo }) => {
  const navigate = useNavigate();
  console.log(courseInfo);
  const startClass = () => {
    navigate(`/onlineclass/${courseInfo.courseId}`);
  };
  return (
    <>
      <Container>
        <img src={character} alt="캐릭터" />
        {courseInfo.onlineClassId ? (
          <>
            <div>
              <div className="text">
                <span className="time">5분 </span>
                뒤에 수업 시작이야!
              </div>
              <div className="text">같이 들어가자!</div>
            </div>
            <Button
              onClick={startClass}
              name="지금 들어가기"
              mt="1.5rem"
              width="14rem"
              height="2.5rem"
            />
          </>
        ) : (
          <Notice>
            아직 수업이 개설되지 않았습니다. <br />
            선생님께서 수업을 개설할 때까지 <br />
            조금만 기다려 주세요!
          </Notice>
        )}
      </Container>
    </>
  );
};

export default RightContainer;
