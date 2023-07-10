import express from 'express'
import router from './rutas/rutas_api_mf.js'
import cors from 'cors'


const app=express(); 
app.use(cors());
app.use('/api',router)
app.use((req,res,next)=>{
    res.status(404).json({
        mensaje:'´Pagina no encontrada en este servidor'
    })
})

export default app