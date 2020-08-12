import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
  name: "photo",
  initialState: [
    {
      id: 1622,
      title: "Sunset",
      categoryId: 3,
      photo:
        "https://photocascadia.files.wordpress.com/2011/09/300x200-300dpi.jpg",
    },
    {
      id: 2392,
      title: "Technology",
      categoryId: 1,
      photo:
        "https://www.cyberadviserblog.com/wp-content/uploads/sites/18/2018/01/GettyImages-876819618-300x200.jpg",
    },
    {
      id: 1692,
      title: "Goat",
      categoryId: 2,
      photo:
        "https://cdn.youmed.vn/tin-tuc/wp-content/uploads/2020/05/benh-sot-Q-300x200.jpg",
    },

    {
      id: 3632,
      title: "Beam jump",
      categoryId: 5,
      photo:
        "https://www.digitalistmag.com/files/2019/09/272509_272509_l_srgb_s_gl-300x200.jpg",
    },
    {
      id: 1634,
      title: "Boxing",
      categoryId: 3,
      photo:
        "https://vothuattayson.vn/wp-content/uploads/size-gang-tay-boxing-1-300x200.jpg",
    },
    {
      id: 8982,
      title: "Building",
      categoryId: 6,
      photo:
        "https://www.cmsmechanical.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-06-at-10.28.12-AM-300x200.png",
    },
    {
      id: 2455,
      title: "Beer",
      categoryId: 5,
      photo:
        "https://bebidasalcoholicas.org/wp-content/uploads/2019/07/Best-English-Beers-300x200.jpg",
    },
    {
      id: 5166,
      title: "Keyboard",
      categoryId: 6,
      photo:
        "https://www.semshred.com/wp-content/uploads/2018/11/update-keyboard-300x200.jpg",
    },

    {
      id: 2192,
      title: "Football",
      categoryId: 5,
      photo:
        "https://www.numovesphysio.com.au/wp-content/uploads/2016/10/Football-physiotherapy-300x200.jpg",
    },
    {
      id: 3972,
      title: "Nature",
      categoryId: 3,
      photo:
        "https://lh3.googleusercontent.com/proxy/yborGgj-3wWisv3DSMGxRgUVsyu7u-hn_51mZWXd4R6onk6_P7szLWaPyj5eb6OADzgTTiwm9xWKCaAjCl4g8afX0ut0eING3mXDtDUg0piyFtA3bQtthHYcbZuzvbuKXASu0GxCx9HI7YmZuivWCz4JvC5fT-MbFPrz7ZlRpruhVDP9n6wEMM8MprJ98Ey8XZI",
    },
    {
      id: 2222,
      title: "Terrain racing",
      categoryId: 5,
      photo:
        "https://adventuresportsjournal.com/wp-content/uploads/2015/03/img_0171-1-WEB-300x200.gif",
    },
    {
      id: 2622,
      title: "Car",
      categoryId: 6,
      photo:
        "https://moigioinhadat.net.vn/wp-content/uploads/2019/06/Hinh-2-1452-1560928825-300x200.png",
    },
  ],
  reducers: {
    addPhoto: (state, action) => {
      state.unshift(action.payload);
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
