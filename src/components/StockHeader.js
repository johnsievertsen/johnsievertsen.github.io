import React, { useState } from 'react';

export const StockHeader = () => {
    const apiKey = 'njQpnuG5E_H9zRDRLVvJUvofF1cuWpEt';
    const [ticker, setTicker] = useState('')
    const [timeMultiplier, setTimeMultiplier] = useState(1);
    const [timeSpan, setTimeSpan] = useState('week');
    const today = new Date().toLocaleDateString('en-us', { year: "numeric", month: "numeric", day: "numeric" });
    const formattedDay = (day) => {
        day = day.split('/');
        day[0] = `0${day[0]}`;
        const year = day[2];
        day.splice(2, 1);
        return [year, ...day].join('-');
    }
    const [sort, setSort] = useState('asc');
    const [limit, setLimit] = useState(120);
    const apiEndpoint = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/${timeMultiplier}/${timeSpan}/${formattedDay(today)}/${formattedDay(today)}?adjusted=true&sort=${sort}&limit=${limit}&apiKey=${apiKey}`;
    const [url, setUrl] = useState('');
    const [data, setData] = useState({});
    ///////////////////////////////////////////////////////////////////////////////////// 
    React.useEffect(() => {
        const fetchRequest = async () => {
            await fetch(url)
                .then((data) => data.json())
                .then((result) => setData(result));
        };
        fetchRequest();
        console.log(data);
    }, [url, ticker]);
    ///////////////////////////////////////////////////////////////////////////////////// 
    const [openPrice, setOpenPrice] = useState(0);
    const [closePrice, setClosePrice] = useState(0);
    const [highPrice, setHighPrice] = useState(0);
    const [lowPrice, setLowPrice] = useState(0);
    const [volume, setVolume] = useState(0);
    const [tickerPlaceHolder, setTickerPlaceHolder] = useState('');

    function handleFetchData() {
        setTicker(tickerPlaceHolder);
        console.log(ticker)
        setUrl(apiEndpoint);
        defineData(data);
        console.log(data, url);
    }

    function handleChangeTicker(e) {
        setTickerPlaceHolder(e.target.value);
        console.log(tickerPlaceHolder)
    }

    function handleChangeTimeSpan(e) {
        setTimeSpan(e.target.value);
    }

    function defineData(data) {
        if (data.results) {
            setClosePrice(`$${data.results[0].c}`);
            setHighPrice(`$${data.results[0].h}`);
            setLowPrice(`$${data.results[0].l}`);
            setOpenPrice(`$${data.results[0].o}`);
            setVolume(data.results[0].v)
        }
    }

    return (
        <span className='stock-header'>
            <p className='stock-title'>Market</p>
            <div className='data-container options'>
                <input type='text' onChange={handleChangeTicker} className='ticker' placeholder='Enter a ticker' />
                <p>Over the last &nbsp;</p>
                <select className='select-timespan' onChange={handleChangeTimeSpan}>
                    {/* <option value='day'>day</option> */}
                    <option value='week'>week</option>
                    <option value='month'>month</option>
                    <option value='quarter'>quarter</option>
                    <option value='year'>year</option>
                </select>
                &nbsp;&nbsp;
            </div>
            <button className='stock' onClick={handleFetchData}>Fetch</button>
            <div className='data-container btn'>
                <div style={{ marginLeft: '10px' }}>
                    <p>opened at: {openPrice}</p>
                    <p>closed at: {closePrice}</p>
                </div>
            </div>
            <div className='data-container data'>
                <p className='no-margin'>peaked at: {highPrice}</p>
                <p className='no-margin'>dipped to: {lowPrice}</p>
                <p className='no-margin'>had a volume of: {volume}</p>
            </div>
        </span >
    )
}