import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoriaProductoDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsString()
    @IsOptional()
    readonly descripcion?: string;
}