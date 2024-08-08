import { useQuery } from "react-query";
import axios from "axios";
import Cookies from "js-cookie";
export const getLockerList = async ({ type, formData }) => {
  try {
    const token = Cookies.get("victok_token");

    let apiUrl = "";
    if (type) {
      apiUrl = `http://localhost:4000/api/locker/locker-list-${type}`;
    } else {
      apiUrl = "/locker/locker-list";
    }
    const res = await axios.get(apiUrl, {
      params: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // await API.get(apiUrl, { params: formData });
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// 락카 리스트
const useGetLockerList = ({ dataKey, type, formData, onSuccess, onError }) => {
  return useQuery(
    dataKey,
    () =>
      getLockerList({
        type,
        formData,
      }),
    {
      onSuccess,
      onError,
    }
  );
};

export default useGetLockerList;
