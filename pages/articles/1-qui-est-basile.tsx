import React from 'react';
import { articleList } from './articleList/articleList';

export default function QuiEstBasile() {

  return (
    <div>
      <h1>
        Qui est Basile ?
      </h1>
      <p>
        Basile est un jeune développeur web de 21 ans, actuellement en formation à la Wild Code School de Reims.
      </p>
      <p>Auteur : {articleList[0].author}</p>
      <p>Créé le : {articleList[0].createdAt}</p>
      <p>Tags : {articleList[0].tags}</p>
    </div>
  )
}
