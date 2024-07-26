import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState({});
  const [searchParam, setSearchParam] = useSearchParams();
  const datagiatien = searchParam.get('giatien');
  console.log(datagiatien);
  // shoe.tuoi ==> undifined
  const { id } = useParams();
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
    })
      .then((res) => {
        setShoe(res.data.content);
      })
      .catch((err) => {});
  }, [id]);

  console.log(shoe);
  useEffect(() => {
    return () => {
      console.log('component useeffect detail bi xoa');
      //tracking thoi gian nguoi dung su dung

    }
  }, [])

  return (
    <>
    <input type="text" className="border p-2 border-black rounded-md" placeholder="vui long nhap hang yeu thich"
    onChange={(e) => {
      const dataQuery = Object.fromEntries(searchParam.entries());
      console.log(dataQuery)
      setSearchParam({
        ...dataQuery, hang: e.target.value})
    }} />
    <div>
      <h1>Demo về trang chi tiết sản phẩm</h1>
      <div className="flex">
        <div className="w-4/12">
          <img src={shoe.image} alt="" />
        </div>
        <div className="w-8/12">
          <h3 className="font-bold text-3xl">{shoe.name}</h3>
          <p>{shoe.shortDescription}</p>
          <p>Giá tiền: {shoe.price}</p>
          <button className="py-2 px-5 bg-black text-white rounded-md">
            Mua ngay
          </button>
        </div>
      </div>
    </div>
    <div>
      <h3>Cac san pham lien quan</h3>
      <div className="grid grid-cols-3 gap-5">
      {shoe.relatedProducts?.map((item, index) => {
        
        return (
          <div >
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền: {item.price}</p>
              <Link
                to={`/demo-use-effect-detail/${item.id}`}
                className="bg-blue-500 text-white py-2 px-5 rounded-md"
              >
                Xem chi tiết
              </Link>
            </div>
        );
      }
      )}
      </div>
    </div>
    </>
    
  ) 
};

export default DemoUseEffectDetail;