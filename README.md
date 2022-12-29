# winds-nagaoka/app

This is The Wind Ensemble's data storage which contains concert history, practice, etc...

## Environment and install

[Express](https://expressjs.com/)(Node.js) and [NeDB](https://github.com/louischatriot/nedb).

Install dependencies.

```
yarn install
```

## Make database

Run `make.sh` to create database.

```
# chmod +x make.sh
# ./make.sh
```

## Run server

This command will run make.sh also.

```
yarn start
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