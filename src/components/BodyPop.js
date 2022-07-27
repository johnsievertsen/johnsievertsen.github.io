import React from 'react';
import { PopArticle } from './PopArticle';

export const BodyPop = (articles) => {
    const dataArray = articles.articles.results;
    const itemComp = dataArray ? dataArray.map(article => {
        return (
            <PopArticle
                key={article.id}
                article={article}
            />
        )
    }) : [];

    return (
        <span className="body-container">
            {itemComp}
        </span>
    )
};