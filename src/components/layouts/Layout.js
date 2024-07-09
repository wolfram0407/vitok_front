import React from 'react';
import { Layout } from 'antd';
import AppHeader from '../common/Header';
import AppFooter from '../common/Footer';

const { Content } = Layout;

const AppLayout = ({ children }) => (
  <Layout className="layout">
    <AppHeader />
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-content" style={{ padding: 24, minHeight: 380 }}>
        {children}
      </div>
    </Content>
    <AppFooter />
  </Layout>
);

export default AppLayout;
