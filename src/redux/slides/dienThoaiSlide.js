import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ten: 'dien thoai iphone 12',
    gia: 1000,
    hang: 'apple',
    iphone: [
        {
            name: "iPhone 12",
            image: "https://cdn.tgdd.vn/Products/Images/42/228736/iphone-12-xanh-la-1-org.jpg",
            screen: "OLED, 6.1\", Super Retina XDR",
            os: "iOS 17",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "4 GB",
            rom: "64 GB"
        },
        {
            name: "iPhone 11",
            image: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-1-2-org.jpg",
            screen: "IPS LCD6.1\"Liquid Retina",
            os: "iOS 17",
            front_camera: "12 MP",
            rear_camera: "2 camera 12 MP",
            ram: "4 GB",
            rom: "64 GB"
        },
        {
            name: "iPhone 13",
            image: "https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-1-2.jpg",
            screen: "OLED6.1\" Super Retina XDR",
            os: "iOS 17",
            front_camera: "12 MP",
            rear_camera: "2 camera 12 MP",
            ram: "4 GB",
            rom: "256 GB"
        },
        {
            name: "iPhone 14",
            image: "https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-purple-1.jpg",
            screen: "OLED6.7\" Super Retina XDR",
            os: "iOS 17",
            front_camera: "12 MP",
            rear_camera: "Chính 48 MP & Phụ 12 MP, 12 MP",
            ram: "6 GB",
            rom: "128 GB"
        }
    ]
}

const dienThoaiSlide = createSlice({
  name: 'dienThoaiSlide',
  initialState,
  reducers: {}
});

export const {} = dienThoaiSlide.actions

export default dienThoaiSlide.reducer