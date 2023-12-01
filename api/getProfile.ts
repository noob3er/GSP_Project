import { getCookie } from "cookies-next";
import Router from "next/router";

const getProfile = async () => {
  try {
    const { data } = await fetch("/auth/google", {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    }).then((response) => response.json());

    return data;
  } catch {
    if (Router.pathname !== "/login" && Router.pathname !== "/") {
      Router.push("/login");
    }
  }
};

export default getProfile;
