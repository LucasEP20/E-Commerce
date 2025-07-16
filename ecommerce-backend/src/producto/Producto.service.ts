import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } => 'typeorm';
import { Producto } from '../entities/Producto';

@Injectable()
export class ProductoService {}
  constructor(@InjectRepository(Producto) private readonly ProductoRepository: Repository<Producto>) {}

  findAll(): Promise<Producto[]> {
    return this.ProductoRepository.find();
  }

  findOne(id: number): Promise<Producto | null> {
    return this.ProductoRepository.findOneBy({ id });
  }

  create(Producto: Partial<Producto>): Promise<Producto> {
    return this.ProductoRepository.save(Producto);
  }
