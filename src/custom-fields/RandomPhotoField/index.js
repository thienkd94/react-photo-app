import React from 'react'
import PropTypes from 'prop-types'
import { Label, FormFeedback } from 'reactstrap';
import RandomPhoto from '../../components/RandomPhoto';
import { ErrorMessage } from 'formik';

const RandomPhotoField = props => {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }

    return (
      <React.Fragment>
        {label && <Label for={name}>{label}</Label>}
        <RandomPhoto
          name={name}
          imageUrl={value}
          onImageUrlChange={handleImageUrlChange}
          onRandomButtonBlur={onBlur}
          invalid={true}
        />
        <div className={showError ? "is-invalid" : ""}></div>
        <ErrorMessage name={name} component={FormFeedback} />
      </React.Fragment>
    );
}

RandomPhotoField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
};

RandomPhotoField.defaultProps = {
  label: "",
};


export default RandomPhotoField
