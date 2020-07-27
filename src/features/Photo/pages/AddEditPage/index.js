import React from "react";
import Banner from "../../../../components/Banner/Banner";
import PhotoForm from "../../components/PhotoForm";
import { addPhoto } from "../../photoSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addPhoto(values);
        console.log("handleSubmit -> action", action);
        dispatch(action);
        history.push("/photos");
        resolve(true)
      }, 1500);
    });
  };

  return (
    <div>
      <Banner
        title="Pick your a photo"
        backgroundUrl="https://i.pinimg.com/originals/8e/69/23/8e69231a11e5786ce274a1243e0e04b4.jpg"
      />
      <PhotoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEditPage;
