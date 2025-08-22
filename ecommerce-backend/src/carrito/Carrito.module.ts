import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from '../entidades/Carrito';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './Carrito.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito])],
  controllers: [CarritoController],
  providers: [CarritoService],
  exports: [CarritoService],
})
export class CarritoModule { }
