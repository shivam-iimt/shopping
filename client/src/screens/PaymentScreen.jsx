import React,{useState} from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import {paymentMethod} from '../redux/actions/cart/paymentAction.js'
import  Breadcrumbs  from '../components/Breadcrumbs'
import {useDispatch,useSelector} from 'react-redux'

const PaymentScreen = ({history}) => {
    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart
    if(!shippingAddress){
      history.push("/shipping")
    }
    const dispatch=useDispatch()
    
    const [payment,setPayment]=useState('paypal')

    const submitHandler=()=>{
        dispatch(paymentMethod(payment))
        history.push("/placeorder")
    }

    return (
        <>
            <Breadcrumbs step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as="legend">
                        Select Payment Method
                    </Form.Label>
                    <Col>
                    <Form.Check type="radio"
                    label="Paypal or Credit card"
                    name="payment" id="paypal"
                    value="paypal" checked
                    onChange={e=>setPayment(e.target.value)}></Form.Check>
                    <Form.Check type="radio"
                    label="stripe"
                    name="payment" id="stripe"
                    value="stripe" 
                    onChange={e=>setPayment(e.target.value)}></Form.Check>
                    </Col>
                </Form.Group>
                <Button type="submit" variant="success">Continue</Button>
            </Form>
        </>
    )
}

export default PaymentScreen
