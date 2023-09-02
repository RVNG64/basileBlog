import React from 'react';
import { articleList } from './articleList/articleList';

export default function StartWithWhy() {

  return (
    <div>
      <h1>
        Commencer par le Pourquoi ?
      </h1>
      <p>
        Pourquoi est-ce que je veux créer mon entreprise ? Qu'est-ce qui me motive ? Qu'est-ce qui me fait vibrer ? Qu'est-ce qui me fait me lever le matin ? Qu'est-ce qui me fait avancer ? Qu'est-ce qui me fait me battre ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ? Qu'est-ce qui me fait me surpasser ? Qu'est-ce qui me fait me dépasser ?
      </p>
      <p>Auteur : {articleList[1].author}</p>
      <p>Créé le : 02/09/2023</p>
      <p>Tags : {articleList[1].tags}</p>
    </div>
  )
}
