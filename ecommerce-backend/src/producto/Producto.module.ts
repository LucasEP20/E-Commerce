import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from '../entities/Producto';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';

@Module({
  controllers: [ProductoController],
  providers: [ProductoService]
      exports: [ProductoService],
})
export class ProductoModule {}
