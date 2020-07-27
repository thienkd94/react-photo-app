import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "reactstrap";
import "./style.scss";

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
    // return `https://picsum.photos/600/400/?random&rnd${new Date().getTime()}`;
    return `https://picsum.photos/id/${randomId}/600/400`;
};

const RandomPhoto = (props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;

  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };

  return (
    <Row className="random-photo">
      <Col md={3} className="random-photo__button text-center mb-4">
        <Button
          type="button"
          outline
          name={name}
          color="success"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </Col>
      <Col md={9} className="random-photo__photo text-center p-0">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Ooops ... not found. Please click button again"
          />
        )}
      </Col>
    </Row>
  );
};

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
