## Download source code
$ git clone git@github.com:mcodegeeks/docker-django-react.git

## Build frontend: Django
$ cd backend
$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install --upgrade pip
(venv) $ pip install -r requirements.txt
(venv) $ python manage.py runserver
(vend) $ deactivate

## Build backend: React
$ cd frontend
$ npm install
$ npm start
