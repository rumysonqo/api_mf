import {Router} from 'express'
import { get_programas, get_productos,get_sub_productos,get_metas_producto, get_micro_red, get_metas_prog_prod_micro, get_metas_subproducto_MR, get_metas_subproducto_MR_EESS, get_establecimiento, get_metas_MR_EESS_Producto } from '../controladores/ctrl_api_mf.js'
const router=Router()

router.get('/',(req,res)=>res.send('pagina principal'))
router.get('/programas',get_programas)
router.get('/productos/:prg',get_productos)
router.get('/sub_productos/:prg/:prd',get_sub_productos)
router.get('/micro_red',get_micro_red)
router.get('/establecimiento/:mic',get_establecimiento)
router.get('/metas_producto/:prg/:prd',get_metas_producto)
router.get('/metas_subproducto_MR/:prg/:prd/:sub',get_metas_subproducto_MR)
router.get('/metas_prog_prod_micro/:prg/:prd/:mic',get_metas_prog_prod_micro)
router.get('/metas_subproducto_MR_EESS/:prg/:prd/:sub/:mic',get_metas_subproducto_MR_EESS)
router.get('/metas_MR_EESS_Producto/:prg/:prd/:est',get_metas_MR_EESS_Producto)

export default router