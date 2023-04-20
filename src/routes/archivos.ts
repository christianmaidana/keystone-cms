import type { Request, Response } from 'express';
import type { Context } from '.keystone/types';

export const getArchivos = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };

  // Now we can use it to query the Keystone Schema
  const archivos = await context.query.Archivo.findMany({
    where: {
    },
    query: `
      description
      id
      path
      avatar {
        id
        url
        filesize
      }
    `,
  });
  // And return the result as JSON
  res.json(archivos);
}