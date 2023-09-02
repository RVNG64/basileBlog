import React from 'react';
import { articleList } from './articleList/articleList';

export default function LeZebreEtLeLion() {

  return (
    <div>
      <h1>
        Le zèbre et le lion
      </h1>
      <p>
        Un jour, un zèbre et un lion se rencontrent. Le zèbre dit au lion : "Tu vois, moi aussi j'ai une belle crinière !". Le lion répond : "Oui, mais moi, je l'ai sur le coeur".
      </p>
      <p>Auteur : {articleList[2].author}</p>
      <p>Créé le : {articleList[2].createdAt}</p>
      <p>Tags : {articleList[2].tags}</p>
    </div>
  )
}
