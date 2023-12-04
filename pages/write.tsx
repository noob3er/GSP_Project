import CheckLogin from "@/api/check";
import Header from "@/components/Header";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface InterfaceType {
  title?: string;
  content?: string;
}

const Write = () => {
  const [like, setLike] = useState(false);

  const [content, setContent] = useState<InterfaceType>({
    title: "",
    content: "",
  });

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

  const ToggleLike = async () => {
    const res = await axios.post("/likes");
    setLike(true);
  };

  const ChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.title || !content.content)
      return alert("제목과 내용을 입력해주세요.");

    if (content.title.length > 15) {
      alert("제목은 15자 이내로 작성해주세요.");
      return;
    }
    if (content.content.length > 400) {
      alert("내용은 400자 이내로 작성해주세요.");
      return;
    }

    axios
      .post(
        "https://webp.haerin.app/api/post",
        {
          title: content?.title,
          content: content?.content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <MainContainer>
        <Header />
        <Container>
          <HeaderTop>
            <TitleWrapper>
              <MainTitle>제목: </MainTitle>
              <SubTitle
                name="title"
                value={content.title}
                onChange={ChangeHandler}
              />
            </TitleWrapper>
          </HeaderTop>
          <HeaderBottom>
            <ContentWrapper>
              <Content
                name="content"
                value={content.content}
                onChange={ChangeHandler}
              />
            </ContentWrapper>
          </HeaderBottom>
          <SubmitWrapper onSubmit={submitHandler}>
            <Submit type="submit">
              <SubmitName>작성하기</SubmitName>
            </Submit>
          </SubmitWrapper>
        </Container>
      </MainContainer>
    </>
  );
};

export default Write;

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 90%;
  max-width: 1000px;
  height: 90%;
  max-height: 600px;

  margin-top: 12px;
  gap: 16px;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 10%;

  border: 2px solid black;
  border-radius: 6px;
`;
const HeaderBottom = styled(HeaderTop)`
  height: 60%;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  height: 100%;
  width: 100%;
  padding: 0 12px;
`;
const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;
const SubTitle = styled.input`
  padding: 0 8px;
  width: 60%;
  height: 100%;
  font-size: 22px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`;

const Content = styled.textarea`
  width: 100%;
  height: 100%;

  font-size: 18px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: transparent;
  color: black;
  resize: none;
  padding: 18px;
`;

const SubmitWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 10%;
`;

const Submit = styled.button`
  width: 90%;
  max-width: 100px;
  height: 70%;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #735a4e;
    color: white;
  }
`;

const SubmitName = styled.h1`
  font-size: 18px;
  font-weight: 500;
`;

const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 1%;
`;

const LieksImg = styled.img`
  width: 30px;
`;
