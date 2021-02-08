## List of databases
```
$ \l
```

## Connect a database
```
$ \c <datbase>
```

## List of relations
```
$ \dt
```

## Exit
```
$ \q
```

## Dump
```
$ pg_dump -h localhost -p 5432 -U user -W --table="<table>" --data-only --column-inserts <database> > <output>.sql
```

## DDL & DCL
```
$ CREATE DATABASE <datbase>;
$ CREATE USER <username> WITH PASSWORD '<password>';
$ ALTER ROLE <username> SET client_encoding TO 'utf8';
$ ALTER ROLE <username> SET default_transaction TO 'read committed';
$ ALTER ROLE <username> SET timezone TO 'UTC';
$ GRANT ALL PRIVILEGES ON DATABASE <datbase> TO <username>;
```