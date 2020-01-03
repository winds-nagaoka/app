# winds-nagaoka/app

This is The Wind Ensemble's data storage which contains concert history, practice, etc...

## Environment and install

[Express](https://expressjs.com/)(Node.js) and [NeDB](https://github.com/louischatriot/nedb).

Install dependencies.

```
npm i
```

## Create database

Run `/asset/all.h` to create database.

```
# cd asset
# ./all.h
```

Run `/asset/copy.h` to copy database for deploy.

```
# ./copy.h
```

## Run server

```
node app.js
```

Running web server at port 3007.

## Update databse

First, update data.
Refer to existing data for data 
Data configration.

- `/asset/archive/concert`: Concert data
- `/asset/practice/practice`: Practice history
- `/asset/source/source`: Reference source data

After, create databases.