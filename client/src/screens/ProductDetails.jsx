import React, { useEffect, useState } from "react";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import "./productDetails.css";
import { singleProduct } from "../redux/actions/product/singleProductAction";
import {
  ListGroup,
  Row,
  Col,
  Container,
  ListGroupItem,
  Button,
  Image,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import Rating from "../components/Rating";
const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    console.log();
    dispatch(singleProduct(id));
  }, [dispatch, match]);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [Qty, setQty] = useState(0);
  const [Stock, setStock] = useState(0);
  const Decrement = () => {
    if (Qty > 0) {
      setQty(Qty - 1);
    }
  };

  const Increment = () => {
    setQty(Qty + 1);
  };
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${Qty}`);
  };
  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> GO BACK
      </Link>

      <Row>
        <Col>
          {loading ? (
            <Spinner
              style={{ height: "8rem", width: "8rem" }}
              className="d-block m-auto"
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : error ? (
            <Message value="danger">{error}</Message>
          ) : (
            <Container>
              <Row>
                <Col md={5}>
                  <Image src={product.image} alt={product.name} fluid rounded/>
                </Col>
                <Col md={3}>
                  <ListGroup>
                    <ListGroupItem>
                      <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Rating
                        value={product.numReviews}
                        text={`${product.rating} Reviews`}
                      />
                    </ListGroupItem>
                    <ListGroupItem>Price : ${product.price}</ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <ListGroup>
                    <ListGroupItem>
                      <Row>
                        <Col md={4}>Status : </Col>
                        <Col>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out of Stock"}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Row>
                        <Col md={3}>Qty : </Col>
                        <Col>
                          {product.countInStock > 0 ? (
                            <div className="input-group  quantity-input mb-3 ml-5 mx-4">
                              <div className="input-group-prepend">
                                <button
                                  className="btn btn-outline-secondary p-3 inc-dec-btn"
                                  type="button"
                                  onClick={Decrement}
                                >
                                  -
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control p-2 text-center"
                                value={Qty}
                                readOnly
                                placeholder=""
                                aria-label=""
                                aria-describedby="basic-addon1"
                              />
                              <div className="input-group-append">
                                <button
                                  className="btn btn-outline-secondary p-3 inc-dec-btn"
                                  type="button"
                                  onClick={() => {
                                    setStock(product.countInStock);

                                    if (Qty < Stock) {
                                      setQty(Qty + 1);
                                    }
                                  }}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          ) : (
                            "Out of Stock"
                          )}
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                      <Button
                        className="btn-block"
                        type="button"
                        disabled={Qty<=0}
                        onClick={addToCartHandler}
                      >
                        Add to cart
                      </Button>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
