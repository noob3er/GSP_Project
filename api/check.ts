import { useEffect, useState } from "react";
import Router from "next/router";

export default function CheckLogin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 확인
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        // 사용자에게 메시지를 보여준 후 로그인 페이지로 리다이렉트
        alert("로그인 후 이용이 가능합니다.");
        Router.push("/login");
      } else {
        setIsAuthenticated(true);
      }
    }
  }, []);

  // 인증되지 않았을 경우, null 대신 로딩 인디케이터나 다른 UI 요소를 표시할 수 있습니다.
  if (!isAuthenticated) {
    return null;
  }

  // 인증된 경우에 대한 렌더링 (여기서는 단순화를 위해 null을 반환합니다)
  return null;
}
