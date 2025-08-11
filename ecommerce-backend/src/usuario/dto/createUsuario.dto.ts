import { IsString, IsNotEmpty, MinLength, IsEmail, IsOptional } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;


    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @IsString()
    @IsOptional()
    readonly telefono?: string;

    @IsString()
    @IsNotEmpty()
    readonly rol: string; // 'cliente' o 'vendedor'
}
