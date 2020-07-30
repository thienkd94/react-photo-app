import React from "react";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { Container, Col, Row, Button, Spinner } from "reactstrap";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import RandomPhotoField from "../../../../custom-fields/RandomPhotoField";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const PhotoForm = (props) => {
  const { initialValues, isAddMode } = props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required."),
    categoryId: Yup.number().required("Category is required").nullable(),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("Photo is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  toast.configure({
    autoClose: 3000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
  });

  const notify = (e) =>
    setTimeout(() => {
      if (isAddMode) {
        toast.success("Add photo successful !");
      } else {
        toast.success("Update photo successful !");
      }
    }, 1500);

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
                      name="categoryId"
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
                    <Link to="/photos" className="mr-3">
                      <Button>Cancel</Button>
                    </Link>
                    <Button type="submit" color="info" onClick={notify}>
                      {isSubmitting && <Spinner size="sm" />}{" "}
                      {isAddMode ? "Add to album" : "Update your photo"}
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
