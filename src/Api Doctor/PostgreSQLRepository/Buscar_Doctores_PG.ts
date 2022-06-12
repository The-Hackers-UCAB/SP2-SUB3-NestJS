import { Injectable } from '@nestjs/common';
const pool = require('../DB/ConectarBD');
import { DoctorRepository } from '../Interfaces/DoctorRepository';

@Injectable()
export class BuscarDoctoresPG implements DoctorRepository{
  
  BuscarDoctor = async (params) => {

   try {

        const getRegistros = await pool.query(
            "SELECT * FROM doctor"
        );

        return getRegistros.rows;
        
    } catch (err) {
        console.log(err.message);
    }
    
  }
  
  
}