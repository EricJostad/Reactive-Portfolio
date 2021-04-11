import React from 'react';
import { Form } from 'react-bootstrap';
import '../Footer/footer.css';

function Footer() {
    return (
        <Form>
        <Form.Group>
          <label for="name" class="col-form-label">What is your name?</label>
          <input type="text" class="form-control" placeholder="Name" id="name"/>
        </Form.Group>
        <Form.Group>
          <label for="email" class="col-form-label">What is your email?</label>
          <input type="email" class="form-control" placeholder="Email" id="email"/>
        </Form.Group>
        <Form.Group>
          <label for="message" class="col-form-label">Ask me something</label>
          <textarea class="form-control" placeholder="Message" id="message"></textarea>
        </Form.Group>
        <button type="submit" class="btn btn-secondary">Submit</button>
      </Form>
    );
}

export default Footer;