"use client";

import getProfile from "@/api/getProfile";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface User {
  username: string;
  email: string;
}

export const Header = () => {
  const [profile, Setprofile] = useState<User>();

  const router = useRouter();

  // useEffect(() => {
  //   try {
  //     getProfile().then((res) => Setprofile(res?.data));
  //   } catch {
  //     console.log("error");
  //     router.push("/login");
  //   }
  // }, [router]);

  return (
    <>
      <Container>
        <SubContainer>
          <LogoWrapper href={"/"}>
            <MainLogo src="/assets/MainLogo.svg" />
          </LogoWrapper>
          <HeaderWrapper>
            <NewWrite href="/write">글 쓰기</NewWrite>
            <Login href={profile ? profile?.username : "/login"}>
              <ProfileName>
                {profile?.username === undefined ? "로그인" : profile?.username}
              </ProfileName>
            </Login>
          </HeaderWrapper>
        </SubContainer>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const SubContainer = styled.div`
  width: 90%;
  max-width: 1000px;
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  user-select: none;
`;

const LogoWrapper = styled(Link)``;

const MainLogo = styled.img`
  width: 38px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 90%;
  max-width: 164px;
  height: 34px;
`;

const NewWrite = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Login = styled(Link)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileName = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
