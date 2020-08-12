import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, ButtonGroup, Button, Spinner } from "reactstrap";
import ModalDelete from "../ModalDelete";

const PhotoList = (props) => {
  const [numberOfPhoto, setNumberOfPhoto] = useState(6);
  const [loading, setLoading] = useState(false);

  const { photos, onPhotoEditClick, onPhotoRemoveClick } = props;

  const loadMorePhoto = () => {
    setLoading(true);
    setTimeout(() => {
      setNumberOfPhoto(numberOfPhoto + 6);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      <div className="photo-list">
        {photos.slice(0, numberOfPhoto).map((photo, i) => {
          return (
            <div className="photo-item" key={i}>
              <Col>
                {" "}
                <img src={photo.photo} alt={photo.title} />
                <div className="overlay">
                  <div className="text">{photo.title}</div>
                  <ButtonGroup>
                    <Button
                      className="mr-3"
                      outline
                      color="info"
                      onClick={() => onPhotoEditClick(photo.id)}
                    >
                      Edit
                    </Button>

                    <ModalDelete
                      id={photo.id}
                      onPhotoRemoveClick={onPhotoRemoveClick}
                    />
                  </ButtonGroup>
                </div>
              </Col>
            </div>
          );
        })}
      </div>
      {numberOfPhoto >= photos.length ? (
        ""
      ) : (
        <Button className="mt-4" onClick={loadMorePhoto}>
          {loading && <Spinner size="sm" />}{" "}
          {loading ? "Loading..." : "Load more"}
        </Button>
      )}
    </>
  );
};

PhotoList.propTypes = {
  photoList: PropTypes.array,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoList.defaultProps = {
  photoList: [],
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

export default PhotoList;
