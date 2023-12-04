import Header from "@/components/Header";
import List from "@/components/List";
import Pagination from "@/components/Pagination";
import router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import getList from "@/api/getList";

const Index = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (!token) {
  //     alert("로그인 후 이용이 가능합니다.");
  //     router.push("/login");
  //   } else {
  //     setIsAuthenticated(true);
  //   }
  // }, []);

  // if (!isAuthenticated) {
  //   return null;
  // }

  return (
    <>
      <MainContainer>
        <Header />
        <Container>
          <TitleWrapper>
            <MainTitle>하루를 알차게</MainTitle>
            <MainLogo src="/assets/Logo.svg" />
          </TitleWrapper>
          <ContentWrapper>
            <List createdAt={new Date()} />
          </ContentWrapper>
          <PaginationWrapper>
            <Pagination />
          </PaginationWrapper>
        </Container>
      </MainContainer>
    </>
  );
};

export default Index;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 90%;
  max-height: 700px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
const TitleWrapper = styled.div`
  width: 100%;
  height: 90%;
  max-height: 76px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 12px;

  gap: 12px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border: 3px solid black;
  box-shadow: 2px 4px grey;
  border-radius: 6px;

  margin: 10px;
`;

const MainTitle = styled.h1`
  font-size: 52px;
  font-weight: 700;

  @media (max-width: 460px) {
    display: none;
  }
`;
const MainLogo = styled.img`
  width: 76px;
  height: 76px;
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
