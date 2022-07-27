import React from 'react';

export const PopArticle = (article) => {
    const articleData = article.article;
    function getLink(articleData) {
        return articleData.media.length > 0 ? articleData.media[0]['media-metadata'][2].url : 'https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg';
    }

    return (
        <div className="articles-container">
            <img className='cover-photo' src={getLink(articleData)} />
            <br />
            <span className='info-container'>
                <a href={articleData.url} target="_blank" className="article-title">{articleData.title}</a>
                <p className="article-preview">{articleData.abstract}</p>
                <p>{articleData.byline}</p>
                <p>Published: {articleData.published_date}</p>
            </span>
        </div>
    );
};