import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions' 
 
function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product} = productDetails
    /* const [product, setProduct] = useState([]) */

    useEffect(() => {
        dispatch(listProductDetails(match.params.id)) //request dei dettagli del prodotto PARTE SUBITO & SEMPRE
/* 
       async function fetchProduct() {
        const { data } = await axios.get(`/api/products/${match.params.id}`)
        setProduct(data)
       }

       fetchProduct() */
    }, [dispatch, match])


    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }


    /* const product = products.find((p) => p._id === match.params.id) */
  return (
    <div>

       <Link to='/' className='btn btn-light my-3'>Go Back</Link>
       {loading ?
            <Loader/>
            : error
            ? <Message variant='danger' >{error}</Message>   
            : (

            <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                     
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </ListGroup.Item>

                    <ListGroup.Item>
                        price: ${product.price}
                    </ListGroup.Item>

                    <ListGroup.Item>
                       description: {product.description}
                    </ListGroup.Item>

                </ListGroup>
            </Col>


            <Col md={3}>
                <Card>
                 <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row >
                            <Col>Price:</Col>
                            <Col>
                             <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col>Status :</Col>
                            <Col>
                            {/* se è maggiore di 0 "on stock" altrimenti "out of stock" */}
                                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    {product.countInStock > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col>Qty</Col>
                                <Col xs='auto' className='my-1'>
                                  <Form.Control
                                  as="select"
                                  value={qty}
                                  onChange={(e) => setQty(e.target.value)}
                                  >
                                    {
                                        [...Array(product.countInStock).keys()].map((x) => ( //keys ritorna un array con le pk degli oggetti es. [0,1,2]
                                         <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                         </option>
                                        ))//mappo una serie di tag options in cui è un numero dell'array di countInStock generato con keys()
                                    }
                                  </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}

                    <ListGroup.Item>
                        <Button 
                         onClick={addToCartHandler}
                         className='btn-block mx-3' 
                         disabled={product.countInStock === 0}
                         type='button'>Add to cart</Button>
                    </ListGroup.Item>
                 </ListGroup>
                </Card>
            </Col>
       </Row>
       ) }
       
       
    </div>
  )
}

export default ProductScreen