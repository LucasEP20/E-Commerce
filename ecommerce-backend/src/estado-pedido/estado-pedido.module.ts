import { Module } from '@nestjs/common';
import { EstadoPedidoController } from './estado-pedido.controller';
import { EstadoPedidoService } from './estado-pedido.service';
import { EstadoPedido } from 'src/entidades/EstadoPedido';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoPedido])],
  controllers: [EstadoPedidoController],
  providers: [EstadoPedidoService]
})
export class EstadoPedidoModule { }
