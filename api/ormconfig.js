/**
* Configurações de bancos mysql
*/
module.exports =
[
    {
         "name": "mysql",
         "type": "mysql",
         "dropSchema": true,
         "host": process.env.HOST_DB,
         "port": process.env.PORT_DB,
         "username": process.env.USERNAME_DB,
         "password": process.env.PASSWORD_DB,
         "database": process.env.DATABASE_DB,
         "migrations": [process.env.TYPE_ORM_MIGRATIONS],
         "cli" : {
             "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
         },
         "entities": [
             process.env.TYPE_ORM_ENTITIES_DIR, 
         ],
         "synchronize": true
     },
     {
         "name": "mysql_test",
         "type": "mysql",
         "dropSchema": true,
         "host": process.env.HOST_DB,
         "port": process.env.PORT_DB,
         "username": process.env.USERNAME_DB,
         "password": process.env.PASSWORD_DB,
         "database": process.env.DATABASE_TEST_DB,
         "migrations": [process.env.TYPE_ORM_MIGRATIONS],
         "cli" : {
             "migrationsDir": process.env.TYPE_ORM_MIGRATIONS_DIR,
         },
         "entities": [
             process.env.TYPE_ORM_ENTITIES_DIR, 
         ],
         "synchronize": true
     }
 ]