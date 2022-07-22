import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chart from './Chart'



const Report = ({ data }) => {
    return (
        <div className='report-container'>
            <h5 style={{ textAlign: 'center', margin: '2px', borderBottom: '2px solid blue' }}>{data.name}</h5>
            <Chart data={data} />
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Inspection Year</TableCell>
                            <TableCell align="right">Minimum Measured Thickness (mm)</TableCell>                          
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.inspections && data.inspections.map((insp) => (
                            <TableRow
                                key={insp.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {insp.year}
                                </TableCell>
                                <TableCell align="right">{insp.tmm}</TableCell>                               
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Report