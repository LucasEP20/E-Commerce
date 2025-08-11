import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { glob } from 'fs';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//entidades
import { Usuario } from './entidades/usuario';
import { Pedido } from './entidades/pedido';
import { CambioEstadoPedido } from './entidades/cambioEstadoPedido';
import { EstadoPedido } from './entidades/estadoPedido';
import { Carrito } from './entidades/carrito';
import { Producto } from './entidades/producto';
import { ItemCarrito } from './entidades/itemCarrito';
import { CategoriaProducto } from './entidades/categoriaProducto';

//modulos
import { CategoriaProductoModule } from './categoria-producto/categoria-producto.module';
import { CambioEstadoPedidoModule } from './cambio-estado-pedido/cambio-estado-pedido.module';
import { ProductoModule } from './producto/Producto.module';
import { CarritoModule } from './carrito/Carrito.module';
import { PedidoModule } from './pedido/Pedido.module';
import { UsuarioModule } from './usuario/Usuario.module';
import { EstadoPedidoModule } from './estado-pedido/estado-pedido.module';
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
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true, //  ¡Solo para desarrollo! En producción, usa migraciones de TypeORM.
      entities: [
        Carrito,
        CategoriaProducto,
        CambioEstadoPedido,
        EstadoPedido,
        ItemCarrito,
        Pedido,
        Producto,
        Usuario,
      ],
    }),
    CarritoModule,
    CategoriaProductoModule,
    CambioEstadoPedidoModule,
    ProductoModule,
    UsuarioModule,
    PedidoModule,
    EstadoPedidoModule,
    ItemCarritoModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
