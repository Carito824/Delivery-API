/**
 * Main start
 *
 * To read documentation go to https://github.com/link-loom/loom-svc-js/wiki
 */
const mongoose = require('mongoose');
const { ServerManager } = require('./src/core/server.manager')
const server = new ServerManager({ root: __dirname })

const main = async () => {
  const namespace = '[Server]'
  const dependencies = await server.load()


// *******************************************************************************************************************
///   CONEXION A MONGO ATLAS CON MONGOOSE PARA LUEGO MIGRAR A MONGODB

// Función para verificar la conexión a la base de datos
function checkDatabaseConnection() {
  mongoose.connection.once('open', () => {
    console.log('Conexión a la base de datos Mongo Atlas establecida');
    console.log('localhost:3601/delivery/item');
    console.log('localhost:3601/delivery/menu');
    console.log('localhost:3601/delivery/order');

  });
  mongoose.connection.on('error', (error) => {
    console.error('Error de conexión a la base de datos:', error);
  });
}
// Conecta a la base de datos, para luego colocarla en la parte de importacion de depedencias y configuracion 
mongoose.connect('mongodb+srv://CaritoLe24:Carol2023@cluster0.uhdapby.mongodb.net/delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
// Funcion Para Verifica la conexión a la base de datos
checkDatabaseConnection();
// *******************************************************************************************************************





  // Launching server
  dependencies.console.info(`http://localhost:${dependencies.config.SERVER.PORT}/`, { namespace })
  dependencies.console.info(`http://localhost:${dependencies.config.SERVER.PORT}/open-api.playground`, { namespace })
  dependencies.console.info(`http://localhost:${dependencies.config.SERVER.PORT}/open-api.json`, { namespace })
  dependencies.console.info(`${dependencies.config.SERVER.NAME} v${dependencies.config.SERVER.VERSION}`, { namespace })
  dependencies.console.log(' ------------------------------------')
}

main()
