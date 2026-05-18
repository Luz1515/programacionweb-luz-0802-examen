import { Grid, Card, CardContent, Typography } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

export default function Equipo(){
    return (
        <PageContainer title="Integrantes del equipo de trabajo">
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                        <Typography variant="h6">Luz Nadia Flores Domínguez </Typography>
                        <Typography>Rol: Frontend</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                        <Typography variant="h6">Sindy Pineda Nieto</Typography>
                        <Typography>Rol: Backend</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>        
    )
}