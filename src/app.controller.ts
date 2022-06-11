import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { json } from 'stream/consumers';
import { AppService } from './app.service';
import { BuscarDoctoresPG } from './Api Doctor/PostgreSQLRepository/BuscarDoctoresPG';
import { Buscar_Doctor_por_Especialidad_PG } from './Api Doctor/PostgreSQLRepository/BuscarEspecialidadPG';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/doctor/especialidad/')
  async getDoctors(@Res() res){ 
    var auxiliar = new BuscarDoctoresPG();
    const doctores = await auxiliar.BuscarDoctor(null);
    return res.status(HttpStatus.OK).json(doctores)
  }

  @Get('/doctor/especialidad/:valor')
  async getDoctor_por_especialidad(@Res() res, @Param('valor') valor){
    var auxiliar = new Buscar_Doctor_por_Especialidad_PG();
    const doctores = await auxiliar.BuscarDoctor(valor);
    return res.status(HttpStatus.OK).json(doctores)
  }

}
