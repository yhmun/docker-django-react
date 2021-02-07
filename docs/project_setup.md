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

## Frontend: React
$ node -v
v14.15.4  # mac
v10.19.0  # ubuntu 20.04
$ npm -v
6.14.10   # mac
6.14.4    # ubuntu 20.04
$ npx create-react-app frontend
$ cd frontend
$ npm start
