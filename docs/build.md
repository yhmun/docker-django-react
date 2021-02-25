## Frontend: React
```
$ node -v
v14.15.4  # mac
v10.19.0  # ubuntu 20.04
$ npm -v
6.14.10   # mac
6.14.4    # ubuntu 20.04
$ sudo npm install -g npm@latest
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

## Backend: Migration
```
(vend) $ python manage.py makemigrations <app>
(vend) $ python manage.py sqlmigrate <app> 0001
(vend) $ python manage.py migrate
(vend) $ python manage.py showmigrations
(vend) $ python manage.py migrate --fake <app> zero
(vend) $ python manage.py migrate <app> zero

(vend) $ python manage.py migrate --fake base zero
```

## Backend: Django Apps
```
# React and Django: Your guide to creating an app
# https://blog.logrocket.com/creating-an-app-with-react-and-django/
# React: Building an Interface
# https://www.linkedin.com/learning/react-js-building-an-interface-2
(vend) $ mkdir -p apps/base
(vend) $ django-admin startapp base apps/base
(vend) $ python manage.py makemigrations base
(vend) $ python manage.py migrate base

# https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react
(vend) $ mkdir -p apps/todo
(vend) $ django-admin startapp todo apps/todo
(vend) $ python manage.py makemigrations todo
(vend) $ python manage.py migrate todo

# https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf
(vend) $ mkdir -p apps/blog
(vend) $ django-admin startapp blog apps/blog
(vend) $ python manage.py makemigrations blog
(vend) $ python manage.py migrate blog
```

## Frontend: React Apps
```
# Essential
$ npm install --save react-router-dom
$ npm install --save redux react-redux redux-thunk redux-logger reselect
$ npm install --save axios clsx 
$ npm install --save moment react-moment
$ npm install --save chart.js react-chartjs-2
$ npm install --save react-perfect-scrollbar
$ npm install --save --legacy-peer-deps react-helmet-async
$ npm install --save @material-ui/core @material-ui/icons @material-ui/styles
$ npm install --save react-icons
```
```
# Optional
$ npm install --save bootstrap jquery
$ npm install --save --legacy-peer-deps reactstrap
```
```
# Building Modern Projects with React
# https://www.linkedin.com/learning/building-modern-projects-with-react

# React and Django: Your guide to creating an app
# https://blog.logrocket.com/creating-an-app-with-react-and-django/

# React: Building an Interface
# https://www.linkedin.com/learning/react-js-building-an-interface-2
$ npm install --save bootstrap lodash jquery popper.js react-icons 

# React: Creating and Hosting a Full-Stack Site
# https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site

# https://medium.com/swlh/how-to-deploy-django-rest-framework-and-react-redux-application-with-docker-fa902a611abf
$ npm install --save antd
```

### package.json
```
  "scripts": {
    "start": "PORT=3000 react-scripts start",
    "build": "react-scripts --max_old_space_size=4096 build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

### npm commands
```
$ npm list --depth=n --prod --dev --global --json
$ npm uninstall --save <package>
```

### npm packages
```
$ npm list --prod --depth=0
├── @material-ui/core@4.11.3
├── @material-ui/icons@4.11.2
├── @testing-library/jest-dom@5.11.9
├── @testing-library/react@11.2.5
├── @testing-library/user-event@12.7.1
├── axios@0.21.1                        # Promise based HTTP client for the browser and node.js
├── chart.js@2.9.4                      # Simple HTML5 charts using the canvas element.
├── clsx@1.1.1                          # A tiny (228B) utility for constructing className strings conditionally.
├── moment@2.29.1                       # Parse, validate, manipulate, and display dates
├── react-chartjs-2@2.11.1              # React-chartjs-2
├── react-dom@17.0.1                    # React package for working with the DOM.
├── react-helmet-async@1.0.7            # Thread-safe Helmet for React 16+ and friends
├── react-icons@4.2.0                   # SVG React icons of popular icon packs using ES6 imports
├── react-moment@1.1.1                  # React component for the moment date library.
├── react-perfect-scrollbar@1.5.8       # A react wrapper for perfect-scrollbar
├── react-redux@7.2.2                   # Official React bindings for Redux.
├── react-router-dom@5.2.0              # DOM bindings for React Router
├── react-scripts@4.0.2                 # This package includes scripts and configuration used by Create React App.
├── react@17.0.1                        # React is a JavaScript library for building user interfaces.
├── redux-logger@3.0.6                  # Logger for Redux
├── redux-thunk@2.3.0                   # Thunk middleware for Redux.
├── redux@4.0.5                         # Redux is a predictable state container for JavaScript apps.
└── reselect@4.0.0                      # Selectors for Redux.
```
```
├── reactstrap@8.9.0
├── web-vitals@1.1.0
└── whatwg-fetch@3.5.0                  # A window.fetch polyfill.
```
```
$ npm list --global --depth=0 
/usr/local/lib
├── @angular/cli@6.2.3
├── npm@7.5.4
├── protractor@5.4.1
├── tslint@5.11.0
└── typescript@3.0.3
```

### React Libraries
1. Redux: A Predictable State Container for JS Apps
2. React Router: The routing library which helps with navigation in the React app and is based on the concept of declarative routing
3. React Select: A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.
4. React-Virtualized: React-Virtualized is primarily used to efficiently render large lists and tabular data.
5. React Bootstrap: is the React port for the most popular front-end framework Bootstrap.
6. React DnD: helps you build complex drag and drop interfaces while still keeping your components decoupled.
7. React-Toastify: helps add toast notification to your app with complete ease.
8. React Datepicker
9. React Chartjs


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
