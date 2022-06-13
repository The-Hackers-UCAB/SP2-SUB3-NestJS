import { Injectable } from '@nestjs/common';
const pool = require('../DB/ConectarPG');

@Injectable()
export class BuscarEspecialidadPG {
  
    buscarEspecialidad = async () => {

    try {

            const getRegistros = await pool.query(
                "SELECT  e.nombre as Especialidad FROM especialidad e"
            );

            return getRegistros.rows;
            
        } catch (err) {
            console.log(err.message);
        }
    
    }
}