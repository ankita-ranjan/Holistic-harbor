import React from "react";
import { Button, Form } from "react-bootstrap";
import "./support.css"
const Support = () => {
  return (
    <div>
      <h2>Support 24x7</h2>
      <p>
        Our dedicated support team is available 24x7 to assist you. If you have
        any questions, concerns, or need help, feel free to reach out to us.
      </p>

      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Type your message"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Support;
