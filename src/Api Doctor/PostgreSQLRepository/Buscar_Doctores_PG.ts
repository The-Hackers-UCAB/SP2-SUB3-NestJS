import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
const pool = require('../DB/ConectarPG');
import { DoctorRepository } from '../Interfaces/DoctorRepository';

@Injectable()
export class BuscarDoctoresPG implements DoctorRepository{
  
  buscarDoctor = async (params) => {

   try {

        const getRegistros = await pool.query(
            "SELECT d.*, e.nombre as Especialidad FROM doctor d, doctor_especialidad de, especialidad e WHERE e.id=de.fk_especialidad and de.fk_doctor=d.id"
        );

        return getRegistros.rows;
        
    } catch (err) {
        console.log(err.message);
    }
    
  }

  getIdDoctores = async () => {

    try {

      var idDoctores: Array<number> = [];

      const getRegistros = await pool.query(
          "SELECT id FROM doctor"
      );

      for(var i = 0; i<getRegistros.rows.length; i++)
        idDoctores.push(getRegistros.rows[i].id);
      
      return idDoctores;
      
    } catch (err) {
      console.log(err.message);
    }
  }
  
}