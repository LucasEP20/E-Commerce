import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany } from "typeorm";
import { Usuario } from "../entidades/usuario";
import { Carrito } from "../entidades/carrito";
import { CambioEstadoPedido } from "../entidades/cambioEstadoPedido";
import { EstadoPedido } from "../entidades/estadoPedido";

@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    usuarioId!: number;

    @Column({ type: 'int' })
    carritoId!: number;

    // Un pedido esta asociado a un solo usuario
    @ManyToOne(() => Usuario, (usuario) => usuario.pedidos, { eager: true })
    usuario!: Usuario;

    //Un pedido esta asociado a un solo carrito
    @OneToOne(() => Carrito, { eager: true })
    carrito!: Carrito;

    // Un pedido puede tener varios cambios de estado
    @OneToMany(() => CambioEstadoPedido, (cambioEstado) => cambioEstado.pedido, { eager: true })
    cambiosEstado!: CambioEstadoPedido[];

    //Un pedido puede tener varios estados
    @ManyToOne(() => EstadoPedido, { eager: true })
    estado!: EstadoPedido;

}
