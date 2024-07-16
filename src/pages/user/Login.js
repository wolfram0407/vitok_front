import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import LoggedOutLayout from "../../components/layouts/LoggedOutLayout";
import { setCookie } from "../../utils/cookies";

import { color } from "../../styles/theme";
import axios from "axios";
import { updateUser } from "../../store/userSlice";

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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const onClickFindPassword = () => navigate("/");
  const onClickRegister = () => navigate("/register");

  const onFinish = async ({ email, password }) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", { email, password });
      const { token, data } = response.data;
      setCookie("victok_token", token, { path: "/", maxAge: 3600 });
      dispatch(updateUser({ ...data.userInfo, token, loggedIn: true }));
      navigate("/");
    } catch (error) {
      Modal.error({
        title: "로그인 오류",
      });
      console.error("Login error:", error);
    }
  };

  return (
    <LoggedOutLayout>
      <Image src={require("../../assets/images/login.png")} />
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item style={{ flex: 1, width: 440, marginBottom: 0 }}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "이메일을 입력해 주세요." },
              { type: "email", message: "유효한 이메일 주소를 입력해 주세요." },
            ]}
            style={{ marginBottom: 5 }}
          >
            <Input
              placeholder="이메일을 입력해 주세요."
              style={{ flex: 1, height: 43, fontSize: 14, borderRadius: 4 }}
              autoComplete="email"
            />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "비밀번호를 입력해 주세요." }]}>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              type="password"
              style={{ flex: 1, height: 43, fontSize: 14, borderRadius: 4 }}
              autoComplete="current-password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                height: 48,
                fontSize: 16,
                borderRadius: 4,
                background: color.mainBlue,
              }}
            >
              로그인
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
      <Row
        style={{
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Row>
          <Checkbox
            onChange={(e) => setChecked(e.target.checked)}
            defaultChecked={checked}
            style={{
              "--background-color": color.mainBlue,
              "--border-color": color.mainBlue,
            }}
          >
            자동로그인
          </Checkbox>
        </Row>
        <Text
          style={{
            cursor: "pointer",
          }}
          onClick={onClickFindPassword}
        >
          비밀번호가 기억나지 않으신가요?
        </Text>
      </Row>
      <Row
        style={{
          width: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 60,
        }}
      >
        <Text>VICTOK을 처음 시작하시나요?</Text>
        <Text
          style={{
            color: color.gold,
            textDecoration: "underline",
            marginLeft: "0.8rem",
            cursor: "pointer",
          }}
          onClick={onClickRegister}
        >
          회원가입
        </Text>
      </Row>
    </LoggedOutLayout>
  );
};

export default Login;
