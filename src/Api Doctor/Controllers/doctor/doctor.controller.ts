import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { DoctorEspecialidad_Bussiness_Service_Handlers } from 'src/Api Doctor/Bussiness_Service_Handlers/DoctorEspecialidad_Bussiness_Service_Handlers';
import { Doctor_Bussiness_Service_Handler } from 'src/Api Doctor/Bussiness_Service_Handlers/Doctor_Bussiness_Service_Handler';
import { DoctorDTO } from 'src/Api Doctor/dto/doctor.dto';
import { DoctorORM } from 'src/Api Doctor/ORM/doctor.orm';
import { BuscarDoctoresPG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctores_PG';
import { Buscar_Doctor_por_Especialidad_PG } from 'src/Api Doctor/PostgreSQLRepository/Buscar_Doctor_Por_Especialidad_PG';

@Controller('doctor')
export class DoctorController{

    @Get('')
    async getDoctors(@Res() res){ 
        var auxiliar = new Doctor_Bussiness_Service_Handler();
        return res.status(HttpStatus.OK).json( await auxiliar.handler(null) );
    }

    @Get('/especialidad/:valor')
    async getDoctor_por_especialidad(@Res() res, @Param('valor') valor){
        var auxiliar = new DoctorEspecialidad_Bussiness_Service_Handlers();
        return res.status(HttpStatus.OK).json( await auxiliar.handler(valor) );
    }
}
