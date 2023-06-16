import {pool} from '../db.js'

export const get_programas= async(req,res)=>{
    try{
        const [prg]=await pool.query('select distinct(cod_programa), programa from metas_fisicas')
        res.json(prg)
    }catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un problema'
        })
    }
    
}