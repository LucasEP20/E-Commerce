import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from './Pedido';

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 100 })
    nombreUsuario!: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    emailUsuario!: string;

    @Column({ type: 'varchar', length: 100 })
    passwordUsuario!: string; //ver metodo de seguridad para contraseñas

    @Column({ type: 'varchar', length: 100 })
    rol!: string; // 'cliente' o 'vendedor'

    @OneToMany(() => Pedido, (pedido) => pedido.usuario)
    pedidos: Pedido[];

}