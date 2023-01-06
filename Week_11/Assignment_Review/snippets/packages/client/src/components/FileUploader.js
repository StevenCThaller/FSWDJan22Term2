import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import axios from "../utils/axiosConfig";

const FileUploader = ({ selectCustomAvatar }) => {
  const [customAvatar, setCustomAvatar] = useState();

  const changeFile = (e) => {
    setCustomAvatar(e.target.files[0]);
  };

  const uploadPhoto = () => {
    const formData = new FormData();

    formData.append("profile_image", customAvatar);
    axios
      .post("/files", formData, {
        headers: { "Content-Type": "multipart/formdata" },
      })
      .then((res) => {
        selectCustomAvatar(res.data);
      });
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>Or, Upload a Photo</Form.Label>
      <Row>
        <Col xs={12} className="mb-2">
          <Form.Control type="file" name="customAvatar" onChange={changeFile} />
        </Col>
        <Col xs={12}>
          <Col
            as={Button}
            xs={6}
            md={{ span: 6, offset: 6 }}
            type="button"
            variant="secondary"
            onClick={uploadPhoto}
          >
            Upload
          </Col>
        </Col>
      </Row>
    </Form.Group>
  );
};

export default FileUploader;
