import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Producto } from "./Producto";

@Entity()
export class CategoriaProducto {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @Column({ type: 'text' })
    descripcion!: string;

    @OneToMany(() => Producto, (producto) => producto.categoria)
    productos!: Producto[];
}