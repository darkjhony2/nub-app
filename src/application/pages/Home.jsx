import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import * as cpuApi from '../../api/cpuApi';

export default function Home() {

    const [cpus, setCpus] = useState([]);

    useEffect(() => {
        fetchCpus();
    }, [])

    const fetchCpus = async () => {
        let resp = await cpuApi.getCpus();
        setCpus(resp);
    }

    const handleSelectCpu = (cpu) => {

     }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h3" align={'center'}>Avaliable Cpu List</Typography>
            </Grid>
            <Grid mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} container >
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{backgroundColor: 'gray'}}>
                            <TableCell>Brand</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Socket</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cpus.map((cpu) => (
                            <TableRow hover
                                key={cpu.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {cpu.brand}
                                </TableCell>
                                <TableCell>{cpu.model}</TableCell>
                                <TableCell>{cpu.socket}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}
