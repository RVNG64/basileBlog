import dbConnect from '../../lib/dbConnect';
import Article from '../../models/Article';

export default async function handler(req, res) {
  await dbConnect();
  const { slug } = req.query; // utiliser le slug du query

  console.log(`Slug reçu: ${slug}`);

  if (!slug) {
    return res.status(400).json({ success: false, message: "Slug manquant" });
  }

  if (req.method === 'PUT') {
    console.log("Data reçue:", req.body);  // Debugging

    try {
      const article = await Article.findOneAndUpdate({ slug }, req.body, {
        new: true,
        runValidators: true,
      });

      if (!article) {
        return res.status(404).json({ success: false });
      }

      res.status(200).json({ success: true, data: article });
    } catch (error) {
      console.error(error);  // Debugging
      res.status(400).json({ success: false, error: error.message });
    }

  } else {
    res.status(400).json({ success: false });
  }
}
