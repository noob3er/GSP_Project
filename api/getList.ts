import axios from "axios";
import { getCookie } from "cookies-next";

const getList = async () => {
  try {
    const { data } = await axios.get("localhost:3000/boards", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return data;
  } catch (error) {
    console.error("게시물 목록을 가져오는 데 실패했습니다:", error);
    return [];
  }
};

export default getList;
