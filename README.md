# docker-django-react
Portfolio Website: Docker + Django + React + Postgres + Nginx + Gunicorn


## Build for Develop

### Backend: Django
$ cd backend
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install -r requirements.txt
(venv) $ python manage.py runserver
(vend) $ deactivate

## Build frontend: React
$ cd frontend
$ npm install
$ npm start
