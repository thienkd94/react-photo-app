import React from "react";
import PropTypes from "prop-types";
import { Col, ButtonGroup, Button } from "reactstrap";
import ModalDelete from "../ModalDelete";

const PhotoList = (props) => {
  const { photos, onPhotoEditClick, onPhotoRemoveClick } = props;

  return (
    <div className="photo-list">
      {photos.map((photo, i) => {
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
