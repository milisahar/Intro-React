import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form,Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form className="Form">
        <h1>JOIN US!!</h1>
  <Form.Row>
    <Form.Group controlId="formGridEmail">
      <Form.Label className="Formlabel">Email</Form.Label>
      <Form.Control className="Formplaceboxes" type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label className="Formlabel">Password</Form.Label>
      <Form.Control className="Formplaceboxes" type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label className="Formlabel">Address</Form.Label>
    <Form.Control className="Formplaceboxes"  placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label className="Formlabel">Address 2</Form.Label>
    <Form.Control className="Formplaceboxes" placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group  controlId="formGridCity">
      <Form.Label className="Formlabel">City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group  controlId="formGridState">
      <Form.Label className="Formlabel" >State</Form.Label>
      <Form.Control className="Formplaceboxes"  as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group  controlId="formGridZip">
      <Form.Label className="Formlabel">Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check className="Formplaceboxes" type="checkbox" label="Check me out" />
  </Form.Group>

  <Button id="submit-btn" className="Formplaceboxes"  variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </header>
    </div>
  );
}

export default App;
