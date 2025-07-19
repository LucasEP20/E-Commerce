import { Module } from '@nestjs/common';
import { ItemCarritoController } from './item-carrito.controller';
import { ItemCarritoService } from './item-carrito.service';
import { ItemCarrito } from 'src/entidades/itemCarrito';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemCarrito])],
  controllers: [ItemCarritoController],
  providers: [ItemCarritoService]
})
export class ItemCarritoModule { }
