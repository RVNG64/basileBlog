import axios from 'axios';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicMyCKEditor = dynamic(
  () => import('../components/CKEditor'),
  { ssr: false }
)

console.log("DynamicMyCKEditor est :", DynamicMyCKEditor);

export default function SecretBasileAddArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [theme, setTheme] = useState('');
  const [data, setData] = useState<string>("");
  const [image, setImage] = useState(null);

  function generateSlug(title) {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-_]/g, '');
  }

  const handleAddArticle = async (e) => {
    e.preventDefault();
    const slug = generateSlug(title);
    const article = { title, slug, content, author, tags: tags.split(',') };
    const res = await axios.post('/api/addArticles', article);
    if (res.data.success) {
      setTitle('');
      setContent('');
      setAuthor('');
      setTags('');
      setTheme('');
      setImage(null);
      window.location.href = '/';
    } else {
      console.error('Erreur lors de l\'ajout de l\'article');
    }
  };

  return (
    <div>
      <h2>Ajouter un article</h2>
      <form onSubmit={handleAddArticle}>
        <label>
          Image :
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </label>
        <label>
          Titre :
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Auteur :
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          Thème :
          <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
        </label>
        <label>
          Tags :
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </label>
        <label>
          Contenu :
          <DynamicMyCKEditor
            value={content}
            onChange={(data: string) => setContent(data)}
          />
        </label>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
