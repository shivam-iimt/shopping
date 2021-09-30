import React,{useState,useEffect} from 'react'
import {Link }from 'react-router-dom'
import {Form,Button,Row,Col,Spinner} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import Message from '../components/message'
import { getUserDetails } from '../redux/actions/user/userDetailsAction'
import {userUpdateProfile} from '../redux/actions/user/userUpdateAction'

const ProfileScreen = ({location,history}) => {
         const[name,setName]=useState("")
         const[email,setEmail]=useState("")
         const[password,setPassword]=useState("")
         const[cpassword,setcPassword]=useState("")
         const[message,setmessage]=useState()
        
         const submitHandler=(e)=>{
             e.preventDefault()
             if(password===cpassword){

                 dispatch(userUpdateProfile({id:user._id,name,email,password}))
             }
             else{
                setmessage("Password do not match")
             }
         }
   
         const dispatch = useDispatch();
         const userDetails = useSelector((state) => state.userDetails);
         const { loading, error, user } = userDetails;
         const userLogin = useSelector((state) => state.userLogin);
         const { userInfo } = userLogin;
        const userUpdate=useSelector((state)=>state.userUpdateProfile)
        const {success}=userUpdate

        useEffect(() => {
            if(!userInfo){
                history.push('/login');
            }
            else{
                if(!user.name){
                    dispatch(getUserDetails("profile"));
                }
                else{
                    setName(user.name)
                    setEmail(user.email)
                }
            }
        }, [history,userInfo,user,dispatch])


    return (
        <>
          <Row>
              <Col md={3}>
                  <h1>Update Information</h1>
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
            {success&&<Message variant="success">Profile Updated...</Message>}
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
                    <Button type="submit" variant="success">Update</Button>
                </Form>
              </Col>
              <Col md={9}>
                  <h1>My Orders</h1>
              </Col>
              </Row> 
        </>
    )
}

export default ProfileScreen
