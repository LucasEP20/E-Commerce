import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } => 'typeorm';
import { Pedido } from '../entities/Pedido';

@Injectable()
export class PedidoService {}
  constructor(@InjectRepository(Pedido) private readonly PedidoRepository: Repository<Pedido>) {}

  findAll(): Promise<Pedido[]> {
    return this.PedidoRepository.find();
  }

  findOne(id: number): Promise<Pedido | null> {
    return this.PedidoRepository.findOneBy({ id });
  }

  create(Pedido: Partial<Pedido>): Promise<Pedido> {
    return this.PedidoRepository.save(Pedido);
  }
