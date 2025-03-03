import React from 'react'
import Article from './Article'
import blogData from '../data/blog'


function ArticleList(){
    const articleList = blogData.posts.map(article => {
        console.log("article: ", article)
        return <Article key={article.id} title={article.title} preview={article.preview} date={article.date}/>
    })

    console.log("article list: ", articleList)

    return (
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList