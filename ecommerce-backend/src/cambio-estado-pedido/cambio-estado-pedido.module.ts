import { Module } from '@nestjs/common';
import { CambioEstadoPedidoController } from './cambio-estado-pedido.controller';
import { CambioEstadoPedidoService } from './cambio-estado-pedido.service';

@Module({
  controllers: [CambioEstadoPedidoController],
  providers: [CambioEstadoPedidoService]
})
export class CambioEstadoPedidoModule {}
