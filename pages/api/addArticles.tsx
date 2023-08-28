import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../lib/dbConnect';
import Article from '../../models/Article';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const article = await Article.create(req.body);
        res.status(201).json({ success: true, data: article });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
