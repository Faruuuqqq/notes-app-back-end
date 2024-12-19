const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.HOST || 'localhost', // Gunakan host dari environment atau localhost
    routes: {
      cors: {
        origin: ['*'], // Izinkan semua origin
      },
    },
  });

  server.route(routes);

  try {
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  } catch (err) {
    console.error('Error saat memulai server:', err);
  }
};

init();
