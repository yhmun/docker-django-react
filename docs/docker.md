## Docker Commands

### List
```
$ docker ps -a                      # List containers
$ docker images                     # List images
$ docker volume ls                  # List volumes
$ docker network ls                 # List networks
```

## Inspect
```
$ docker volume inspect postgres
$ docker volume inspect backend
$ docker volume inspect frontend
$ docker volume inspect media
```

## Create
```
$ docker volume create              # Create a volume
$ dpcler network create             # Create a network

$ docker network create -d bridge bridge_network
```

### Remove
```
$ docker rm -f                      # Remove one or more containers
$ docker rmi                        # Remove one or more images
$ docker image prune -a             # Remove all unused local images
$ docker volume rm                  # Remove one or more volumes
$ docker system prune -a            # Remove unused data
$ docker volume prune               # Remove all unused local volumes
$ docker network prune              # Remove all unused networks

$ docker rm -f backend
$ docker rm backend:/usr/src/app/media
$ docker cp ./media backend:/usr/src/app/media
$ docker rmi backend:custom
```

```
$ docker pull NAME[:TAG|@DIGEST]    # Pull an image or a repository from a registry

$ docker pull postgres:13.1-alpine
```

### Build
```
$ docker build                      # Build an image from a Dockerfile

$ docker build --rm -t backend:custom ./backend
$ docker build --rm -t react:custom ./react
```

### Excute
```
$ docker exec -it                   # Run a command in a running container

$ docker exec -it backend /bin/bash
$ docker exec -it postgres psql --username='' --dbname=''

$ docker exec -it postgres /bin/bash
rm -rf /var/lib/postgresql/data/pg_stat_tmp/global.stat
```

### Run 
```
$ docker run                        # Run a command in a new container

$ docker run --name postgres --env-file ./postgres/.env --net=bridge_network -p 5432:5432 -d --rm postgres:13.1-alpine
$ docker run --name backend --env-file ./backend/.env --net=bridge_network -p 8000:8000 --rm backend:custom gunicorn server.wsgi:application --bind 0.0.0.0:8000
$ docker run --name backend --env-file ./backend/.env --net=bridge_network -p 8000:8000 --rm backend:custom python manage.py runserver
$ docker run -it --rm backend:custom /bin/bash
```

## Docker-Compose Commands

### Pull
```
$ docker-compose pull                   # Pull service images
```

### Build
```
$ docker-compose build                  # Build or rebuild services.
```

### Execute
```
$ docker-compose exec                   # Execute a command in a running container

$ docker-compose exec postgres psql --username='' --dbname=''

$ docker-compose exec frontend ls -a build

$ docker-compose exec backend /bin/bash
$ docker-compose exec backend python manage.py createsuperuser
$ docker-compose exec backend python manage.py migrate --noinput
$ docker-compose exec backend python manage.py collectstatic --no-input --clear
$ docker-compose exec backend ls -a
```

### Service
```
$ docker-compose up -d                  # Builds, (re)creates, starts, and attaches to containers for a service.
$ docker-compose up --build
$ docker-compose up --no-build
$ docker-compose up --no-start

$ docker-compose up -d --build backend
$ docker-compose up -d --build frontend
$ docker-compose up -d --build nginx

$ docker-compose -f docker-compose.prod.yml up -d
```
```
$ docker-compose down                   # Stops containers and removes containers, networks, volumes, and images created by `up`.
$ docker-compose down --rmi all
$ docker-compose down --rmi local

$ docker-compose -f docker-compose.prod.yml down --rmi all
```
```
$ docker-compose stop                   # Stop running containers without removing them.
$ docker-compose stop web
```

### Log
```
$ docker-compose logs -f                # View output from containers
```
