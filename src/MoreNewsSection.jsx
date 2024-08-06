import { useState, useEffect } from "react"
import '../public/css/moreNews.css'

export default function MoreNewsSection() {

    const [moreNews, setMoreNews] = useState([])
    const apiKey = 'BA3kOboK5hUGflrUXljIlX-sSXgGQXpDDOnZazHQ47NWpneb';

    const url = `https://api.currentsapi.services/v1/search?page_size=8&page_number=2&apiKey=${apiKey}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMoreNews(data.news)
                console.log(data)
            }
            )
    }, [])

    return (
        <>
            <div key={'moreNews'} className="moreNews-article-container">
                {moreNews.map((article, index) => {
                    return (

                        <div key={"moreNews" + index} className="moreNews-article">
                            
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <a href={article.url} target="_blank" key={"moreNews" + index}><h3>{article.title}</h3></a>
                                <p>{article.description}</p>                                
                        </div>
                    )
                })}
            </div>
        </>
    )




}