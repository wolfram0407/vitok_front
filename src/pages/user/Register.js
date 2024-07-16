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

// import UserInfo from "./UserInfo";
// import Account from "./Account";
// import Complete from "./Complete";
// import StoreInfo from "./StoreInfo";
import Terms from "./Terms";

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

    </LoggedOutLayout>
  );
};

export default Register;
