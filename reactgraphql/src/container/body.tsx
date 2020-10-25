import React, { Component, useState } from "react";
import { createHttpLink, InMemoryCache, ApolloClient, gql,useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import  _ from 'lodash';
import {
  Container
} from "reactstrap";
import { Link } from "react-router-dom";



const GET_DOGS = gql`
query {
  viewer {
    login
    name
    id
    repositories(first: 100){
      totalCount
        nodes{
            name
        }
        pageInfo{
            hasNextPage
        }
    }
   }
}
`;


function Body() {
  const [datas, setdata] = useState(Object);
  const [status, setstatus] = useState(false);
  

  const { loading, error, data } = useQuery(GET_DOGS, {
  });

  if(!loading)
  {
      if(!status)
      {
          setstatus(true)
          let json = JSON.parse(JSON.stringify(data))
          setdata(json.viewer)
      }
  }
      return (
        
       <div>
        {loading ? <p>loading</p> : 
        (<div>
        <p> no loading {datas.login}</p>

        <p> no loading {datas.login}</p>
        </div>)
        
        
        }
       </div>
      );
}



export default Body;