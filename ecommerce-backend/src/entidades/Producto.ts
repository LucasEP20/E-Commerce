import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { CategoriaProducto } from "./CategoriaProducto";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nombre!: string;

    @Column({ type: 'text' })
    descripcion!: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio!: number;

    @Column({ type: 'int' })
    stock!: number;

    @Column({ type: 'varchar', length: 100 })
    imagenUrl!: string;

    @ManyToOne(() => CategoriaProducto, (categoria) => categoria.productos) //creo que define que un producto pertenece a una categoria
    categoria!: CategoriaProducto;
}