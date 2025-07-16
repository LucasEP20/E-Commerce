import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne } from "typeorm";
import { Producto } from "./Producto";
import { Carrito } from "./Carrito";

@Entity()
export class ItemCarrito {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    cantidad!: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precioUnitario!: number;

    @Column({ type: 'varchar', length: 100 })
    nombreProducto!: string;

    @Column({ type: 'varchar', length: 100 })
    imagenUrlProducto!: string;

    @Column({ type: 'int' })
    productoId!: number;

    @OneToOne(() => Producto, { eager: true })
    producto!: Producto;
    @ManyToOne(() => Carrito, (carrito) => carrito.id, { eager: true })
    carrito!: Carrito;
}
