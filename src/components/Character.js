// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledNames = styled.div`

display: flex;
flex-direction: column;
margin-top: 15px;
margin-bottom: 50px;



div {
    background-color: white;
    border: 2px solid;
    margin: 20px 100px;
    font-size: 2em;
    padding: 8px 0px;

    transition: all 0.2s ease-in-out;
&:hover {
    transition: all 0.2 ease-in-out;
    background-color: black;
    color: white;
    }  
}

`

const CharacterName = props => {
    const {characters} = props 
    


    return (
        <StyledNames>
          {characters.map((id, index) => {
               return <div key={index}> {id.name} </div>  
           })}
            
        </StyledNames>
    
            
  )
}

export default CharacterName;