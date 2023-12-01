import getProfile from "@/api/getProfile";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface User {
  username: string;
  email: string;
}

export const Header = () => {
  const [profile, Setprofile] = useState<User>();

  useEffect(() => {
    if (getCookie("accessToken")) {
      async () => {
        const profile = await getProfile();
        Setprofile(profile);
      };
    }
  });
  return (
    <>
      <Container>
        <SubContainer>
          <LogoWrapper href={"/"}>
            <MainLogo src="/assets/MainLogo.svg" />
          </LogoWrapper>
          <HeaderWrapper>
            <NewWrite href="/write">글 쓰기</NewWrite>
            <Login href={profile ? "/profile" : "/login"}>
              {profile ? (
                <ProfileName>{profile?.username}</ProfileName>
              ) : (
                <ProfileName>로그인</ProfileName>
              )}
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
const Login = styled(NewWrite)``;

const ProfileName = styled.h1`
  font-size: 16px;
  font-weight: 500;
`;
