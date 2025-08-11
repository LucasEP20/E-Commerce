import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateCategoriaProductoDto } from "./createCategoriaProducto.dto";

export class UpdateCategoriaProductoDto extends PartialType(CreateCategoriaProductoDto) { }