import React from 'react'
import { 
    Button,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Container 
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component

    return (
        <Container>
            <h2>Count: {props.makes.length}</h2>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>

            <Table>
                <TableHead>
                    <TableCell>Id</TableCell>
                    <TableCell>Make</TableCell>
                    <TableCell>Vehicle Type</TableCell>
                    <TableCell>Actions</TableCell>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>{make.VehicleTypeName}</TableCell>
                            <DeleteIcon color="secondary"
                            onClick={() => props.removeMake(idx)}
                            />
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import