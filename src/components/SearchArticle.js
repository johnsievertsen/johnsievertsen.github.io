import React from 'react';

export const SearchArticle = (article) => {
    const articleData = article.article;
    function getLink(articleData) {
        return articleData.multimedia[0] ? `https://static01.nyt.com/${articleData.multimedia[0].url}` : 'https://cdn1.vectorstock.com/i/thumb-large/50/20/no-photo-or-blank-image-icon-loading-images-vector-37375020.jpg';
    }

    return (
        <div className="articles-container">
            <img className='cover-photo' src={getLink(articleData)} />
            <br />
            <span className='info-container'>
                <a href={articleData.web_url} target="_blank" className="article-title">{articleData.headline.main}</a>
                <p className="article-preview">{articleData.abstract}</p>
                <p>{articleData.byline.original}</p>
                <p>Published: {articleData.pub_date.slice(0, 10)}</p>
            </span>
        </div>
    );
};