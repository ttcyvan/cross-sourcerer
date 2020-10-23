import React, { Component } from "react";
import '../';
import {
  Container,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    // fetch("http://localhost:4242/pokemons/")
    //   .then((response) => response.json())
    //   .then((alldata) => this.setState({data : alldata}));
  }


  render() {
      //console.log(this.state.data)
    return (
        <p>body</p>
    //   <div id="menu-outer">
    //     <hr className="my-6" />
    //     <Container className="themed-container" fluid="lg">
    //     <Row  className="table"> 
    //     {this.state.data.map((allpokemon)=>
    //       <Col  key={allpokemon.id} md={4} id="horizontal-list">
    //         <Card className="stylecard">
    //             <CardImg
    //             top
    //             width="100%"
    //             src={allpokemon.sprite}
    //             alt="Card image cap"
    //             />
    //             <CardBody>
    //             <CardTitle className="gras">{allpokemon.name}</CardTitle>
    //             <CardSubtitle className="grastaille">Taille: {allpokemon.height}</CardSubtitle>
                
    //             <a href ={`/${allpokemon.name}`}><Button>Details</Button></a>
    //             </CardBody>
    //         </Card>
    //       </Col>
    //     )}
    //      </Row>
    //      </Container>
        
    //   </div>
    );
  }
}

export default Body;