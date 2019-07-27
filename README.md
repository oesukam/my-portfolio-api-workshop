# Restful API for my Portfolio

### How to setup sequelize



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
