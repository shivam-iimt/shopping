import React,{useState} from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import FormContainer from '../components/formContainer'
import saveShippingAddress from '../redux/actions/cart/cartShippingAction.js'
import Breadcrumbs from '../components/Breadcrumbs'

const ShippingScreen = ({history}) => {
   const dispatch=useDispatch();

    const cart=useSelector(state=>state.cart)
    const {shippingAddress}=cart

    const [address,setAddress]=useState(shippingAddress.address)
    const[city,setCity]=useState(shippingAddress.city)
    const [postalcode,setPostalcode]=useState(shippingAddress.postalcode)
    const [country,setCountry]=useState(shippingAddress.country)

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(saveShippingAddress({address,city,postalcode,country}))
        history.push('/payment'); 

    }
    return (
        <>
            <FormContainer>
                <Breadcrumbs step1 step2/>
                <Form onSubmit={ submitHandler }>
                    <Form.Group controlId='address'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" required placeholder="Enter Your Address" value={address} onChange={e=>setAddress(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='address'>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required placeholder="Enter Your City" value={city} onChange={e=>setCity(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='address'>
                        <Form.Label>Postalcode</Form.Label>
                        <Form.Control type="text" required placeholder="Enter Your Postalcode" value={postalcode} onChange={e=>setPostalcode(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId='address'>
                        <Form.Label>Country</Form.Label>
                        <Form.Control type="text" required placeholder="Enter Your Country" value={country} onChange={e=>setCountry(e.target.value)}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="success">Continue</Button>
                </Form>
            </FormContainer>
        </>
    )
}

export default ShippingScreen
