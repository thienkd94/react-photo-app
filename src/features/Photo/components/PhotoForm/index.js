import React from "react";
import PropTypes from "prop-types";
import * as yup from "yup";
import { Container, Col, Row, Button, Spinner } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";

const PhotoForm = (props) => {
  const initialValues = {
    title: "",
    category: null,
    photo: "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required("Title is required."),
    category: yup.string().nullable().required("Category is required"),
    photo: yup.string().required("Photo is required."),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <div>
            <Container>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FastField
                      name="title"
                      component={InputField}
                      label="Title"
                      placeholder="Enter a title"
                    />
                  </Col>
                  <Col md={6}>
                    <FastField
                      name="category"
                      component={SelectField}
                      label="Category"
                      options={PHOTO_CATEGORY_OPTIONS}
                      placeholder="What is your photo category ?"
                    />
                  </Col>
                </Row>
                <FastField
                  name="photo"
                  component={RandomPhotoField}
                  label="Photo"
                />
                <Row>
                  <Col className="text-center mt-5">
                    <Button type="submit" color="info">
                        {isSubmitting && <Spinner size="sm" />} {" "}
                      Add to album
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </div>
        );
      }}
    </Formik>
  );
};

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

export default PhotoForm;
