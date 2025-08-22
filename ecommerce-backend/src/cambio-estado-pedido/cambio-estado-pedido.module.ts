import { Module } from '@nestjs/common';
import { CambioEstadoPedidoController } from './cambio-estado-pedido.controller';
import { CambioEstadoPedidoService } from './cambio-estado-pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CambioEstadoPedido } from 'src/entidades/CambioEstadoPedido';

@Module({
  imports: [TypeOrmModule.forFeature([CambioEstadoPedido])],
  controllers: [CambioEstadoPedidoController],
  providers: [CambioEstadoPedidoService]
})
export class CambioEstadoPedidoModule { }
