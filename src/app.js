import express from 'express';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import {router} from './controllers';
import { join } from 'path';

export const App = () => {

    const app = express()
    app.use(compression())
    app.use(
        cors({
          origin: environment.client.origin,
          credentials: true // access-control-allow-credentials:true
        })
      )
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(join(__dirname, "..", "client")));
    app.use('/api/v1/', router);
  
}