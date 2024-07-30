import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../template/HomeTemplate/HomeTemplate'
import PageNotFound from '../assets/components/PageNotFound/PageNotFound'
import BaiTap1Props from '../assets/components/BaiTap/BaiTap1Props'
import BaiTapHienThiDienThoai from '../assets/components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai'
import ShowDetail from '../assets/components/ShowDetail'
import { path } from './../common/path'
import DemoRedux from '../assets/components/DemoRedux/DemoRedux'
import BaiTapLacLiNgau from '../assets/components/BaiTap/BaiTapLacLiNgau/BaiTapLacLiNgau'
import DemoUseEffect from '../assets/components/DemoUseEffect/DemoUseEffect'
import DemoUseEffectDetail from '../assets/components/DemoUseEffect/DemoUseEffectDetail'
import DemoFormReact from '../assets/components/DemoFormReact/DemoFormReact'
const useRouteCostom = () => {
    const element = useRoutes([
        {
          path: path.home,
          element: <HomeTemplate/>,
          children: [
              {
                index: true,
                element: <BaiTap1Props/>
              },
              {
                path: path.baiTapHienThiDienThoai,
                element: <BaiTapHienThiDienThoai/>
              },
              {
                path: `${path.showdetail}/:id` ,
                element: <ShowDetail/>
              },
              {
                path: path.demoRedux ,
                element: <DemoRedux/>
              },
              {
                path: path.lacxingau ,
                element: <BaiTapLacLiNgau/>
              },
              {
                path: "/demo-useEffect",
                element: <DemoUseEffect />,
              },
              {
                path: "/demo-use-effect-detail/:id",
                element: <DemoUseEffectDetail />,
              },
              {
                path: "/demo-form-react",
                element: <DemoFormReact />,
              },
          ]
        },
        {
          path: "*",
          element: <PageNotFound/>
        }
    ])
  return (
    element
  )
}

export default useRouteCostom