## Backend: Django
$ mkdir backend
$ cd backend
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install django
(venv) $ django-admin startproject server .
(venv) $ python manage.py runserver