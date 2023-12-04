import axios from "axios";
import { getCookie } from "cookies-next";
const getList = async () => {
  try {
    const { data } = await axios.get("/board/:id", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return data;
  } catch {}
};

export default getList;
