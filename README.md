# Ejecución:

## Método 1

### Requisitos para ejecutar el programa localmente:

- `PostgreSQL`
- `Node` (v16)
- `yarn` (v1.22.10 idealmente, o en su defecto también se puede usar `npm` v7)


### Ejecutar servidor (API/Backend) localmente:

```bash
$ cd api
# Instalar dependencias
$ yarn install
# Ejecutar servidor
$ yarn start
```

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

### Ejecutar cliente (Frontend) localmente:

```bash
$ cd client
# Instalar dependencias
$ yarn install
# Ejecutar servidor
$ yarn start
```

La API se ejecuta en [localhost:3005](http://localhost:3005) y el frontend en [localhost:3000](http://localhost:3000)

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

La API se ejecuta en [localhost:3005](http://localhost:3005) y el frontend en [localhost:80](http://localhost:80)
