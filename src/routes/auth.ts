import type { Request, Response } from 'express';
import type { Context } from '.keystone/types';
import jwt from 'jsonwebtoken';

const _secret = 'secret';


export const createToken = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };
  const { session } = context;
  
  if (session) {
    const { data } = session;
    console.log(`Creating token...`, session);
    const token = jwt.sign(data, _secret);
    res.json()
  } else {

  }
  res.json({});
}

export const verifyToken = async (req: Request, res: Response, next: Function) => {
  const { context } = req as typeof req & { context: Context };
  const token = '';
  try {
    var decoded = jwt.verify(token, _secret);
    res.json();
  } catch(err) {
    res.status(401);
  }
};