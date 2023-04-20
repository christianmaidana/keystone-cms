import type { Request, Response } from 'express';
import type { Context } from '.keystone/types';

const mockData = {
  assetId: 'AA-25DB626E52112',
  contentId: 'rrn:content:episode-videos:0064de25-2cc3-41af-ba2f-dd94c504bf57',
  description: 'At a young age Emiway Bantai discovered Eminem and he knew who he wanted to be. He has found his unique voice from the culture and community around him.',
  resources: [
    {
      mimeType: 'video/mp4',
      resourceType: 'proxy_normal',
      url: 'https://cs.liiift.io/v1/RBMN/pd/2/3C/72/UT/85/BH/13/FO-23C72UT85BH13.mp4/a:h/FO-23C72UT85BH13_proxy_normal.mp4?ht=exp=1711887762+hmac=3dec3b04f66e8a8e4693674ba0bb9b2b',
    }
  ],
  title: 'Emiway Bantai',
  vin: 'MI201807310213',
};

export const getFirestoreDocument = async (req: Request, res: Response) => {
  const { context } = req as typeof req & { context: Context };
  res.json(mockData);
}