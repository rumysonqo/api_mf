import {Router} from 'express'
import { get_programas } from '../controladores/ctrl_api_mf.js'
const router=Router()

router.get('/',(req,res)=>res.send('pagina principal'))
router.get('/programas',get_programas)

export default router