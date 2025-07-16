import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { glob } from 'fs';


//Entidades
import { Usuario } from './Entidades/Usuario';
import { Pedido } from './Entidades/Pedido';
import { CambioEstadoPedido } from './Entidades/CambioEstadoPedido';
import { EstadoPedido } from './Entidades/EstadoPedido';
import { Carrito } from './Entidades/Carrito';
import { Producto } from './Entidades/Producto';
import { ItemCarrito } from './Entidades/ItemCarrito';
import { CartItemModule } from './ItemCarrito/cart-item.module';
import { CategoryProductModule } from './category-product/category-product.module';
import { OrderStateChangeModule } from './order-state-change/order-state-change.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './Carrito/cart.module';
import { UserModule } from './user/user.module';
import { OrderStatusModule } from './order-status/order-status.module';
import { OrderModule } from './order/order.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { PedidoModule } from './pedido/pedido.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EstadoPedidoModule } from './estado-pedido/estado-pedido.module';
import { CambioEstadoPedidoModule } from './cambio-estado-pedido/cambio-estado-pedido.module';
import { CarritoModule } from './carrito/carrito.module';
import { ProductoModule } from './producto/producto.module';
import { CategoriaProductoModule } from './categoria-producto/categoria-producto.module';
import { ItemCarritoModule } from './item-carrito/item-carrito.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, //  ¡Solo para desarrollo! En producción, usa migraciones de TypeORM.

    ),
    CartItemModule,
    CategoryProductModule,
    OrderStateChangeModule,
    ProductModule,
    CartModule,
    UserModule,
    OrderStatusModule,
    OrderModule,
    PedidoModule,
    UsuarioModule,
    EstadoPedidoModule,
    CambioEstadoPedidoModule,
    CarritoModule,
    ProductoModule,
    CategoriaProductoModule,
    ItemCarritoModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
