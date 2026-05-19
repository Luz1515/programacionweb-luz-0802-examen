import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";

import juan from "../../assets/juan.png";
import luz from "../../assets/luz.png";
import syn from "../../assets/syn.png";

export default function Equipo() {
    return (
        <PageContainer title="Integrantes del equipo de trabajo">
            <Grid container spacing={3}>

                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="500"
                            image={luz}
                            alt="Luz Nadia"
                        />

                        <CardContent>
                            <Typography variant="h6">
                                Luz Nadia Flores Domínguez
                            </Typography>

                            <Typography>
                                <strong>No. Control:</strong> 2022150480327
                            </Typography>

                            <Typography>
                                <strong>Carrera:</strong> Ingeniería en Sistemas Computacionales
                            </Typography>

                            <Typography>
                                <strong>Correo institucional:</strong> 2022150480327@tesjo.edu.mx
                            </Typography>

                            <Typography>
                                <strong>Rol:</strong> Frontend
                            </Typography>

                            <Typography>
                                <strong>Descripción:</strong> Se encarga del desarrollo de la interfaz de usuario y la experiencia del cliente
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Juan Carlos */}
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="450"
                            image="/src/assets/juan.png"
                            alt="Juan Carlos"
                        />

                        <CardContent>
                            <Typography variant="h6">
                                Juan Carlos Albarrán Sánchez
                            </Typography>

                            <Typography>
                                <strong>No. Control:</strong> 2022150480011
                            </Typography>

                            <Typography>
                                <strong>Carrera:</strong> Ingeniería en Sistemas Computacionales
                            </Typography>

                            <Typography>
                                <strong>Correo institucional:</strong> 2022150480011@tesjo.edu.mx
                            </Typography>

                            <Typography>
                                <strong>Rol:</strong> Desarrollador Móvil
                            </Typography>

                            <Typography>
                                <strong>Descripción:</strong> Se encarga del desarrollo de la aplicación aplicando IA
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Sindy */}
                <Grid item xs={12} md={6}>
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="450"
                            image="/src/assets/sindy.png"
                            alt="Sindy"
                        />

                        <CardContent>
                            <Typography variant="h6">
                                Sindy Pineda Nieto
                            </Typography>

                            <Typography>
                                <strong>No. Control:</strong> 2022150480905
                            </Typography>

                            <Typography>
                                <strong>Carrera:</strong> Ingeniería en Sistemas Computacionales
                            </Typography>

                            <Typography>
                                <strong>Correo institucional:</strong> 2022150480905@tesjo.edu.mx
                            </Typography>

                            <Typography>
                                <strong>Rol:</strong> Backend
                            </Typography>

                            <Typography>
                                <strong>Descripción:</strong> Se encarga del desarrollo del servidor y la gestión de la base de datos.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </PageContainer>
    );
}