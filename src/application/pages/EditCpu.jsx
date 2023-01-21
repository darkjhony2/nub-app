import { Grid, Paper, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const EditCpu = () => {

    let cpuSelected = useSelector((state) => state.cpu.cpu)
    const [cpu, setCpu] = useState(null);

    useEffect(() => {
        setCpu(cpuSelected)
    }, [])
    

    return (
        <Grid container >
            <Grid item mt={4} direction={'row'} justifyContent={'center'} alignItems={'center'} container>
                <Grid className="header__title" item xs={7}>
                    <Typography variant="h3" align={'center'}>Editing CPU: {cpu ? cpu.brand + ' ' + cpu.model : ''}</Typography>
                </Grid>
            </Grid>
            <Grid mt={4} item container xs={12}>
                <Grid padding={2} item xs={6} component={Paper} direction={'row'} container >
                    <Grid item xs={6} direction={'row'} >
                        <TextField value={cpu ? cpu.brand : ''} required label="Brand"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField value={cpu ? cpu.model : ''} required label="Model" />
                    </Grid>
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </Grid>
    )
}
