import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from '../entidades/Pedido';
import { PedidoController } from './pedido.controller';
import { PedidoService } from './Pedido.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  controllers: [PedidoController],
  providers: [PedidoService],
  exports: [PedidoService],
})
export class PedidoModule { }
