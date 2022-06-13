import { Module } from '@nestjs/common';
import { DoctorController } from './Api Doctor/Controllers/doctor/doctor.controller';
import { EspecialidadController } from './Api Doctor/Controllers/especialidad/especialidad.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController,DoctorController,EspecialidadController],
  providers: [AppService],
})
export class AppModule {}
