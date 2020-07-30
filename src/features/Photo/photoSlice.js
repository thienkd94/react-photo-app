import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photo",
  initialState: [
    {
      id: 1622,
      title: "Lotus",
      categoryId: 1,
      photo:
        "https://dean2020.edu.vn/wp-content/uploads/2019/06/hinh-anh-hoa-sen-trang-17-300x200.jpg",
    },
    {
      id: 2622,
      title: "Car",
      categoryId: 6,
      photo:
        "https://moigioinhadat.net.vn/wp-content/uploads/2019/06/Hinh-2-1452-1560928825-300x200.png",
    },
    {
      id: 3632,
      title: "Dolphin",
      categoryId: 2,
      photo:
        "https://tophinhanhdep.com/wp-content/uploads/2018/01/anh-dong-vat-bien-300x200.jpg",
    },
    {
      id: 1634,
      title: "Boxing",
      categoryId: 3,
      photo:
        "https://vothuattayson.vn/wp-content/uploads/size-gang-tay-boxing-1-300x200.jpg",
    },
    {
      id: 2455,
      title: "Beer",
      categoryId: 5,
      photo:
        "https://bebidasalcoholicas.org/wp-content/uploads/2019/07/Best-English-Beers-300x200.jpg",
    },
    {
      id: 5126,
      title: "Keyboard",
      categoryId: 6,
      photo:
        "https://www.semshred.com/wp-content/uploads/2018/11/update-keyboard-300x200.jpg",
    },
    {
      id: 1622,
      title: "Lotus",
      categoryId: 1,
      photo:
        "https://dean2020.edu.vn/wp-content/uploads/2019/06/hinh-anh-hoa-sen-trang-17-300x200.jpg",
    },
    {
      id: 2622,
      title: "Car",
      categoryId: 6,
      photo:
        "https://moigioinhadat.net.vn/wp-content/uploads/2019/06/Hinh-2-1452-1560928825-300x200.png",
    },
    {
      id: 3632,
      title: "Dolphin",
      categoryId: 2,
      photo:
        "https://tophinhanhdep.com/wp-content/uploads/2018/01/anh-dong-vat-bien-300x200.jpg",
    },
    {
      id: 1622,
      title: "Lotus",
      categoryId: 1,
      photo:
        "https://dean2020.edu.vn/wp-content/uploads/2019/06/hinh-anh-hoa-sen-trang-17-300x200.jpg",
    },
    {
      id: 2622,
      title: "Car",
      categoryId: 6,
      photo:
        "https://moigioinhadat.net.vn/wp-content/uploads/2019/06/Hinh-2-1452-1560928825-300x200.png",
    },
    {
      id: 3632,
      title: "Dolphin",
      categoryId: 2,
      photo:
        "https://tophinhanhdep.com/wp-content/uploads/2018/01/anh-dong-vat-bien-300x200.jpg",
    },
  ],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);

      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return state.filter((photo) => photo.id !== removePhotoId);
    },
  },
});

const { reducer, actions } = photo;

export const { addPhoto, updatePhoto, removePhoto } = actions;
export default reducer;
