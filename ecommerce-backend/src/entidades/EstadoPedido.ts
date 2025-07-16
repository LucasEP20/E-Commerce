import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Representa el estado de un pedido en el sistema
// Ejemplos de estados: 'pendiente', 'enviado', 'entregado', 'cancelado'
@Entity()
export class EstadoPedido {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    // Un estado de pedido puede ser 'pendiente', 'enviado', 'entregado', etc.
    @Column({ type: 'varchar', length: 50 })
    tipo!: string;

}
