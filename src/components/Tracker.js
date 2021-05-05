import { 
    Grid, 
    Container,
    Segment, 
    Form, 
    Table, 
    Input, 
    Button, 
    Header, 
    Icon
} from "semantic-ui-react"
import firebase from './firebase'
import { useEffect, useState } from "react"
import React from 'react'
import Navbar from "./Navbar";

const Tracker =() => {
    const [Date, setDate ] = useState("");
    const [aSmoke, setASmoke ] = useState("");
    const [aBrand, setBrand] = useState("");
    const [SmokingData, setSmokingData] = useState([]);

    useEffect(()=> {
        const firestore = firebase.database().ref("/SmokingInfo");
        firestore.on('value',(response)=>{
            const data = response.val();
            let SmokingInfo = [];
            for(let id in data){
                SmokingInfo.push ({
                    id:id,
                    Date:data[id].Date,
                    Smoked:data[id].Smoked,
                    Brand:data[id].Brand,

                })
            }
            setSmokingData(SmokingInfo);
        });
    },[]);

    const AddDB = () => {
        const firestore = firebase.database().ref("/SmokingInfo");
        let data = {
            Date: Date,
            Smoked: aSmoke,
            Brand: aBrand,
        };
        firestore.push(data);

    }
    const Delete =(id) => {
        const firestore = firebase.database().ref("/SmokingInfo").child(id);
        firestore.remove();
    };


    return (
        <>
          <Navbar />
        
    <Container style={{display:'center'}}>
        <h1>Track your smoking habits</h1>
        <Grid>
            <Grid.Row columns="1">
                <Grid.Column>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <label>Date</label>
                                <Input title ="Date" focus value={Date} onChange ={(e) =>{setDate(e.target.value);}}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Amount Smoked</label>
                                <Input title ="Smoked" focus value={aSmoke} onChange ={(e) =>{setASmoke(e.target.value);}} />
                            </Form.Field>
                            <Form.Field>
                                <label>Brand</label>
                                <Input title ="Brand" focus value={aBrand} onChange ={(e) =>{setBrand(e.target.value);}} />
                            </Form.Field>
                            <Form.Field>
                                <Button colour ="green" onClick={()=>{AddDB();}}
                                positive
                                >
                                   
                                    Add
                                    
                                </Button>
                       
                            </Form.Field>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns ="1">
                <Grid.Column>
                    {
                     SmokingData.length === 0 ? ( 
                        <Segment>
                            <Header>
                                oops! there is no data
                            </Header>
                        </Segment>
                        ) : (
                        <Segment>
                            <Table>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>Date</Table.HeaderCell>
                                        <Table.HeaderCell>Smoked</Table.HeaderCell>
                                        <Table.HeaderCell>Brand</Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                    
                                    </Table.Row>
                                </Table.Header>
                                {SmokingData.map((data) => {
                                    return(
                                        <Table.Body>
                                            <Table.Cell>{data.Date}</Table.Cell>
                                            <Table.Cell>{data.Smoked}</Table.Cell>
                                            <Table.Cell>{data.Brand}</Table.Cell>
                                            <Table.Cell>
                                                <Button color="red" onClick ={()=>{Delete(data.id)}}>
                                                    <Icon name ="delete"></Icon>Delete
                                                </Button>
                                            </Table.Cell>
                                        </Table.Body>
                                    );
                                })}
                
                            </Table>

                        </Segment>
                        )}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    </>
    );

    }
export default Tracker