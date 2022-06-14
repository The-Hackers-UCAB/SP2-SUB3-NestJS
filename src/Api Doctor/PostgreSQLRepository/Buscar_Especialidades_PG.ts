import { Injectable } from '@nestjs/common';
import { BD_PG } from '../DB/BD_PG';


@Injectable()
export class BuscarEspecialidadPG extends BD_PG {
  
    buscarEspecialidad = async () => {

    try {

            const getRegistros = await this.pool.query(
                "SELECT  e.nombre as Especialidad FROM especialidad e"
            );

            return getRegistros.rows;
            
        } catch (err) {
            console.log(err.message);
        }
    
    }
}