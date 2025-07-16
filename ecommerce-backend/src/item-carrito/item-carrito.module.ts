import { Module } from '@nestjs/common';
import { ItemCarritoController } from './item-carrito.controller';
import { ItemCarritoService } from './item-carrito.service';

@Module({
  controllers: [ItemCarritoController],
  providers: [ItemCarritoService]
})
export class ItemCarritoModule {}
