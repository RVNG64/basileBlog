import dbConnect from '../../lib/dbConnect';
import Article from '../../models/Article';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'DELETE') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'L\'id doit être fourni', success: false });
    }

    try {
      const deletedArticle = await Article.findByIdAndDelete(id);

      if (!deletedArticle) {
        return res.status(404).json({ error: 'Article non trouvé', success: false });
      }

      return res.status(204).json({ success: true }); // Retourner success: true
    } catch (error) {
      return res.status(500).json({ error: 'Une erreur est survenue lors de la suppression', success: false });
    }
  }

  return res.status(405).json({ error: 'Méthode non autorisée', success: false });
}
