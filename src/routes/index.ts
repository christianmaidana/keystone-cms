import type { Request, Response } from 'express';

export const graphQLResponse = async (req: Request, res: Response) => {
    res.status(400).send({
        message: "GraphQL not available"
    });
};