import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
function Header() {

  const userLogin = useSelector(state => state.userLogin) //prende le informazioni dell'utente dallo store
  const { userInfo } = userLogin

  const dispatch = useDispatch()

  const logoutHandler = () => {
     dispatch(logout())
  }

  return (
   <header>
     <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>

       <LinkContainer to='/'>
          <Navbar.Brand>Proshop</Navbar.Brand>
       </LinkContainer>


            
           
           

           
          
      </Container>
    </Navbar>
   </header>
   
  )
}

export default Header