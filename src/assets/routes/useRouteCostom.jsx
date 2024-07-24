import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../../template/HomeTemplate/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import BaiTap1Props from '../components/BaiTap/BaiTap1Props'
import BaiTapHienThiDienThoai from '../components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai'
import ShowDetail from '../components/ShowDetail'
import { path } from '../common/path'
import DemoRedux from '../components/DemoRedux/DemoRedux'
import BaiTapLacLiNgau from '../components/BaiTap/BaiTapLacLiNgau/BaiTapLacLiNgau'
import DemoUseEffect from '../components/DemoUseEffect/DemoUseEffect'
import DemoUseEffectDetail from '../components/DemoUseEffect/DemoUseEffectDetail'
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