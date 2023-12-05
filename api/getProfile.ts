import axios from "axios";
import { getCookie } from "cookies-next";
import Router from "next/router";

const getProfile = async () => {
  const res = axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/auth/profile/`, {
      headers: {
        withCredentials: true,
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      if (Router.pathname !== "/login" && Router.pathname !== "/") {
        Router.push("/login");
      }
    });

  return res;
};

export default getProfile;
