import { Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as cpuApi from '../../api/cpuApi';
import { fetchCpus, selectCpu } from "../../store/slice/cpus";

export default function Home() {

    const dispatch = useDispatch()
    const cpus = useSelector((state) => state.cpu.cpus)
    const navigate = useNavigate()

    useEffect(() => {
        handleFetchCpus()
    }, [])

    const handleFetchCpus = async () => {
        let resp = await cpuApi.getAll()
        dispatch(fetchCpus(resp))
    }

    const handleSelectCpu = (cpu) => {
        dispatch(selectCpu(cpu))
        navigate('/edit/' + cpu.id)
    }

    return (
        <Grid container>
            <Grid mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} container>
                <Grid className="header__title" item xs={4}>
                    <Typography variant="h3" align={'center'}>Available CPU List</Typography>
                </Grid>
            </Grid>
            <Grid mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} container>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow style={{ backgroundColor: 'gray' }}>
                            <TableCell>Brand</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Socket</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {cpus.map((cpu) => (
                            <TableRow hover
                                className="table__body"
                                key={cpu.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                onClick={e => handleSelectCpu(cpu)}
                            >
                                <TableCell component="th" scope="row">
                                    {cpu.brand}
                                </TableCell>
                                <TableCell>{cpu.model}</TableCell>
                                <TableCell>{cpu.socket.name}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    )
}
