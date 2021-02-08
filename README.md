# Description
Portfolio Website: Docker + Django + React + Postgres + Nginx + Gunicorn

## Documents
```
/docs
  - ubuntu.md: setup guide for ubuntu
  - docker.md: docker commands
```

## Setting up

### Local environment
```
$ mkdir -p /Users/yhmun/Develop/volumes/postgres
$ mkdir -p /Users/yhmun/Develop/volumes/backend
$ mkdir -p /Users/yhmun/Develop/volumes/frontend
$ mkdir -p /Users/yhmun/Develop/volumes/media

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/postgres \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/backend \
    --opt o=bind backend

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/frontend \
    --opt o=bind frontend

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/Users/yhmun/Develop/volumes/media \
    --opt o=bind media
```

### Production environment
```
$ sudo mkdir -p /var/opt/volumes/postgres
$ sudo mkdir -p /var/opt/volumes/backend
$ sudo mkdir -p /var/opt/volumes/frontend
$ sudo mkdir -p /var/opt/volumes/media

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/postgres \
    --opt o=bind postgres

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/backend \
    --opt o=bind backend

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/frontend \
    --opt o=bind frontend

$ docker volume create --driver local \
    --opt type=none \
    --opt device=/var/opt/volumes/media \
    --opt o=bind media
```

## Start production
```
$ docker-compose up -d --build
```

## Local build

### Backend: Django
$ cd ./django
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install -r requirements.txt
(venv) $ python manage.py runserver
(vend) $ deactivate

### Frontend: React
```
$ cd ./react
$ npm install
$ npm start
$ npm run build
```


