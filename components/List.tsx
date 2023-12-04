import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

interface Information {
  title: string;
}

interface Props {
  createdAt: Date;
}

const List: NextPage<Props> = ({ createdAt }) => {
  const [info, setInfo] = useState<Information>({
    title: "",
  });

  console.log(createdAt);

  return (
    <>
      <Container>
        <ContentWrapper href="https://webp.haerin.app/board/:id">
          <Content>
            <ListTitle>제목 : {info?.title}</ListTitle>
            <Date>작성일: {createdAt.toISOString().split("T")[0]}</Date>
          </Content>
        </ContentWrapper>
      </Container>
    </>
  );
};

export default List;

const Container = styled.div`
  width: 90%;
  max-width: 1010px;
  height: 90%;
  max-height: 54px;

  display: flex;
  align-items: center;

  border: 3px solid black;
  border-radius: 6px;
  margin: 10px 0;
`;

const ContentWrapper = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-weight: 500;

  @media (max-width: 460px) {
    overflow-x: hidden;
  }
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;

  padding: 0 10px;
`;

const Date = styled(ListTitle)`
  @media (max-width: 460px) {
    display: none;
  }
`;
