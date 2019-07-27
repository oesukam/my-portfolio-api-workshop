# Restful API for my Portfolio

### How to setup sequelize

ENVIRONMENT VARIABLE
`DATABASE_URL=postgres://username:password@localhost:5432/db_name
`

- Step 1: Run `npm install -g sequelize-cli`

- Step 2: Run `npm install sequelize pg pg-hstore dotenv`

- Step 3: create a file called `.sequelizerc` and copy the code below:

```
const path = require("path");
require('dotenv').config();

module.exports = {
  "config": path.resolve("database", "config", "config.json"),
  "models-path": path.resolve("database",  "models"),
  "seeders-path": path.resolve("database",  "seeders"),
  "migrations-path": path.resolve("database",  "migrations")
}
```

- Step 4: Run `sequelize init`


### How create sequelize model

- Run: `sequelize model:create --name ModelName --attributes attrName:attrType`
- Create the education's model: `sequelize model:create --name Education --attributes id:uuid,school:string,degree:string,fromYear:date,toYear:date,major:string`
