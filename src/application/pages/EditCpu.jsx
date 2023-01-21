import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import * as socketApi from "../../api/socketApi"
import * as cpuApi from '../../api/cpuApi';
import { fetchSockets } from "../../store/slice/sockets/thunks"
import { selectCpu } from "../../store/slice/cpus"

export const EditCpu = () => {

    let cpuSelected = useSelector((state) => state.cpu.cpu)
    const [cpu, setCpu] = useState(null);
    const [edit, setEdit] = useState(false);
    const [open, setOpen] = useState(false);
    const { id } = useParams()
    const sockets = useSelector((state) => state.socket.sockets)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGetCpuById = async () => {
        let resp = await cpuApi.getById(id);
        setCpu(resp);
    }

    useEffect(() => {
        setCpu(cpuSelected)
        handleFetchSockets()
        if (cpu == null) {
            handleGetCpuById()
        }
    }, [])

    const handleFetchSockets = async () => {
        let resp = await socketApi.getAll()
        dispatch(fetchSockets(resp))
    }

    const handleBack = () => {
        dispatch(selectCpu(null));
        navigate('/')
    }

    const handleChange = (e) => {
        setCpu({
            ...cpu,
            [e.target.name]: e.target.value,
        });
    };

    const handleSocketChange = (socket) => {
        if (edit) {
            setCpu({
                ...cpu,
                socket: socket,
            });
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = async() => {
        let resp = await cpuApi.edit(cpu);
        alert(resp);
        navigate('/');
    }

    const handleDelete = async() => {
        let resp = await cpuApi.deleteCpu(id);
        alert(resp);
        navigate('/')
    }

    return (
        <Grid container >
            <Grid item mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} container>
                <Grid className="header__title" item xs={4}>
                    <Typography variant="h3" align={'center'}>{cpu ? cpu.brand + ' ' + cpu.model : ''}</Typography>
                </Grid>
            </Grid>
            <Grid item mt={4} container>
                <Grid item xs={6} >
                    <Grid item xs={1} marginLeft={14}>
                        <Button onClick={e => handleBack()} color="success" variant="contained" >Back</Button>
                    </Grid>
                </Grid>
                <Grid item xs={6} justifyContent={'end'} container>
                    {
                        edit ?
                            <>
                                <Grid item xs={1} marginRight={4}>
                                    <Button onClick={handleEdit} color="success" variant="contained">Save</Button>
                                </Grid>
                                <Grid item xs={1} marginRight={17}>
                                    <Button variant="contained" color="error" onClick={e => setEdit(false)}>Cancel</Button>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid item xs={1} marginRight={4}>
                                    <Button variant="contained" onClick={e => setEdit(true)}>Edit</Button>
                                </Grid>
                                <Grid item xs={1} marginRight={17}>
                                    <Button color="error" variant="contained" onClick={e => setEdit(true)}>Delete</Button>
                                </Grid>
                            </>
                    }
                </Grid>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"Do you want to delete this cpu?"}
                    </DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ e => {handleClose(); handleDelete()}} autoFocus>Ok</Button>
                        <Button onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
            <Grid mt={8} item container xs={12} direction={'row'} justifyContent={'center'} alignItems={'center'}>
                <Grid className="grid__paper" padding={3} item xs={5} component={Paper} direction={'row'} container >
                <Grid item xs={6} marginBottom={2}>
                        <Typography variant="h4">CPU</Typography>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="brand" value={cpu ? cpu.brand : ''} required label="Brand" disabled={!edit} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="model" value={cpu ? cpu.model : ''} required label="Model" disabled={!edit} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container mt={2}>
                        <Grid item xs={6}>
                            <TextField name="socket" value={cpu ? cpu.socket.name : ''} required label="Socket" disabled />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="clockSpeed" value={cpu ? cpu.clockSpeed : ''} type={'number'} required label="Clock Speed" disabled={!edit} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container mt={2}>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="numberOfCores" value={cpu ? cpu.numberOfCores : ''} type={'number'} required label="Number Of Cores" disabled={!edit} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="numberOfThreads" value={cpu ? cpu.numberOfThreads : ''} type={'number'} required label="Number Of Threads" disabled={!edit} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container mt={2}>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="tdp" value={cpu ? cpu.tdp : ''} type={'number'} required label="TDP (Thermal Design Power)" disabled={!edit} />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField onChange={e => handleChange(e)} name="price" value={cpu ? cpu.price : ''} type={'number'} required label="Price" disabled={!edit} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="grid__paper"  marginLeft={4} padding={3} item xs={5} component={Paper} direction={'row'} container >
                    <Grid item xs={6} marginBottom={2}>
                        <Typography variant="h4">Sockets</Typography>
                    </Grid>
                    <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow style={{ backgroundColor: 'gray' }}>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sockets.map((socket) => (
                                <TableRow hover
                                    className="table__body"
                                    key={socket.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    onClick={e => handleSocketChange(socket)}
                                >
                                    <TableCell component="th" scope="row">
                                        {socket.name}
                                    </TableCell>
                                    <TableCell>{socket.description}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Grid>
    )
}
