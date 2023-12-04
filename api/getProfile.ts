import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";

const getProfile = async () => {
  try {
    const { data } = await axios.get("/auth/google", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return data;
  } catch {
    if (Router.pathname !== "/login" && Router.pathname !== "/") {
      Router.push("/login");
    }
  }
};

export default getProfile;
