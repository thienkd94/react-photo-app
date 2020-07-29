import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photo",
  initialState: [
    {
      id: 1622,
      title: "Lorem lipsum dolor sit amet Lorem lipsum dolor sit amet",
      categoryId: 1,
      photo:
        "https://i.pinimg.com/originals/c4/25/bd/c425bdccc9a93c793d1ffc8ae1ac5b51.jpg",
    },
    {
      id: 2622,
      title: "Hello",
      categoryId: 2,
      photo:
        "https://giupban.com.vn/wp-content/uploads/2019/09/hinh-anh-mua-thu.jpg1_-300x200.jpg",
    },
    {
      id: 3632,
      title: "Hello",
      categoryId: 3,
      photo:
        "https://tinanimehot.com/wp-content/uploads/2016/12/160704_06-300x200.jpg",
    },
    {
      id: 1634,
      title: "Hello",
      categoryId: 4,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 2455,
      title: "Hello",
      categoryId: 5,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 5126,
      title: "Hello",
      categoryId: 6,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 4127,
      title: "Hello",
      categoryId: 1,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 1842,
      title: "Hello",
      categoryId: 3,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 1925,
      title: "Hello",
      categoryId: 2,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 1250,
      title: "Hello",
      categoryId: 4,
      photo: "https://via.placeholder.com/300x200",
    },
    {
      id: 1231,
      title: "Hello",
      categoryId: 1,
      photo: "https://via.placeholder.com/300x200",
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
