import "./styles/App.css";
import styled from "styled-components";

import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import moment from "moment";

import store from "./store/store";
import { ThemeProvider } from "styled-components";
import locale from "antd/lib/locale/ko_KR";
import { mainTheme } from "./styles/theme";
import MainRouter from "./routers/MainRouter";

import { QueryClient, QueryClientProvider } from "react-query"; //1번
import { Provider } from "react-redux";
const queryClient = new QueryClient();

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  background-color: #f3f5f8;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", sans-serif;
  position: relative;
`;

const App = () => {
  moment.locale("ko");

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <ConfigProvider locale={locale}>
            <Container>
              <MainRouter />
            </Container>
          </ConfigProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
