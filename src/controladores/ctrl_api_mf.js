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

export const get_productos= async(req,res)=>{
    try{
        const [prd]=await pool.query('select distinct(cod_producto), producto from metas_fisicas where cod_programa=?',[req.params.prg])
        res.json(prd)
    }catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un problema'
        })
    }
}

export const get_sub_productos= async(req,res)=>{
    try{
        const [prd]=await pool.query('select distinct(cod_sub_finalidad), sub_finalidad from metas_fisicas where cod_programa=? and cod_producto=?',[req.params.prg, req.params.prd])
        res.json(prd)
    }catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un problema'
        })
    }
}

export const get_micro_red= async(req,res)=>{
    try{
        const [prg]=await pool.query('select distinct(cod_micro_red), nom_micro_red from metas_fisicas')
        res.json(prg)
    }catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un problema'
        })
    }
}


export const get_establecimiento= async(req,res)=>{
    try{
        const [prg]=await pool.query('select distinct(cod_establecimiento), nom_establecimiento from metas_fisicas where cod_micro_red = ?',[req.params.mic])
        res.json(prg)
    }catch(error){
        return res.status(500).json({
            mensaje:'ocurrio un problema'
        })
    }
}


export const get_metas_producto = async (req,res)=>{
    try{
        const [met]=await pool.query('select actividad, sub_finalidad, if(trazador=1,"SI","NO") as trazador, format(sum(cantidad),0) as meta_fisica from metas_fisicas where cod_programa = ? and cod_producto = ? group by actividad, sub_finalidad, trazador order by actividad, sub_finalidad',[req.params.prg, req.params.prd]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_metas_prog_prod_micro = async (req,res)=>{
    try{
        const [met]=await pool.query('select actividad, sub_finalidad, if(trazador=1,"SI","NO") as trazador, format(sum(cantidad),0) as meta_fisica from metas_fisicas where cod_programa = ? and cod_producto = ? and cod_micro_red = ? group by actividad, sub_finalidad, trazador order by actividad, sub_finalidad',[req.params.prg, req.params.prd, req.params.mic]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}


export const get_metas_subproducto_MR = async (req,res)=>{
    try{
        const [met]=await pool.query('select nom_micro_red, actividad, sub_finalidad, if(trazador=1,"SI","NO") as trazador, sum(cantidad) as meta_fisica from metas_fisicas where cod_programa = ? and cod_producto = ? and cod_sub_finalidad = ? group by nom_micro_red, actividad, sub_finalidad, trazador order by meta_fisica',[req.params.prg, req.params.prd, req.params.sub]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}


export const get_metas_subproducto_MR_EESS = async (req,res)=>{
    try{
        const [met]=await pool.query('select nom_establecimiento, actividad, sub_finalidad, if(trazador=1,"SI","NO") as trazador, sum(cantidad) as meta_fisica from metas_fisicas where cod_programa = ? and cod_producto = ? and cod_sub_finalidad = ? and cod_micro_red=? group by nom_establecimiento, actividad, sub_finalidad, trazador order by meta_fisica',[req.params.prg, req.params.prd, req.params.sub, req.params.mic]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}

export const get_metas_MR_EESS_Producto = async (req,res)=>{
    try{
        const [met]=await pool.query('select actividad, sub_finalidad, if(trazador=1,"SI","NO") as trazador, sum(cantidad) as meta_fisica from metas_fisicas where cod_programa = ? and cod_producto = ? and cod_establecimiento=? group by actividad, sub_finalidad, trazador order by actividad, sub_finalidad, meta_fisica',[req.params.prg, req.params.prd, req.params.est]);
        res.json(met);
    }catch(error){
        return res.status(500).json({mensaje:'ocurrio un error'});
    }
}
