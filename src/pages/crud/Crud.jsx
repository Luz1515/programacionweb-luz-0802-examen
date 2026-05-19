import { useState } from "react";

import {
  Box,
  Tabs,
  Tab,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
 TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

export default function Crud() {

  // CONTROL DE PESTAÑAS
  const [tab, setTab] = useState(0);

  const cambiarTab = (event, newValue) => {
    setTab(newValue);
  };

  // DATOS PRECARGADOS
  const [producto, setProducto] = useState({
    id: "1",
    nombre: "Laptop HP",
    precio: "15000",
    cantidad: "5",
    categoria: "Tecnología",
    marca: "HP",
    descripcion: "Laptop para oficina"
  });

  // MANEJO DE CAMBIOS
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Box p={3}>

      {/* TÍTULO */}
      <Typography
        variant="h4"
        mb={3}
        fontWeight="bold"
        color="primary"
      >
        CRUD de Productos
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

      {/* CONTENIDO */}
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
                required
              />

              <TextField
                fullWidth
                label="Nombre"
                sx={{ mb: 3 }}
                required
              />

              <TextField
                fullWidth
                label="Precio"
                sx={{ mb: 3 }}
                required
              />

              <TextField
                fullWidth
                label="Cantidad"
                sx={{ mb: 3 }}
                required
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
                multiline
                rows={3}
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
              fontWeight="bold"
              color="primary"
            >
              Consulta de Productos
            </Typography>

            {/* CAMPOS */}
            <Grid container spacing={2} mb={4}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="ID"
                  name="id"
                  value={producto.id}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={producto.nombre}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Categoría"
                  name="categoria"
                  value={producto.categoria}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Marca"
                  name="marca"
                  value={producto.marca}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="descripcion"
                  value={producto.descripcion}
                  onChange={handleChange}
                  multiline
                  rows={3}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained">
                  Buscar
                </Button>
              </Grid>

            </Grid>

            {/* TÍTULO TABLA */}
            <Typography
              variant="h6"
              mb={2}
              fontWeight="bold"
              color="secondary"
            >
              Consultas Simuladas
            </Typography>

            {/* TABLA */}
            <TableContainer component={Paper}>
              <Table>

                <TableHead>
                  <TableRow sx={{ backgroundColor: "#1976d2" }}>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      ID
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Nombre
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Precio
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Cantidad
                    </TableCell>

                    <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                      Categoría
                    </TableCell>

                  </TableRow>
                </TableHead>

                <TableBody>

                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Laptop HP</TableCell>
                    <TableCell>$15,000</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>Tecnología</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Mouse Logitech</TableCell>
                    <TableCell>$350</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell>Accesorios</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Teclado Redragon</TableCell>
                    <TableCell>$900</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>Periféricos</TableCell>
                  </TableRow>

                </TableBody>

              </Table>
            </TableContainer>
          </>
        )}

        {/* ACTUALIZACIONES */}
        {tab === 2 && (
          <>
            <Typography
              variant="h6"
              mb={3}
              fontWeight="bold"
              color="primary"
            >
              Actualización de Productos
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="ID"
                  name="id"
                  value={producto.id}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={producto.nombre}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Precio"
                  name="precio"
                  value={producto.precio}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Cantidad"
                  name="cantidad"
                  value={producto.cantidad}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Categoría"
                  name="categoria"
                  value={producto.categoria}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Marca"
                  name="marca"
                  value={producto.marca}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Descripción"
                  name="descripcion"
                  value={producto.descripcion}
                  onChange={handleChange}
                  multiline
                  rows={3}
                />
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
              fontWeight="bold"
              color="primary"
            >
              Eliminación de Productos
            </Typography>

            <Grid container spacing={2}>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="ID"
                  name="id"
                  value={producto.id}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nombre"
                  name="nombre"
                  value={producto.nombre}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Categoría"
                  name="categoria"
                  value={producto.categoria}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Marca"
                  name="marca"
                  value={producto.marca}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Motivo"
                  multiline
                  rows={3}
                />
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