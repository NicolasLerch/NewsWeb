import { useState, useEffect } from "react";
import '../public/css/mainNews.css'

export default function MainNews() {
    const [mainNews, setMainNews] = useState([]);
    const [asideNews, setAsideNews] = useState([]);

    const apiKey = 'BA3kOboK5hUGflrUXljIlX-sSXgGQXpDDOnZazHQ47NWpneb';

    const url = `https://api.currentsapi.services/v1/search?page_size=1&apiKey=${apiKey}`;
    const asideNewsUrl = `https://api.currentsapi.services/v1/search?page_size=4&page_number=2&apiKey=${apiKey}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMainNews(data.news)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch(asideNewsUrl)
            .then(res => res.json())
            .then(data => {
                setAsideNews(data.news)
                console.log(data)
            })
    }, [])

    return (
        <>
            <div className="mainNews-container">
                <div className="mainArticle">
                    {mainNews.length > 0 && (
                        <>
                            {mainNews[0].image === "None" ? (
                                <img src="/images/no-image.jpg" alt="Loading" />
                            ) : (
                                <img src={mainNews[0].image} alt={mainNews[0].title} />
                            )}
                            <a href={mainNews[0].url} target='_blank' rel='noopener noreferrer'><h3>{mainNews[0].title}</h3></a>
                            <p>{mainNews[0].description}</p>
                        </>
                    )}
                </div>
                <div className="otherArticles">
                    {asideNews.map((article, index) => {
                        return (
                            <div key={`otherArticle${index}`} className="asideArticle">
                                {article.image === "None" ? (
                                    <img src="/images/no-image.jpg" alt="Loading" />
                                ):(
                                    <img src={article.image} alt={article.title} />
                                )}
                                <a href={article.url} target='_blank'><h4>{article.title}</h4></a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}