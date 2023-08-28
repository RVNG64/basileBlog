import dbConnect from '../../lib/dbConnect';
import Article from '../../models/Article';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const articles = await Article.find({}); // Récupère tous les articles

      res.status(200).json({ success: true, data: articles });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
}
