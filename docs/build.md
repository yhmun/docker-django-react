## Frontend: React
```
$ node -v
v14.15.4  # mac
v10.19.0  # ubuntu 20.04
$ npm -v
6.14.10   # mac
6.14.4    # ubuntu 20.04
$ npx create-react-app frontend
$ cd frontend
$ npm start
```

## Backend: Django
```
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
```

## Backend: Django Apps
```
# https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
(vend) $ mkdir -p apps/todo 
(vend) $ django-admin startapp todo apps/todo
(vend) $ python manage.py makemigrations todo
(vend) $ python manage.py migrate todo
```

### PyPi packages
```
$ pip install django
$ pip install django-environ
$ pip install psycopg2-binary
$ pip install Pillow
$ pip install django-widget-tweeks
$ pip install djangorestframework
$ pip install django-filter
$ pip install django-cors-headers
$ pip install django-cleanup
$ pip install gunicorn
```
```
Package              Version   requirements.txt             Comment
-------------------- -------   --------------------------   -----------------------
Django               3.1.6     Django==3.1.6                A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
asgiref              3.3.1                                  ASGI specs, helper code, and adapters
pytz                 2021.1                                 World timezone definitions, modern and historical
sqlparse             0.4.1                                  Non-validating SQL parser
django-environ       0.4.5     django-environ==0.4.5        Django-environ allows you to utilize 12factor inspired environment variables to configure your Django application.
psycopg2-binary      2.8.6     psycopg2-binary==2.8.6       psycopg2 - Python-PostgreSQL Database Adapter
django-widget-tweaks 1.4.8     django-widget-tweaks=1.4.8   Tweak the form field rendering in templates, not in python-level form definitions.
djangorestframework  3.12.2    djangorestframework==3.12.2  Web APIs for Django, made easy.
django-filter        2.4.0     django-filter==2.4.0         Django-filter is a reusable Django application for allowing users to filter querysets dynamically.
django-cors-headers  3.7.0     django-cors-headers==3.7.0   Django app for handling the server headers required for Cross-Origin Resource Sharing
Pillow               8.1.0     Pillow=8.1.0                 Python Imaging Library (Fork) - ImageField
django-cleanup       5.1.0     django-cleanup==5.1.0        Deletes old files
gunicorn             20.0.4    gunicorn==20.0.4             WSGI HTTP Server for UNIX
```
