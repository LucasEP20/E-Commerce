import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrito } from '../entidades/carrito';

@Injectable()
export class CarritoService {
  constructor(@InjectRepository(Carrito) private readonly CarritoRepository: Repository<Carrito>) { }

  findAll(): Promise<Carrito[]> {
    return this.CarritoRepository.find();
  }

  findOne(id: number): Promise<Carrito | null> {
    return this.CarritoRepository.findOneBy({ id });
  }

  create(Carrito: Partial<Carrito>): Promise<Carrito> {
    return this.CarritoRepository.save(Carrito);
  }
}