import React from "react";
import Banner from "../../../../components/Banner/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto, updatePhoto } from "../../photoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    return state.photos.find((photo) => photo.id === parseInt(photoId));
  });

  const initialValues = isAddMode
    ? {
        title: "",
        category: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: Math.trunc(Math.random() * 9999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        history.push("/photos");
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div>
      <Banner
        title="Pick your a photo"
        backgroundUrl="https://i.pinimg.com/originals/8e/69/23/8e69231a11e5786ce274a1243e0e04b4.jpg"
      />
      <PhotoForm
        isAddMode={isAddMode}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </div>
  );
};

export default AddEditPage;
