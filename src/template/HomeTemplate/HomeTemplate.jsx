import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import {path} from '../../assets/common/path';
import userSlide from '../../redux/slides/userSlide';
const { Header, Content, Footer } = Layout;
import { useDispatch, useSelector } from 'react-redux';

const HomeTemplate = () => {
  const {hoten} = useSelector((state) => state.userSlide)
  const arrNavLink = [
    {
      to: path.home,
      content: "Home"
    },
    {
      to: path.baiTapHienThiDienThoai,
      content: "Dien Thoai"
    },
    {
      to: path.demoRedux,
      content: "Demo Redux"
    }
  ]
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  
  return (
    <Layout className='min-h-screen'>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div className="demo-logo" />
        
        <div>
          {
          arrNavLink.map((item, index) => {
            return <NavLink key={index} to={item.to} className={({ isActive }) => {
              console.log(isActive);
              return isActive ? 'text-red-500 mx-4' : 'text-white mx-4';
            }}>{item.content}</NavLink>
          })
        }
        </div>
        <div className='text-white uppercase'>{hoten}</div>
      </Header>
      <Content
        style={{
          padding: '0 48px',
          margin: '16px 0',
        }}
      >

        <div
          style={{
            padding: 24,
            minHeight: '100%',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',

        }}
      >
        Ant Design ©{new Date().getFullYear()} ThanhLucifer Repo.
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;