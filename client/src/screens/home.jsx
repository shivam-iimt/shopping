import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import Message from '../components/message'
import { listProducts} from '../redux/actions/productAction'

import { Row, Col,Spinner } from "react-bootstrap";
import ProductScreen from "./productscreen";
const Home = () => {
  const dispatch=useDispatch()
  const productList=useSelector(state=>state.productList)

  const {loading,error,products}=productList
  useEffect(() => {
  dispatch(listProducts())
  }, [dispatch]);
  
 

  return (
    <>
      <Row>
        {loading?<Spinner style={{ height: "8rem", width: "8rem" }} className="d-block m-auto" animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>:error?<Message value='danger' >{error}</Message>:
        products.map((product) => (
          <Col  key={product._id} md={3}>
            <ProductScreen product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
