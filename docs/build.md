## Frontend: React
```
$ node -v
v14.15.4  # mac
v10.19.0  # ubuntu 20.04
$ npm -v
6.14.10   # mac
6.14.4    # ubuntu 20.04
$ sudo npm install --global yarn
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
# https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf
(vend) $ mkdir -p apps/blog
(vend) $ django-admin startapp blog apps/blog
(vend) $ python manage.py makemigrations blog
(vend) $ python manage.py migrate blog

# https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
(vend) $ mkdir -p apps/todo
(vend) $ django-admin startapp todo apps/todo
(vend) $ python manage.py makemigrations todo
(vend) $ python manage.py migrate todo
```

## Frontend: React Apps
```
# React: Building an Interface
# https://www.linkedin.com/learning/react-js-building-an-interface-2
$ npm install --save bootstrap \                     
                     lodash \
                     jquery \
                     popper.js \
                     moment \
                     react-moment \
                     react-icons 

# React: Creating and Hosting a Full-Stack Site
# https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site
$ npm install --save react-router-dom
                   # whatwg-fetch

# https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf
$ npm install --save antd redux axios react-redux redux-thunk redux-logger bootstrap reactstrap
$ mkdir -p src/reducx
$ mkdir -p src/containers

$ API_HOST=http://localhost yarn start
```

### npm commands
```
$ npm list --depth=n
           --prod
           --dev
           --global
           --json
$ npm uninstall --save <package>
```

### npm packages
```
$ npm list --prod --depth=0
├── @testing-library/jest-dom@5.11.9
├── @testing-library/react@11.2.5
├── @testing-library/user-event@12.6.3
├── antd@4.12.2
├── axios@0.21.1                        # Promise based HTTP client for the browser and node.js
├── bootstrap@4.6.0                     # The most popular front-end framework for developing responsive, mobile first projects on the web.
├── jquery@3.5.1                        # JavaScript library for DOM operations
├── lodash@4.17.20                      # Lodash modular utilities.
├── moment@2.29.1                       # Parse, validate, manipulate, and display dates
├── popper.js@1.16.1                    # Realtime Cross-Browser Automation
├── react@17.0.1                        # React is a JavaScript library for building user interfaces.
├── react-dom@17.0.1                    # React package for working with the DOM.
├── react-icons@4.2.0                   # Icon component for React
├── react-moment@1.1.1                  # React component for the moment date library.
├── react-redux@7.2.2
├── react-router-dom@5.2.0              # DOM bindings for React Router
├── react-scripts@4.0.2
├── reactstrap@8.9.0
├── redux@4.0.5
├── redux-logger@3.0.6
├── redux-thunk@2.3.0
└── web-vitals@1.1.0



└── whatwg-fetch@3.5.0                  # A window.fetch polyfill.
```
```
$ npm list --global --depth=0 
/usr/local/lib
├── @angular/cli@6.2.3
├── npm@6.14.10
├── protractor@5.4.1
├── tslint@5.11.0
├── typescript@3.0.3
└── yarn@1.22.10
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
