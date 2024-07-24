import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DemoUseEffectDetail = () => {
  const [shoe, setShoe] = useState();
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
  }, []);

  console.log(shoe);

  return shoe ? (
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
  ) : null;
};

export default DemoUseEffectDetail;