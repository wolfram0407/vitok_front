

import styled from "styled-components";


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // useNavigate import
import { setUser } from '../../store/userSlice';
import { Form, Input, Button } from 'antd';


import LoggedOutLayout from "../../components/layouts/LoggedOutLayout";




const Image = styled.img`
  width: 24rem;
  height: 6rem;
  object-fit: cover;
  margin-bottom: 5rem;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const onClickFindPassword = () => navigate("/");
  const onClickRegister = () => navigate("/");

  const onFinish =  ({ id, password }) => {
    dispatch(setUser({ name, email }));
    navigate('/'); // 로그인 후 홈 페이지로 리다이렉션
  };
  return (
    <LoggedOutLayout center>
      <Image src={require("../../assets/images/logo.png")} />
     
 
     
   
    </LoggedOutLayout>
  );
};

export default Login;