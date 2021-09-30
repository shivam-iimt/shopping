import React,{useState,useEffect} from 'react'
import {Link }from 'react-router-dom'
import {Form,Button,Row,Col,Spinner} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/message'
import { register } from '../redux/actions/user/userRegisterAction'
import FormContainer from '../components/formContainer'

const UserRegister = ({location,history}) => {
         const[name,setName]=useState("")
         const[email,setEmail]=useState("")
         const[password,setPassword]=useState("")
         const[cpassword,setcPassword]=useState("")
         const[message,setmessage]=useState()
        
         const submitHandler=(e)=>{
             e.preventDefault()
             if(password===cpassword){

                 dispatch( register(name,email,password))
             }
             else{
                setmessage("Password do not match")
             }
         }
        const redirect=location.search ? location.search.split("=")[1]:"/";
        const dispatch=useDispatch()
        const userRegister=useSelector(state=>state.userRegister)
        const {loading,error,userInfo}=userRegister

        useEffect(() => {
            if(userInfo){history.push(redirect)}
        }, [history,userInfo,redirect])


    return (
        <>
            <FormContainer>
                <h1>Register</h1>
                {error&&<Message variant="danger">{error}</Message>}
                {loading&&<Spinner
              style={{ height: "8rem", width: "8rem" }}
              className="d-block m-auto"
              animation="border"
              role="status"
              >
                
              <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {message&&<Message variant="danger">{message}</Message>}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' value={name} placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' value={email} placeholder="Enter your email" onChange={(e)=>{setEmail(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' value={password} placeholder="Enter your password" onChange={(e)=>{setPassword(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control type='password' value={cpassword} placeholder="Confirm your password" onChange={(e)=>{setcPassword(e.target.value)}}></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="success">Register</Button>
                </Form>
                <Row><Col>
                Already have an account ? <Link to={redirect?`register?redirect=${redirect}`:"/regster"} >Signin</Link>
                </Col></Row>

            </FormContainer>
        </>
    )
}

export default UserRegister
