import React, { useState } from 'react'
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table, TextField, Button} from '@material-ui/core'
import Chart from './Chart'
import  {db} from './firebase'


export default function TableChart () {
    const[subData, setSubData] = useState([]);
    const[finalData, setFinalData] = useState([]);
    

    function submitData(subData) {
        setFinalData(finalData=>[...finalData, subData]);
        setSubData(subData={});
           
         
        document.myform.reset();  
    }
    
    return (
        <div>
            <h1>table</h1>
            <form name ="myform">
                <TableContainer style = {{display:'top', justifyContent:''}}>
                    <Table style={{width:'80%', justifyContent:'top'}} size ="medium">
                        <TableHead>
                            <TableRow>
                                <TableCell><TextField value = {subData["sub"]} onChange={(e)=>setSubData({...subData, "sub" : e.target.value})} label ="date" margin="normal"  color="secondary" /></TableCell>
                                <TableCell><TextField value = {subData["sem"]} onChange={(e)=>setSubData({...subData, "sem" : e.target.value})} label ="no. smoked" margin="normal"  color="secondary" /></TableCell>
                                <TableCell><Button variant = "contained" onClick={()=> submitData(subData)}
                                color="primary"> Add </Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {finalData.map(data => (
                                <TableRow>
                                    <TableCell>{data.sub}</TableCell>
                                    <TableCell>{data.sem}</TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </form>
            <br/>
         <Chart data={finalData}/>
        </div>
    )
}
