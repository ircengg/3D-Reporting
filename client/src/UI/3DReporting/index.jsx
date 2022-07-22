import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getModels } from '../../Apis/models';
import ModalContainer from './ModalContainer';



function Models() {
  const [models, setModels] = useState([])

  useEffect(() => {
    (async () => {
      const models_ = await getModels();
      setModels(models_);
    })();
  }, [])
  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Model</TableCell>
            <TableCell align="right">Year Of fabrication</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {models.map((model) => (
            <TableRow
              key={model.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {model.name}
              </TableCell>
              <TableCell align="right">{model.year_of_fabrication}</TableCell>
              <TableCell align="right">
                <Link to={model.id}>View </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>);
}


export default () => {
  return (
    <Routes>
      <Route path='/' element={<Models />} />
      <Route path=':modelId' element={<ModalContainer />} />
    </Routes>
  )
}