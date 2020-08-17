import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Container } from "reactstrap";
import Banner from "../../../../components/Banner/Banner";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import "./style.scss";


const MainPage = () => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (id) => {
    history.push(`/photos/${id}`);
  };

  const handlePhotoRemoveClick = (id) => {
    const action = removePhoto(id);
    dispatch(action);
  };


  return (
    <div>
      <Banner title="Your awesome photos " />

      <Container className="text-center">
        <Link to="photos/add">
          <Button color="success">Add new photo </Button>
        </Link>

        <PhotoList
          photos={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
};

export default MainPage;
