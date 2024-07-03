import React, { useEffect, useState } from 'react'
import getData from '../api.js';
import Article from './Article';

function Articles(props) {
  const [news, setNews] = useState([]);
  useEffect(function () {
    async function dailyNews() {
      const res = await getData();
      setNews(res.data);
    }
    dailyNews();
  }, [])
  return (
    <div>
      {news.map(function (article) {
        return <Article article={article} />
      })}
    </div>
  )
}

export default Articles;