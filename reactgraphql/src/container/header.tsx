  
import React,{Component} from "react";
import { Container, Jumbotron,CardHeader } from 'reactstrap';

class Header extends Component{
    render(){
      return (
        <div>
          <Jumbotron fluid>
            <Container fluid>
            <CardHeader tag="h3">GITHUB</CardHeader>
            </Container>
          </Jumbotron>
        </div>
      ); 
    }
}


export default Header;