import express from 'express';
import type { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { getArchivos } from "../routes/archivos";
import { createContent, getContents, removeContent, updateContent } from "../routes/contents";
import { getFirestoreDocument } from "../routes/firestore";
import { createToken, verifyToken } from '../routes/auth';

export const server = { 
  cors: {
    origin: ['http://localhost:8080'],
    credentials: true,
  },
  healthCheck: {
    path: '/rest/health-check',
    data: { 
      status: 'healthy',
      timestamp: Date.now(),
      uptime: process.uptime(),
    },
  },
  extendExpressApp: (app: any, commonContext: any) => {
    app.use(express.json());
    app.use(bodyParser.urlencoded({
      extended: true,
    }));
    app.use('/', (req: Request, res: Response, next: Function) => {
      next();
    });
    app.use('/rest', async (req: Request, res: Response, next: Function) => {
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');

      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

      /*
        WARNING: normally if you're adding custom properties to an
        express request type, you might extend the global Express namespace...
        ... we're not doing that here because we're in a Typescript monorepo
        so we're casting the request instead :)
      */
      (req as any).context = await commonContext.withRequest(req, res);
      next();
    });

    app.get('/rest/archivos', getArchivos);
    app.get('/rest/firestore/:id', getFirestoreDocument);

    app.get('/rest/contents', getContents);
    app.patch('/rest/contents/:id', updateContent);
    app.post('/rest/contents', createContent);
    app.delete('/rest/contents/:id', removeContent);

    app.post('/rest/token', createToken);
    app.post('/rest/token/verifiy', verifyToken);
    //app.post('/api/graphql', graphQLResponse);
  },
};