import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import LoggedOutLayout from "../../components/layouts/LoggedOutLayout";
import { setCookie } from "../../utils/cookies";
import { useMutation } from "react-query";
import { color } from "../../styles/theme";
import axios from "axios";
import { updateUser } from "../../store/userSlice";

import Terms from "./Terms";
import Account from "./Account.js";
import UserInfo from "./UserInfo";
import StoreInfo from "./StoreInfo";
import Complete from "./Complete";

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

  const registerMutation = useMutation((data) => axios.post("http://localhost:4000/api/user/signup", data), {
    onSuccess: () => {
      setStep("complete");
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        console.error(error.response);
      }
    },
  });

  const onSubmit = async () => {
    //약관
    const terms = termsForm.getFieldsValue().agree;
    const agreeMarketing = terms.length === 3 ? 7 : 4;
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

    const formData = {
      email,
      password,
      phone,
      name,
      agreeMarketing,
      type,
      storeName,
      zipCode,
      address1,
      address2,
      contact,
    };

    registerMutation.mutate(formData);
  };

  useEffect(() => {
    if (step === "info") {
      setEmailConfirm(accountForm.getFieldValue("email"));
    }
  }, [step]);

  return (
    <LoggedOutLayout>
      <Terms currentStep={step === "terms"} form={termsForm} setStep={setStep} />
      <Account currentStep={step === "account"} form={accountForm} setStep={setStep} />
      <UserInfo currentStep={step === "info"} form={infoForm} setStep={setStep} step={step} emailConfirm={emailConfirm} />
      <StoreInfo currentStep={step === "facility"} form={storeForm} onSubmit={onSubmit} setStep={setStep} />
      <Complete currentStep={step === "complete"} />
    </LoggedOutLayout>
  );
};

export default Register;
