import { React, useState } from "react";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

import "./emi.scss";

const Emi = () => {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [interest, setInterest] = useState("");
  const [emi, setEmi] = useState("");
  const handleCalculate = (e) => {
    let R = interest / 12 / 100;
    let Q = 1 + R;
    let S = Math.pow(Q, month);
    let V = S - 1;
    let Z = (amount * R * S) / V;
    let EMI = Math.round(Z);
    setEmi(EMI);
  };
  const handleClear = (e) => {
    e.preventDefault();
    setAmount("");
    setMonth("");
    setInterest("");
    setEmi("");
  };
  return (
    <Container className="emi-wrapper">
      <Container className="emi-calculator-input">
        <Form>
          <Form.Group as={Row} className="mb-3 mt-4">
            <Form.Label column sm="4" className="label">
              Loan Amount
            </Form.Label>
            <Col sm="8">
              <InputGroup>
                <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                <FormControl
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-4">
            <Form.Label column sm="4" className="label">
              Loan Tenure
            </Form.Label>
            <Col sm="8">
              <FormControl
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 mt-4">
            <Form.Label column sm="4" className="label">
              Interest Rate
            </Form.Label>
            <Col sm="8">
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
                <FormControl
                  type="number"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </InputGroup>
            </Col>
          </Form.Group>
          <Container className="emi-calculator-buttons">
            <Button variant="outline-danger" onClick={(e) => handleClear(e)}>
              Clear
            </Button>
            <Button
              variant="outline-success"
              onClick={(e) => handleCalculate(e)}
            >
              Calculate
            </Button>
          </Container>
        </Form>
      </Container>
      <Container className="mt-4">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Col sm="12" className="display">
            <h5>Monthly Payment : $ {emi}</h5>
          </Col>
        </Form.Group>
      </Container>
    </Container>
  );
};
export default Emi;
