import { React, useState } from "react";

import { useSelector } from "react-redux";

import {
  Container,
  Form,
  Button,
  ListGroup,
  Row,
  Col,
  InputGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

import { AiFillDelete } from "react-icons/ai";

import "./styles.scss";

import { selectUser } from "../../features/UserSlice";

const Todo = () => {
  const [data, setData] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) return;
    setData("");
    setTodo((previousState) => [
      ...previousState,
      { id: Date.now(), text: data, status: false },
    ]);
  };

  const deleteHandler = (key) => {
    const deleteTodo = todo.filter((i, index) => key !== index);
    setTodo(deleteTodo);
  };
  const user = useSelector(selectUser);
  return (
    <Container className="todo-wrapper">
      <Form onSubmit={handleSubmit}>
        <Container className="input-container">
          <InputGroup>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Create your todo here"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>{user.email} create your todo here !!</Tooltip>}
            >
              <Button onClick={handleSubmit}>Add Todo</Button>
            </OverlayTrigger>
          </InputGroup>
        </Container>
      </Form>
      <Container className="list-container">
        <ListGroup>
          {todo.map((item, key) => (
            <ListGroup.Item className="list-element" key={key}>
              <Row>
                <Col sm={1} className="column-elements">
                  <Form.Check
                    type="checkbox"
                    checked={item.status}
                    onChange={(e) => {
                      setTodo(
                        todo.filter((obj) => {
                          if (obj.id === item.id) {
                            obj.status = e.target.checked;
                          }
                          return obj;
                        })
                      );
                    }}
                  />
                </Col>
                <Col sm={10} className="todo-list">
                  <span
                    style={{
                      textDecoration:
                        item.status === true ? "line-through" : "",
                    }}
                  >
                    {item.text}
                  </span>
                </Col>
                <Col sm={1} className="column-elements">
                  <Button
                    variant="light"
                    disabled={item.status === true}
                    onClick={() => deleteHandler(key)}
                    className="button-style"
                  >
                    <AiFillDelete />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </Container>
  );
};

export default Todo;
