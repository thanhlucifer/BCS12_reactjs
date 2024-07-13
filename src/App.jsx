import { useState } from 'react'
import HeaderComponent from './assets/components/HeaderComponent'
import HomeDemo from './assets/components/HomeDemo'
import RenderShose from './assets/components/RenderShose'
import DemoEvent from './assets/components/DemoEvent'
import DemoCss from './assets/components/DemoCss/DemoCss'
import DemoState from './assets/components/DemoState/DemoState'
import BaiTap1 from './assets/components/DemoState/BaiTap1'
import BaiTap1Props from './assets/components/BaiTap/BaiTap1Props'
import BaiTapHienThiDienThoai from './assets/components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai'
function App() {
  const [count, setCount] = useState(0)
  function updateCount() {
    setCount(count + 1)
  }
  return (
    <>
    {/* <DemoState></DemoState>
    <DemoCss></DemoCss>
    <DemoEvent></DemoEvent>
    <HeaderComponent></HeaderComponent>
    <HomeDemo></HomeDemo>
      <div>
       
        <h1 class="text-red-900 text-center text-4xl font-bold">
          Hello world!
        </h1>
        <RenderShose></RenderShose>

        <div className="container">
          <h5 className='demo_sass'>
              Hello Luci
          </h5>
        </div>
      </div> */}
      {/* <BaiTap1 updateCount={updateCount} abc={count}></BaiTap1> */}
      {/* <BaiTap1Props></BaiTap1Props> */}
      <BaiTapHienThiDienThoai></BaiTapHienThiDienThoai>
    </>
  )
}

export default App
