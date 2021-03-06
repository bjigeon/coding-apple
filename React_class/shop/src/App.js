import React, { useState } from "react";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown, Jumbotron, Button } from "react-bootstrap";
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      {/* <a class="btn btn-primary">Link</a> */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link> */}
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Jumbotron className='background'>
      <h1>20% Season Off</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </Jumbotron> */}

      <Switch>
        <Route exact path="/">
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling extra
              attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route path="/:id">
          <div>아무거나 적엇을때 이거 보여줌</div>
        </Route>
      </Switch>

      {/* <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%"/>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].content} & {shoes[0].price}</p>
        </div>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
        </div>
        <div className='col-md-4'>
          <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>  
        </div> 


        <Product/>
        {
          shoes.map((a,i) => {
            return <Card shoes ={shoes[i]} i={i} key={i}/>
          })
        }
        
        <Card shoes={shoes[0]}/>
        <Card shoes={shoes[1]}/>
        <Card shoes={shoes[2]}/>


        
        {
          shoes.map(function(txt,i){
            return(
              <div className='col-md-4' key={i}>
                <img src = {`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="100%"/>
                  <h4>{shoes[i].title}</h4>
                  <p>{shoes[i].content} & {shoes[i].price}</p>  
              </div>
            );
          })
        }
        

      </div>

    </div> */}
    </div>
  );
}

function Product() {
  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="col-md-4">
      <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      <h4>{shoes[0].title}</h4>
      <p>
        {shoes[0].content} & {shoes[0].price}
      </p>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
