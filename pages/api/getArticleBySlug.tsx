import dbConnect from '../../lib/dbConnect';
import Article from '../../models/Article';

export default async function handler(req, res) {
  await dbConnect();

  console.log("Requête reçue dans getArticleBySlug");

  if (req.method === 'GET') {
    const { slug } = req.query;

    console.log("Méthode GET détectée");
    console.log("Slug reçu:", slug);

    try {
      const article = await Article.findOne({ slug: slug });

      console.log("Résultat de la recherche:", article);

      if (!article) {
        return res.status(404).json({ success: false, message: 'Article not found' });
      }

      res.status(200).json({ success: true, data: article });
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      res.status(400).json({ success: false });
    }
  } else {
    console.log("Méthode non prise en charge");
    res.status(400).json({ success: false });
  }
}
