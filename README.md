# Ejecución:

## Método 1

### Requisitos para ejecutar el programa localmente:

- `PostgreSQL`
- `Node` (v16)
- `yarn` (v1.22.10 idealmente, o en su defecto también se puede usar `npm` v7)

### Setup base de datos (postgres)

```bash
$ createuser currencybird -W
Password: password
$ createdb cb_invites_development --owner=currencybird
# Ejecutar migraciones
$ cd api
$ yarn migrate
# Ejecutar seeds
$ yarn seed
```

### Ejecutar servidor (API/Backend) localmente:

```bash
$ cd api
# Instalar dependencias
$ yarn install
# Ejecutar servidor
$ yarn start
```

### Ejecutar cliente (Frontend) localmente:

```bash
$ cd client
# Instalar dependencias
$ yarn install
# Ejecutar servidor
$ yarn start
```

## Método 2

### Requisitos:

- `docker`
- `docker-compose`

### Ejecutar contenedores:

```bash
# Lanzar contenedores (usar flag -d para detached mode)
$ docker-compose -f docker-compose.prod.yml up
# Ejecutar migraciones
$ docker exec -it api-container yarn migrate
# Ejecutar seeds
$ docker exec -it api-container yarn seed
```