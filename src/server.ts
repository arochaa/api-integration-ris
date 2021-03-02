import env from './schemas/environment';
import server from './app';

const port = env.PORT || 9999;

server.listen(port, () => {
  console.log(`🔷 Server Running in Port: ${port} ⚡⚡⚡⚡`);
});
