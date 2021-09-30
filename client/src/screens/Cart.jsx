import React, { useEffect, useState } from "react";
import Message from "../components/message";
import { useDispatch, useSelector } from "react-redux";
import "./productDetails.css";
import { Link } from "react-router-dom";
import { addCart,removeCart } from "../redux/actions/cart/cartAction";
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

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const Decrement = (id) => {
    cartItems.map((item, index)=>{
      if(item.product==id){
      if(item.qty===1||item.qty<=0){
        dispatch(removeCart(id))
      }
      else {
          dispatch(addCart(item.product, item.qty-1));
        }
      }
    })
  };

  const checkOut=()=>{
    history.push(`/shipping`)
  }

  const Increment = (id) => {
    cartItems.map((item, index)=>{
      if(item.qty<=item.countInStock){
        if(item.product==id){
          dispatch(addCart(item.product, item.qty+1));
        }
      }
      
    })
  };

  const removeFromCartHandler=(id)=>{
      dispatch(removeCart(id))
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is Empty ! <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, idx) => (
                <ListGroupItem key={idx}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>{item.price}</Col>
                    <Col>
                      {" "}
                      <div className="input-group  quantity-input mb-3 ml-5 mx-4">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-secondary p-3 inc-dec-btn"
                            type="button"
                            onClick={() =>   Decrement(item.product)
                            }
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control p-2 text-center"
                          value={item.qty}
                          readOnly
                          placeholder=""
                          aria-label=""
                          aria-describedby="basic-addon1"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary p-3 inc-dec-btn"
                            type="button"
                            onClick={() => Increment(item.product)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </Col>
                    <Col>
                    <Button type="button" variant="light" onClick={()=>removeFromCartHandler(item.product)}
                    >
                      <i className="fa fa-trash" style={{color:"#b8656d", fontSize:"1.5rem"}}></i>
                    </Button>
                    </Col>
                
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
                      <ListGroupItem>
                        <h2>
                          Sub Total ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) items
                        </h2>
                        
                      $
                       {cartItems.reduce((acc,item)=>acc+item.qty*item.price,0).toFixed(2)}
                        <Button type="button" className="btn-block" disabled={cartItems.length===0} onClick={checkOut}>Proceed to checkout</Button>
                      </ListGroupItem>
                    </Col>
      </Row>
    </>
  );
};

export default Cart;
