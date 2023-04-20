import type { Request, Response } from 'express';
import type { Context } from '.keystone/types';

export const getContents = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };

  // Now we can use it to query the Keystone Schema
  const archivos = await context.query.Content.findMany({
    where: {
    },
    query: `
      assetId
      contentId
      contentType
      id
      image {
        url
        height
        filesize
        width
      }
      title
      video {
        filename
        url
        filesize
      }
    `,
  });

  res.json(archivos);
}

export const updateContent = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };

  const { body } = req;
  const { id } =  req.params;
  const content = await context.query.Content.updateOne({
    where: {id},
    data: body,
  })
  console.log(id, body);
  res.json(content);
}

export const createContent = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };

  const { body } = req;
  console.log(body, typeof body);

  const content = await context.query.Content. createOne({
    data: typeof body === 'string'? JSON.parse(body) : body,
  });

  res.json({
    ...content,
    ...body,
  });
}

export const removeContent = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };

  const { id } =  req.params;
  const content = await context.query.Content.deleteOne({
    where: {id},
    query: `
      assetId
      contentId
      contentType
      id
      title`,
  });

  res.json(content);
}