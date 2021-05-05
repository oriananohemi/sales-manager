import React, { useState, useEffect } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import Items from '../components/Items';
import { getMethods } from '../assets/services/getMethods';
import { createOrder } from '../assets/services/apiConnections';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  paper: {
    margin: "20px 0",
    padding: 20,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "20px 0",
    '& > *': {
      margin: theme.spacing(1),
      minWidth: 200,
    },
  },
  button: {
    margin: 20,
  },
}));

const Create = () => {
  const classes = useStyles();
  const emptyStateOrder = {
    sellStore: '',
    shippingMethod: '',
    orderNumber: '',
    buyerFullName: '',
    buyerPhoneNumber: '',
    buyerEmail: '',
    shippingAddress: '',
    shippingCity: '',
    shippingRegion: '',
    shippingCountry: '',
    productList: []
  }

  const emptyStateArticle = {
    id: '',
    name: '',
    qty: '',
    weight: ''
  }

  const [form, setForm] = useState(emptyStateOrder)
  const [open, setOpen] = useState(false);
  const [article, setArticle] = useState(emptyStateArticle);
  const [method, setMethods] = useState([]);

  useEffect(() => {
    getMethods().then(shipping => setMethods(shipping))
  }, [])

  const addProduct = () => {
    setArticle(emptyStateArticle)
    setForm((prevState) => ({...prevState, productList: prevState.productList.concat(article) }))
  }

 const handleSudmit = async (e) => {
  e.preventDefault()
  createOrder(form).then(res => {
    console.log(res)
    setTimeout(() => {
      window.location="/"
    }, 1000)
  })
    .catch((e) => {
      console.error(e)
    })
  }
  
  const handleArticleChange = (e) => {
    const id = Math.floor(Math.random() * (1000 - 1) + 1);
    setArticle((prevState)=> {
      return {...prevState, [e.target.name]: e.target.value, id}
    })
  }

  const handleFormChange = (e) => {
    setForm((prevState)=> {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <Button variant="contained" color="primary">Volver</Button>
      <ValidatorForm onSubmit={handleSudmit}>
      <Paper className={classes.paper} variant="outlined" square>
        <h2>Datos del Envio:</h2>
        <div className={classes.container}>
        <TextValidator errorMessages={["El campo es requerido"]} value={form.sellStore}  validators={['required']}  type="text" label="Tienda" name="sellStore" onChange={handleFormChange} />
        <FormControl className={classes.formInput}>
        <InputLabel htmlFor="grouped-native-select">Metodo de envio</InputLabel>
        <Select
          open={open}
          onClose={handleShow}
          onOpen={handleShow}
          value={form.shippingMethod} 
          onChange={handleFormChange}
          name="shippingMethod"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            method.map((element) => <MenuItem key={element.id} value={element.id}>{element.name}</MenuItem>)
          }
        </Select>
        </FormControl>
        <TextValidator errorMessages={["El campo es requerido"]} type="number" label="Numero de Orden" name="orderNumber" validators={['required']} value={form.orderNumber}  onChange={handleFormChange} />
        <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Nombre del comprador" name="buyerFullName" validators={['required']} value={form.buyerFullName}  onChange={handleFormChange} />
        <TextValidator errorMessages={["El campo es requerido"]} type="email" validators={['required', 'isEmail']} label="Correo electronico" validators={['required']} name="buyerEmail" value={form.buyerEmail} onChange={handleFormChange} />
        <TextValidator errorMessages={["El campo es requerido"]} type="number" label="Numero de telefono" name="buyerPhoneNumber" validators={['required']} value={form.buyerPhoneNumber} onChange={handleFormChange} />
        </div>
      </Paper>
        <Paper className={classes.paper}  variant="outlined" square>
          <h2>Direccion:</h2>
          <div className={classes.container}>
          <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Direccion" name="shippingAddress" validators={['required']} value={form.shippingAddress} onChange={handleFormChange} />
          <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Ciudad" name="shippingCity" validators={['required']} value={form.shippingCity} onChange={handleFormChange} />
          <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Region" name="shippingRegion" validators={['required']} value={form.shippingRegion} onChange={handleFormChange} />
          <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Pais" name="shippingCountry" validators={['required']} value={form.shippingCountry} onChange={handleFormChange} />
          </div>
        </Paper>
        <Paper className={classes.paper}  variant="outlined" className={classes.container} square>
          <h2>Articulos:</h2>
          <div className={classes.container}>
            <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Nombre" name="name" value={article.name} onChange={handleArticleChange} />
            <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Cantidad" name="qty" value={article.qty} onChange={handleArticleChange} />
            <TextValidator errorMessages={["El campo es requerido"]} type="text" label="Peso" name="weight" value={article.weight} onChange={handleArticleChange} />
            <Button variant="contained" color="primary" type="button" onClick={addProduct}>Agregar</Button>
          </div>
        </Paper>

        <Button className={classes.button}  variant="contained" color="primary" type="submit"> Crear pedido</Button>
      </ValidatorForm>
      <Paper className={classes.paper}  variant="outlined" className={classes.container} square>
        {
          form.productList.length > 0 
            ? 
            <List className={classes.section}>
              <ListItem role={undefined} dense button>
                <ListItemText primary="Nombre"/>
                <ListItemText primary="Cantidad"/>
                <ListItemText primary="Cantidad"/>
              </ListItem>
              {
              form.productList.map((article) => 
                (<Items key={article.id} article={article}/>)
              )}
            </List> 
            : 
            <h2>Agrega los articulos del envio</h2>
        }
      </Paper>
    </Container>
   )
}

export default Create