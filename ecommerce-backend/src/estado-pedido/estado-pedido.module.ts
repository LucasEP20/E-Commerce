import { Module } from '@nestjs/common';
import { EstadoPedidoController } from './estado-pedido.controller';
import { EstadoPedidoService } from './estado-pedido.service';

@Module({
  controllers: [EstadoPedidoController],
  providers: [EstadoPedidoService]
})
export class EstadoPedidoModule {}
