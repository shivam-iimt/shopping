import React,{useState,useEffect} from 'react'
import {Link }from 'react-router-dom'
import {Form,Button,Row,Col,Spinner} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/message'
import { login } from '../redux/actions/userAction'
import FormContainer from '../components/formContainer'
const Userlogin = ({location,history}) => {
         const[email,setEmail]=useState()
         const[password,setPassword]=useState()
         const submitHandler=(e)=>{
             e.preventDefault()
             dispatch( login(email,password))
         }
        const redirect=location.search ? location.search.split("=")[1]:"/";
        const dispatch=useDispatch()
        const userlogin=useSelector(state=>state.userLogin)
        const {loading,error,userInfo}=userlogin

        useEffect(() => {
            if(userInfo){history.push(redirect)}
        }, [history,error,redirect])


    return (
        <>
            <FormContainer>
                <h1>SIGN IN</h1>
                {error&&<Message variant="danger">{error}</Message>}
                {loading&&<Spinner
              style={{ height: "8rem", width: "8rem" }}
              className="d-block m-auto"
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="success">SIGN IN</Button>
                </Form>
                <Row><Col>
                New customer ? <Link to='/register' >Register</Link>
                </Col></Row>

            </FormContainer>
        </>
    )
}

export default Userlogin
