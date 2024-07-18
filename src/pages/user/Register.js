import React, { useState,useEffect } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import LoggedOutLayout from "../../components/layouts/LoggedOutLayout";
import { setCookie } from "../../utils/cookies";

import { color } from "../../styles/theme";
import axios from "axios";
import { updateUser } from "../../store/userSlice";



// import Complete from "./Complete";

import Terms from "./Terms";
import Account from "./Account.js";
import UserInfo from "./UserInfo";
import StoreInfo from "./StoreInfo";

const Image = styled.img`
  width: 24rem;
  height: 6rem;
  object-fit: cover;
  margin-bottom: 5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.6rem;
`;

const Register = () => {
  const [step, setStep] = useState("terms");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [termsForm] = Form.useForm();
  const [accountForm] = Form.useForm();
  const [infoForm] = Form.useForm();
  const [storeForm] = Form.useForm();

  
  const form = new FormData();

  // const registerMutation = useMutation(
  //   (data) =>
  //     API.post("/user/account", data, {
  //       headers: { "content-type": "multipart/form-data" },
  //     }),
  //   {
  //     onSuccess: () => {
  //       setStep("complete");
  //     },
  //     onError: (error) => {
  //       if (axios.isAxiosError(error)) {
  //         console.error(error.response);
  //       }
  //     },
  //   }
  // );
 
  // const onSubmit = async () => {
  //   const terms = termsForm.getFieldsValue();
  //   const { email, password } = accountForm.getFieldsValue();
  //   const {
  //     name,
  //     auth: { phoneNum: phone },
  //   } = infoForm.getFieldsValue();
  //   const {
  //     type,
  //     storeName: store_name,
  //     address: { zip: zip_code, addr: address1, detail: address2 },
  //     hp: contact,
  //   } = storeForm.getFieldsValue();
  //   const formData = {
  //     email,
  //     password,
  //     name,
  //     phone,
  //     type,
  //     store_name,
  //     zip_code,
  //     address1,
  //     address2,
  //     contact,
  //     agree_marketing: terms.agree.includes("marketing") ? 1 : 0,
  //   };

  //   const form = new FormData();

  //   for (let key in formData) {
  //     form.append(key, formData[key]);
  //   }

  //   registerMutation.mutate(form);
  // };
  
  
  const onTestSubmit = async () => {
    //약관
    const terms  = termsForm.getFieldsValue().agree;
    //계정젇보
    const { email, password } = accountForm.getFieldsValue();
    // 이름/핸드폰
    const {
      name,
      auth: { phoneNum: phone },
    } = infoForm.getFieldsValue();

    // 시설정보
    const {
      type,
      storeName,
      address: { zip: zipCode, addr: address1, detail: address2 },
      contact,
    } = storeForm.getFieldsValue();

    const form = new FormData();

    const formData = {

 
    };




  };

  useEffect(() => {
    if (step === "info") {
      setEmailConfirm(accountForm.getFieldValue("email"));
         }
  }, [step])




  return (
    <LoggedOutLayout>
     
     <Terms
        currentStep={step === "terms"}
        form={termsForm}
        setStep={setStep}
      />
    <Account
        currentStep={step === "account"}
        form={accountForm}
        setStep={setStep}
      />
      <UserInfo
        currentStep={step === "info"}
        form={infoForm}
        setStep={setStep}
        step={step}
        emailConfirm={emailConfirm}
      />
      <StoreInfo
        currentStep={step === "facility"}
        form={storeForm}
        onSubmit={onTestSubmit}
        setStep={setStep}
      />
    </LoggedOutLayout>
    
  );
};

export default Register;
