import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemCarrito } from "./ItemCarrito";

@Entity()
export class Carrito {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'int' })
    usuarioId!: number;

    @OneToMany(() => ItemCarrito, (itemCarrito) => itemCarrito.carrito, { eager: true })
    items!: ItemCarrito[];
}
