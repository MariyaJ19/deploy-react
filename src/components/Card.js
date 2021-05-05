
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import Navbar from "./Navbar";

const Cards = () => (
  <>
   <Navbar />
  <Card.Group>
    <br></br>
    <h1> This is what people who have previously quit had to say: </h1>
  
    <Card>
      <Card.Content>
       
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Smoking free for 3 years </Card.Meta>
        <Card.Description>
         " i quit 3 years ago and my life has definitely improved. i feel less
          tired and stressed and my health has never been more better"
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>Smoke free for 3 months</Card.Meta>
        <Card.Description>
          " feeling like i have a second chance at life now that i have quit, 
          it gets easier the longer you stay smoke free"
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>10 years smoke free</Card.Meta>
        <Card.Description>
        quitting smoking was the best decision i have ever made,
         it no longer controls my life and i have been able to change my life around and improve my health
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
      </Card.Content>
      
    </Card>
    <Card>
      <Card.Content>
       
        <Card.Header> Benjamin T</Card.Header>
        <Card.Meta>quit smoking 2 years ago</Card.Meta>
        <Card.Description>
       was difficult to quit at first but its worth it 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
       
        <Card.Header>Jessica richards</Card.Header>
        <Card.Meta>quit smoking 5 years ago</Card.Meta>
        <Card.Description>
         it feels so difficult to quit but once you do the feeling is amazing, feeling healthier and healthier day by day
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
       
        <Card.Header>Francesca M</Card.Header>
        <Card.Meta>quit  1 years ago</Card.Meta>
        <Card.Description>
         best decision i have ever made!
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
       
      </Card.Content>
    </Card>
    
  </Card.Group>
  </>
)


export default Cards