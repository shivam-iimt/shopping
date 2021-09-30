import React,{useEffect} from 'react'
import {Button,Row,Col,ListGroup,Spinner,Image,Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {getOrderDetails} from '../redux/actions/order/orderDetailsAction'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/message'


const OrderScreen = ({match}) => {
    const orderId=match.params.id
    const dispatch = useDispatch()
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;

    if(!loading){
        const addDecimal=(num)=>{
            return(Math.round(num*100)/100).toFixed(2);
        }
        order.itemsPrice = addDecimal(
          order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
        );
    }

    useEffect(()=>{
        dispatch(getOrderDetails(orderId)
            )
    },[dispatch,orderId])
    return (
        loading ?<Spinner
        style={{ height: "8rem", width: "8rem" }}
        className="d-block m-auto"
        animation="border"
        role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>:error ? <Message variant="danger">{error}</Message>:
            
            <>
            <h2>Order {order._id}</h2>
            <Row>
                <Col md={8}>
                    <ListGroup.Item variant="flush">
                        <h2>Shipping</h2>
                        <p><strong>Name : </strong>{order.user.name}</p>
                        <p><strong>Email : </strong>{order.user.email}</p>
                        <p>
                <strong>Address : </strong>
                {order.shippingAddress.address}&nbsp;
                {order.shippingAddress.city}&nbsp;
                {order.shippingAddress.postalcode}&nbsp;
                {order.shippingAddress.country}&nbsp;
              </p>
              {order.isDelivered? <Message variant="success">Delivered {order.paidAt}</Message>: <Message variant="danger" >Not Delivered</Message> }
                    </ListGroup.Item>
                    <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>{order.paymentMethod} </strong>
              </p>
              {order.isPaid ? <Message variant="success">Paid on {order.paidAt}</Message>: <Message variant="danger" >Not Paid</Message> }
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Your cart is empty!!!</Message>
              ) : (
                <ListGroup variant="flux">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty}X ${item.price}=${(item.price*item.qty).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                     ))}
                     </ListGroup>
                   )}
                   </ListGroup.Item>

                </Col>
            </Row>
        </>
    )
}

export default OrderScreen
