#!/bin/bash

# --- Configuración ---
# Lista de entidades en kebab-case y su correspondiente nombre de clase en PascalCase.
# Es crucial que el nombre PascalCase aquí COINCIDA EXACTAMENTE con el nombre de tu archivo de entidad
# y el nombre de la clase dentro de ese archivo (ej. User, Product, CategoryProduct, etc.).
declare -A ENTITIES=(
  ["Usuario"]="Usuario"
  ["Producto"]="Producto"
  ["CategoriaProducto"]="CategoriaProducto"
  ["Carrito"]="Carrito"
  ["ItemCarrito"]="ItemCarrito"
  ["Pedido"]="Pedido"
  ["EstadoPedido"]="EstadoPedido"
  ["CambioEstadoPedido"]="CambioEstadoPedido"
 
)

echo "Iniciando generación y configuración de módulos, controladores y servicios para NestJS..."
echo "--------------------------------------------------------------------------------------"

for kebab_case_name in "${!ENTITIES[@]}"; do
  pascal_case_name="${ENTITIES[$kebab_case_name]}"
  echo ">>> Procesando: $pascal_case_name (Módulo: $kebab_case_name)"

  # 1. Generar Módulo, Controlador y Servicio
  nest g module "$kebab_case_name" --no-spec
  nest g controller "$kebab_case_name" --no-spec
  nest g service "$kebab_case_name" --no-spec

  MODULE_FILE="src/$kebab_case_name/$kebab_case_name.module.ts"
  SERVICE_FILE="src/$kebab_case_name/$kebab_case_name.service.ts"

  # 2. Modificar el archivo del Módulo para TypeORM
  echo "Modificando $MODULE_FILE para TypeORM..."
  # Añadir importaciones
  sed -i "/import { Module } from '@nestjs\/common';/a\\
import { TypeOrmModule } from '@nestjs/typeorm';\\
import { $pascal_case_name } from '../entities/$pascal_case_name';" "$MODULE_FILE"
  # Añadir TypeOrmModule.forFeature
  sed -i "/imports: \[/a\\
    TypeOrmModule.forFeature([$pascal_case_name])," "$MODULE_FILE"
  # Asegurarse de exportar el servicio si es necesario (AuthModule a menudo lo necesita)
  sed -i "/providers: \[/a\\
      exports: [${pascal_case_name}Service]," "$MODULE_FILE"
  # Quitar el exports si no hay un servicio, o ajustarlo a la lógica de Nest
  sed -i '/exports: \[\],/d' "$MODULE_FILE" # Eliminar la línea exports: [] si está vacía


  # 3. Modificar el archivo del Servicio para TypeORM
  echo "Modificando $SERVICE_FILE para TypeORM..."
  # Añadir importaciones
  sed -i "/import { Injectable } from '@nestjs\/common';/a\\
import { InjectRepository } from '@nestjs/typeorm';\\
import { Repository } => 'typeorm';\\
import { $pascal_case_name } from '../entities/$pascal_case_name';" "$SERVICE_FILE"
  # Añadir constructor con inyección de repositorio
  sed -i "/export class ${pascal_case_name}Service {/a\\
  constructor(@InjectRepository($pascal_case_name) private readonly ${kebab_case_name}Repository: Repository<$pascal_case_name>) {}" "$SERVICE_FILE"
  # Añadir un método de ejemplo (ej. findAll)
  sed -i "/constructor(@InjectRepository($pascal_case_name) private readonly ${kebab_case_name}Repository: Repository<$pascal_case_name>) {}/a\\
\\
  findAll(): Promise<${pascal_case_name}[]> {\\
    return this.${kebab_case_name}Repository.find();\\
  }\\
\\
  findOne(id: number): Promise<${pascal_case_name} | null> {\\
    return this.${kebab_case_name}Repository.findOneBy({ id });\\
  }\\
\\
  create(${kebab_case_name}: Partial<${pascal_case_name}>): Promise<${pascal_case_name}> {\\
    return this.${kebab_case_name}Repository.save(${kebab_case_name});\\
  }" "$SERVICE_FILE"

  echo "--------------------------------------------------------------------------------------"
done

echo "¡Proceso de generación y configuración automática completado!"
echo "Pasos siguientes:"
echo "1. Asegúrate de que tus archivos de entidad EXISTAN en 'src/entities/' y estén correctamente definidos."
echo "2. Revisa los archivos de servicio y controlador para implementar la lógica de negocio."
echo "3. Asegúrate de que 'synchronize: true' esté configurado en tu AppModule para desarrollo."
echo "4. Para producción, cambia a migraciones."