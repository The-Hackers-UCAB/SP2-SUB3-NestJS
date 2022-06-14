import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { DoctorEspecialidad_Business_Service_Handlers } from 'src/Api Doctor/Business_Service_Handlers/DoctorEspecialidad_Bussiness_Service_Handlers';
import { Doctor_Business_Service_Handler } from 'src/Api Doctor/Business_Service_Handlers/Doctor_Bussiness_Service_Handler';


@Controller('doctor')
export class DoctorController{

    @Get('')
    async getDoctors(@Res() res){ 
        var auxiliar = new Doctor_Business_Service_Handler();
        return res.status(HttpStatus.OK).json( await auxiliar.handler(null) );
    }

    @Get('/especialidad/:valor')
    async getDoctor_por_especialidad(@Res() res, @Param('valor') valor){
        var auxiliar = new DoctorEspecialidad_Business_Service_Handlers();
        return res.status(HttpStatus.OK).json( await auxiliar.handler(valor) );
    }
}
