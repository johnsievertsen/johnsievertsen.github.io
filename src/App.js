import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { BodyPop } from './components/BodyPop';
import { BodySearch } from './components/BodySearch';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const apiKey = 'r1znBkuf9haQGaCnxQx7aRP9ufSl0tGP';
  const searchEndPoint = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`;
  const popEndPoint = `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${apiKey}`;
  const [url, setUrl] = useState(popEndPoint);
  const [data, setData] = useState({});
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  React.useEffect(() => {
    const config = {
      method: 'GET'
    }

    const fetchRequest = async () => {
      await fetch(url, config)
        .then((data) => data.json())
        .then((result) => setData(result));
    }
    fetchRequest();
  }, [url]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function handleClickPop() {
    setUrl(popEndPoint);
  }

  function handleSearch(e) {
    e.preventDefault();
    setUrl(searchEndPoint);
  }

  function handleClickRecent() {
    setSearchTerm('');
    setUrl(searchEndPoint);
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <Header
        onClickPop={handleClickPop}
        onSearch={handleSearch}
        onChange={handleChange}
        onClickRecent={handleClickRecent}
        class='header'
      />
      <div className="blank-space"></div>
      <div className="content-container">
        {url === popEndPoint ?
          <BodyPop articles={data} /> :
          <BodySearch articles={data} />
        }
      </div>
    </div>
  );
}

export default App;