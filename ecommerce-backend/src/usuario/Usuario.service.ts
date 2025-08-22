import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entidades/usuario';
import { CreateUsuarioDto } from './dto/createUsuario.dto';
import { UpdateUsuarioDto } from './dto/updateUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly UsuarioRepository: Repository<Usuario>,
  ) { }


  findOne(id: number): Promise<Usuario | null> {
    return this.UsuarioRepository.findOneBy({ id });
  }

  //CRUD
  //CREATE
  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const usuario = this.UsuarioRepository.create(createUsuarioDto);
    return this.UsuarioRepository.save(usuario);
  }

  //READ todos los usuarios
  async findAll(): Promise<Usuario[]> {
    return this.UsuarioRepository.find();
  }

  //READ un usuario por nombre de usuario
  async findByUsername(nombreUsuario: string): Promise<Usuario | null> {
    const usuario = await this.UsuarioRepository.findOne({ where: { nombreUsuario: nombreUsuario } });
    if (!usuario) {
      throw new NotFoundException(`Usuario con nombre ${nombreUsuario} no encontrado`);
    }
    return usuario;
  }

  //UPDATE
  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
    this.UsuarioRepository.merge(usuario, updateUsuarioDto);
    return this.UsuarioRepository.save(usuario);
  }

  //DELETE
  async remove(id: number): Promise<void> {
    const result = await this.UsuarioRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    }
  }
}
