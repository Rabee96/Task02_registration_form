import http from 'http';
import app from './app';

const port = 4000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`this port is listening on port ${port} => http://localhost:4000`);
})