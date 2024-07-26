import React , { useState } from 'react'
import HeaderComponent from './assets/components/HeaderComponent'
import HomeDemo from './assets/components/HomeDemo'
import RenderShose from './assets/components/RenderShose'
import DemoEvent from './assets/components/DemoEvent'
import DemoCss from './assets/components/DemoCss/DemoCss'
import DemoState from './assets/components/DemoState/DemoState'
import BaiTap1 from './assets/components/DemoState/BaiTap1'
import BaiTap1Props from './assets/components/BaiTap/BaiTap1Props'
import BaiTapHienThiDienThoai from './assets/components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai'
import { Route, Routes } from 'react-router-dom'
import HomeTemplate from './template/HomeTemplate/HomeTemplate'
import PageNotFound from './assets/components/PageNotFound/PageNotFound'
import ShowDetail from './assets/components/ShowDetail'
import useRouteCostom from './assets/routes/useRouteCostom'
import { message } from 'antd';

export const NotificationContext = React.createContext();
function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    });
  };
  const routes = useRouteCostom();
  return (
    <>
    <NotificationContext.Provider
        value={{
          abc: "Linh đa",
          handleNotification,
        }}
      >
        {contextHolder}
        {routes}
      </NotificationContext.Provider>
    </>
   
  )
  // const [count, setCount] = useState(0)
  // function updateCount() {
  //   setCount(count + 1)
  // }
  // return (
  //   <>
  //     {/* <DemoState></DemoState>
  //   <DemoCss></DemoCss>
  //   <DemoEvent></DemoEvent>
  //   <HeaderComponent></HeaderComponent>
  //   <HomeDemo></HomeDemo>
  //     <div>
       
  //       <h1 class="text-red-900 text-center text-4xl font-bold">
  //         Hello world!
  //       </h1>
  //       <RenderShose></RenderShose>

  //       <div className="container">
  //         <h5 className='demo_sass'>
  //             Hello Luci
  //         </h5>
  //       </div>
  //     </div> */}
  //     {/* <BaiTap1 updateCount={updateCount} abc={count}></BaiTap1> */}
  //     {/* <BaiTap1Props></BaiTap1Props> */}
  //     {/* <BaiTapHienThiDienThoai></BaiTapHienThiDienThoai> */}
  //     <Routes>
        
  //       <Route path='/' element={<HomeTemplate />} >
  //       {/* thuoc tinh index giup xac dinh 1 component con se hien thi cung luc voi component cha  */}
  //         <Route index element={<BaiTap1Props />} />
  //         <Route path='bai-tap-hien-thi-dien-thoai' element={<BaiTapHienThiDienThoai />} />
  //         <Route path='showdetail/:slug' element={<ShowDetail />} />
  //       </Route>
  //       <Route path='*' element={<PageNotFound />}/>
  //     </Routes>
  //   </>
  // )
}

export default App
