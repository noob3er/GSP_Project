import Link from "next/link";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <BorderWrapper>
          <TopWrapper>
            <Logo src="/assets/Logo.svg" />
            <MainTitle>Welcome Back!</MainTitle>
          </TopWrapper>
          <FormWrapper>
            <SubmitWrapper>
              <GoogleLoginWrapper>
                <GoogleLogo src="/assets/symbols/google.svg" />
                <GOogleLogin href="https://webp.haerin.app/auth/google">
                  구글 로그인
                </GOogleLogin>
              </GoogleLoginWrapper>
            </SubmitWrapper>
          </FormWrapper>
        </BorderWrapper>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const BorderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100%;
  max-height: 200px;

  width: 90%;
  max-width: 530px;

  padding: 14px;

  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 2px 4px grey;
  background-color: #fff;
`;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  padding-bottom: 20px;

  gap: 10px;
`;

const Logo = styled.img`
  width: auto;
`;

const MainTitle = styled.h1`
  font-size: 22px;
  font-weight: 700;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  max-width: 340px;
  height: 90%;
  max-height: 230px;

  gap: 22px;
`;

const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 90%;
  max-height: 94px;
  width: 100%;

  gap: 8px;
`;

const SubmitLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;

  border: none;
  outline: none;
  border-radius: 6px;

  background-color: #ab7f6c;
  font-size: 14px;
  font-weight: 500;
  color: #fffbf9;

  cursor: pointer;
`;

const GoogleLoginWrapper = styled(SubmitLogin)`
  justify-content: center;
  padding-right: 14px;

  background-color: #bb907d;
  gap: 4px;
`;
const GoogleLogo = styled.img`
  width: 14px;
`;

const GOogleLogin = styled(Link)``;
