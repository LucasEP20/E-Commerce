import { Controller, Get, Post, Body, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CategoriaProductoService } from './categoria-producto.service';
import { CreateCategoriaProductoDto } from './dto/createCategoriaProducto.dto';
import { CategoriaProducto } from '../entidades/categoriaProducto';
import { UpdateCategoriaProductoDto } from './dto/updateCategoriaProducto.dto';

@Controller('categoria-producto')
export class CategoriaProductoController {
    constructor(private readonly categoriaProductoService: CategoriaProductoService) { }
    //El controlador recibe las peticiones HTTP y las delega al servicio correspondiente

    //CREATE
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCategoriaProductoDto: CreateCategoriaProductoDto): Promise<CategoriaProducto> {
        return this.categoriaProductoService.create(createCategoriaProductoDto);
    }

    //READ
    @Get()
    findAll() {
        return this.categoriaProductoService.findAll();
    }

    //READ por ID
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriaProductoService.findOne(+id);
    }

    //UPDATE
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCategoriaProductoDto: UpdateCategoriaProductoDto) {
        return this.categoriaProductoService.update(+id, updateCategoriaProductoDto);
    }

    //DELETE
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.categoriaProductoService.remove(+id);
    }
}
