import React, {useState } from "react";
import ReactDOM from 'react-dom';
import { VictoryPie } from 'victory';
import {gql,useQuery } from '@apollo/client';
import { Container, Row, Col,Media } from "reactstrap";
import '../allstyle.css';
import _ from 'lodash';


const GET_DOGS = gql`
query {
  viewer {
    login
    name
    id
    avatarUrl
    email
    createdAt

    followers {
      totalCount
    }
    following {
      totalCount
    }
    
    commitComments {
      totalCount
    }

    repositories(first: 100){
      totalCount
        nodes{
          defaultBranchRef {
            target {
                ... on Commit {
                    history {
                        totalCount
                    }
                }
            }
        }
          languages (first: 100) {
            nodes{
                name
                color
            }
        }
          description
          name
        }
    }
    repository(name: "") {
      description
      name
      nameWithOwner
      openGraphImageUrl
      
      object {
        id
      }
    }
   }
}
`;


function Body() {
  const [datas, setdata] = useState(Object);
  const [status, setstatus] = useState(false);
  const [vartest, getvartest] = useState(Object)
  const [varrepos, getvarrepos] = useState(Object)
  const [follower, getfollower] = useState(Object)
  const [following, getfollowing] = useState(Object)
  const [repositories, getrepositories] = useState(Object)
  const [chartData, setchartData] = useState(Object)
  const result:any = [
    {quarter: "javascript", earnings: 13000},
    {quarter: "php", earnings: 16500},
    {quarter: "typescript", earnings: 14250},
    {quarter: "sql", earnings: 19000},
    {quarter: "html", earnings: 19000},
    {quarter: "css", earnings: 19000}
  ];

  const tablague :any = [];

  const { loading, error, data } = useQuery(GET_DOGS, {
  });

  if(!loading)
  {
      if(!status)
      {
          setstatus(true)
          let json = JSON.parse(JSON.stringify(data))
          console.log('json:', json.viewer)
          getvartest(json.viewer.repositories.totalCount)
          getrepositories(json.viewer.repositories)
          getvarrepos(json.viewer.repositories.nodes[0].name)
          getfollower(json.viewer.followers.totalCount)
          getfollowing(json.viewer.following.totalCount)
          setdata(json.viewer)
          getrepositories(json.viewer.repositories)
          for(let resultats of json.viewer.repositories.nodes ){
            for(let finalresult of resultats.languages.nodes ){
              console.log('finalresult:', finalresult)
              tablague.push(finalresult.name)
              
            }
          }
          setchartData(tablague.sort())
      }
  }

  
      return (
        
       <div>
         
        {loading ? <p>loading</p> : 
        (<Container>
        <Row>
        <Col><img  className="img" width="100%" src={datas.avatarUrl} alt="Card image cap" /></Col>
        </Row>

      <Row>
        <Col><label className="texte">name  :  {datas.login}</label></Col>
      </Row>
      <Row>
        <Col><label className="">commits  :  {vartest}</label></Col>
        <Col><label className="">repos  :  {vartest}</label></Col>
        <Col><label className="">folowwers  :  {follower}</label></Col>
        <Col><label className="">folowering  :  {following}</label></Col>
      </Row>
      <hr className="my-2" />
      <Row>
        <Col>
        <br></br>
        <Media clasName="text-center" heading>
          Languages
        </Media>
        
        <VictoryPie 
        colorScale={["tomato", "orange", "gold", "cyan", "navy","black","cyan","yellow"]}
        innerRadius={50}
        style={{ labels: { fill: "black", fontSize: 12, fontWeight: "bold" } }}
        data={result}
        x="quarter"
        y="earnings"/>
        </Col>
          
      </Row>
      <hr className="my-2" />

      <Row>
      
        <Col>
        <Media clasName="text-center" heading>
          Nombres de repositories  { vartest}
  
        </Media>
        {chartData}
        </Col>
      </Row>


      


      
     </Container>)
         
      }
       </div>
      );
}



export default Body;