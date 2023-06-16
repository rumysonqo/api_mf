import express from 'express'

import router from './rutas/rutas_api_mf.js'

const app=express(); 
app.use('/api',router)
app.use((req,res,next)=>{
    res.status(404).json({
        mensaje:'´Pagina no encontrada en este servidor'
    })
})


app.listen(3000);

