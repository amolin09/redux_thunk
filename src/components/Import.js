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

import { MoreVert as MoreVertIcon } from '@material-ui/icons'

const Import = (props) => {
const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    props.deleteMake(anchorEl.getAttribute("makeid"));
    handleClose();
  };


    return (
        <>
         <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
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
              {props.makes.map((make) => (
                <TableRow
                  key={make.MakeId}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {make.MakeId}
                  </TableCell>
                  <TableCell>{make.MakeName}</TableCell>
                  <TableCell align="right">
                    <IconButton makeid={make.MakeId} onClick={handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
        </Container>
        </>
    )
}

export default Import