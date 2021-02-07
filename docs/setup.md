## Backend: Django
$ mkdir backend
$ cd backend
$ python3 --version
Python 3.9.1
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install django
(venv) $ django-admin startproject server .
(venv) $ python manage.py runserver
(vend) $ deactivate
$ cd ..

## Frontend: React
$ node -v
v14.15.4
$ npm -v
6.14.10
$ npx create-react-app frontend
$ cd frontend
$ npm start
