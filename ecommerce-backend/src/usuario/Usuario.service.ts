import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entidades/usuario';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) { }

  findAll(): Promise<Usuario[]> {
    return this.UsuarioRepository.find();
  }

  findOne(id: number): Promise<Usuario | null> {
    return this.UsuarioRepository.findOneBy({ id });
  }

  create(Usuario: Partial<Usuario>): Promise<Usuario> {
    return this.UsuarioRepository.save(Usuario);
  }
}
