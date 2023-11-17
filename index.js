const express = require('express')

const hbs = require('hbs')
const path = require('path')

const app = express()

const port = 8181


// Contenido estatico del servidor en este caso son las vistas
app.use(express.static('public'))

// El path asigna la ubicacion de los archivos que se le aplicara el hsb
app.set('views', path.join(__dirname + '/public/views'))
// Se usa la ingeneria de vistas de hbs
app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


app.get('/', (req, res) => {
    res.render('index3')
})

app.get('/productos', (req, res) => {
    res.render('productos', {
        "nombreProducto": "Arepas",
        "Precio": "3500"
    })
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/Donaciones/Admin', (req, res) => {
    res.render('indexDonaciones(Admin).hbs')
})

app.get('/Donaciones/Donante', (req, res) => {
    res.render('indexDonaciones(Donante).hbs')
})

app.get("/donantes", (req, res) => {
    res.render("indexDonantes.hbs");
});

app.get("/medicamentos", (req, res) => {
    res.render("indexMedicamentos.hbs");
});

app.get("/acudientes", (req, res) => {
    res.render("indexAcudientes.hbs");
});

app.get('/test', (req, res) => {
    res.render('test.hbs')
})

app.get('/tablas', (req, res) => {
    res.render('tables_dynamic')
})

app.get('/validacion', (req, res) => {
    res.render('form_validation')
})

app.get('/calendario', (req, res) => {
    res.render('calendar')
})

app.get('/formulario', (req, res) => {
    res.render('formulario')
})

app.get('*', (req, res) => {
    res.render('page_404')
})

app.listen(port, () => {
    console.log(`Listen to port: ${port}`)
})