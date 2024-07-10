import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Cookies from "js-cookie";
import { updateUser } from "../store/userSlice";

const useTokenValidation = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("victok_token");

    if (!token) {
      // 토큰이 없으면 바로 loading을 false로 설정하고 종료
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:4000/api/setting/user-info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.data.userInfoInfo) {
          dispatch(
            updateUser({
              ...response.data.data.userInfoInfo,
              loggedIn: true,
              token,
            })
          );
        } else {
          console.log("Invalid token");
        }
      })
      .catch((error) => {
        console.error("토큰 유효성 검사 실패:", error);
      })
      .finally(() => {
        setLoading(false); // 작업이 끝나면 loading을 false로 설정
      });
  }, [dispatch]);

  return loading;
};

export default useTokenValidation;
