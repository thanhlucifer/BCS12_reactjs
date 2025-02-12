import { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NotificationContext } from "../../../App";
const DemoUseEffect = () => {
  const dataContext = useContext(NotificationContext);

  const [listShoe, setListShoe] = useState();
  useEffect(() => {
    console.log("Tôi là useEffect chạy sau khi giao diện xuất hiện");
    // lưu ý useEffect này sẽ chạy 1 lần duy nhất khi component được khởi tạo
    // Xử lí gọi API cho component ở useEffect này  
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        console.log(res);
        setListShoe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
      dataContext.handleNotification("error", "Hello");
  }, []);
  console.log("Tôi là component demoUseEffect");
  console.log(listShoe);
  function render() {
    console.log("Tôi là giao diện của demouseEffect");
    return <p>{listShoe && listShoe[0]?.name}</p>;
  }
  const [number, setnumber] = useState('')
  //useCallback duoc su dung khi chung ta can quan ly mot function co nen duoc render lai khi component render hay khong 
  // cac tham so trong dependencies cua useCallback giup thuc hien kiem tra khi nao thi function do duoc render lai de lay du lieu moi
  const funtionCallback = useCallback(render,[number] )
  return (
    <div>
      {funtionCallback()}
      <input type="text" placeholder="vui long nhap bat ki so" 
      onChange={(event)=>setnumber(event.target.value)}
      />
      <div className="grid grid-cols-4 gap-5">
        {/* nếu có dữ liệu thì chạy, không thì sẽ không chạy  */}
        {listShoe?.map((item, index) => {
          return (
            <div>
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
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;