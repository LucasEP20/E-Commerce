import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaProducto } from '../entidades/categoriaProducto';
import { CreateCategoriaProductoDto } from './dto/createCategoriaProducto.dto';
import { UpdateCategoriaProductoDto } from './dto/updateCategoriaProducto.dto';

@Injectable()
export class CategoriaProductoService {
    constructor(
        @InjectRepository(CategoriaProducto)
        private readonly categoriaProductoRepository: Repository<CategoriaProducto>,
    ) { }
    //Create, Read, Update, Delete (CRUD)
    async create(createCategoriaProductoDto: CreateCategoriaProductoDto): Promise<CategoriaProducto> {
        const nuevaCategoriaProducto = this.categoriaProductoRepository.create(createCategoriaProductoDto);
        return this.categoriaProductoRepository.save(nuevaCategoriaProducto);
    }

    // READ: obtener todas las categorias de producto
    async findAll(): Promise<CategoriaProducto[]> {
        return this.categoriaProductoRepository.find();
    }
    //READ: obtener una categoria de producto por id
    async findOne(id: number): Promise<CategoriaProducto> {
        const categoriaProducto = await this.categoriaProductoRepository.findOne({ where: { id } });
        if (!categoriaProducto) {
            throw new Error('Categoria de producto no encontrada');
        }
        return categoriaProducto;
    }

    // UPDATE: actualizar una categoria de producto
    async update(id: number, updateCategoriaProductoDto: UpdateCategoriaProductoDto): Promise<CategoriaProducto> {
        const categoriaProducto = await this.findOne(id);
        this.categoriaProductoRepository.merge(categoriaProducto, updateCategoriaProductoDto);
        return this.categoriaProductoRepository.save(categoriaProducto);
    }

    //DELETE: eliminar una categoria de producto
    async remove(id: number): Promise<void> {
        const categoriaProducto = await this.categoriaProductoRepository.delete(id);
        if (categoriaProducto.affected === 0) {
            throw new NotFoundException(`Categoria de producto con id ${id} no encontrada`);
        }
    }
}