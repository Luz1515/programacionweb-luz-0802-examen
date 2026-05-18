import { useState } from "react";

import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Grid,
  Paper,
  Typography
} from "@mui/material";

export default function Crud() {

  const [tab, setTab] = useState(0);

  const cambiarTab = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Box p={3}>

      <Typography
        variant="h4"
        mb={3}
        fontWeight="bold"
        color="primary"
      >
        Crud
      </Typography>

      {/* SUBMENÚ */}
      <Paper
        sx={{
          mb: 4,
          backgroundColor: "#e3f2fd",
          borderRadius: 3
        }}
      >
        <Tabs
          value={tab}
          onChange={cambiarTab}
          centered
          sx={{
            "& .MuiTab-root": {
              color: "black",
              fontWeight: "bold"
            }
          }}
        >
          <Tab label="Altas" />
          <Tab label="Consultas" />
          <Tab label="Actualizaciones" />
          <Tab label="Eliminación" />
        </Tabs>
      </Paper>

      {/* ÁREA DE TRABAJO */}
      <Paper
        sx={{
          p: 4,
          backgroundColor: "#f5f7fa",
          borderRadius: 3
        }}
      >

        {/* ALTAS */}
        {tab === 0 && (
          <>
            <Typography
              variant="h6"
              mb={3}
              color="black"
              fontWeight="bold"
              color="primary"
            
            >
              Alta de Producto
            </Typography>

            <Box
              display="flex"
              flexDirection="column"
              width="40%"
            >
              <TextField
                fullWidth
                label="ID"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Nombre"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Precio"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Cantidad"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Categoría"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Marca"
                sx={{ mb: 3 }}
              />

              <TextField
                fullWidth
                label="Descripción"
                sx={{ mb: 4 }}
              />

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1976d2",
                  fontWeight: "bold",
                  borderRadius: 2,
                  padding: 1.5,
                  width: "40%"
                }}
              >
                Aceptar
              </Button>

            </Box>
          </>
        )}

        {/* CONSULTAS */}
        {tab === 1 && (
          <>
            <Typography
              variant="h6"
              mb={3}
              color="black"
              fontWeight="bold"
              color="primary"
            >
              Consulta de Productos
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="ID" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Nombre" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Categoría" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Marca" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Descripción" />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained">
                  Buscar
                </Button>
              </Grid>

            </Grid>
          </>
        )}

        {/* ACTUALIZACIONES */}
        {tab === 2 && (
          <>
            <Typography
              variant="h6"
              mb={3}
              color="black"
              fontWeight="bold"
              color="primary"
            >
              Actualización de Productos
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="ID" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Nombre" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Precio" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Cantidad" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Descripción" />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained">
                  Actualizar
                </Button>
              </Grid>

            </Grid>
          </>
        )}

        {/* ELIMINACIÓN */}
        {tab === 3 && (
          <>
            <Typography
              variant="h6"
              mb={3}
              color="black"
              fontWeight="bold"
              color="primary"
            >
              Eliminación de Productos
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="ID" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Nombre" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Categoría" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField fullWidth label="Marca" />
              </Grid>

              <Grid item xs={12}>
                <TextField fullWidth label="Motivo" />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="error"
                >
                  Eliminar
                </Button>
              </Grid>

            </Grid>
          </>
        )}

      </Paper>

    </Box>
  );
}