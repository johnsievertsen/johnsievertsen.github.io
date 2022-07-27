import React from 'react';
import { SearchArticle } from './SearchArticle';

export const BodySearch = (articles) => {
    let articleData = articles.articles.response;

    const itemComp = articleData ? articleData.docs.map(article => {
        return (
            <SearchArticle
                key={article.uri}
                article={article}
            />
        )
    }) : [];

    return (
        <span className="body-container">
            {itemComp}
        </span>
    )
}