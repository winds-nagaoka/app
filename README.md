# winds-nagaoka/app

This is The Wind Ensemble's data storage which contains concert history, practice, etc...

## Environment and install

[Express](https://expressjs.com/)(Node.js) and [NeDB](https://github.com/louischatriot/nedb).

Install dependencies.

```
npm install
```

## Create database

Run `script.h` to create database.

```
# chmod +x script.h
# ./script.h
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

- `/asset/concert`: Concert data
- `/asset/practice`: Practice history
- `/asset/source`: Reference source data

After, create databases.