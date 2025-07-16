import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carrito } from '../entities/Carrito';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService]
      exports: [CarritoService],
})
export class CarritoModule {}
