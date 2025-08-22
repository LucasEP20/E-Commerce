import { IsString, IsNotEmpty, IsEmail, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateUsuarioDto } from "./createUsuario.dto";

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string


    @IsEmail()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;
}