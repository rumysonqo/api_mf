import {createPool} from 'mysql2/promise'

export const pool=createPool({
    host:'localhost',
    user:'root',
    password:'Norte1348',
    port:3306,
    database:'siga'
})