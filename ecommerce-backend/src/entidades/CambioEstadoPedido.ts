import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from "typeorm";
import { Pedido } from "../entidades/pedido";
import { EstadoPedido } from "../entidades/estadoPedido";


@Entity()
export class CambioEstadoPedido {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    pedidoId!: number;


    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    fechaCambio!: Date;

    @Column({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" })
    horaCambio!: Date;

    // Un cambio de estado pertenece a un pedido
    @ManyToOne(() => Pedido, (pedido) => pedido.cambiosEstado)
    pedido!: Pedido;

    //Un cambio de estado esta asociado a un estado
    @OneToOne(() => EstadoPedido, { eager: true })
    estado!: EstadoPedido;

}
