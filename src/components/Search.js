import React, {useEffect, useState} from 'react';
import axios from "axios";

const Search = () => {

  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState('programming');
  const [results, setResults] = useState([]);

  // 1. reset the timer when the term changes
  // 2. update debouncedTerm only when the time up
  // 3. when the user changed the search text but immediately (within 1s) changed back,
  //    the program will not do the second query since debouncedTerm does not change
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // the program will run directly when starting up
  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm
        },
      });

      setResults(data.query.search);
    };

    // resolve the case where a user will clear out the input-form
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm])


/*
The code below will query twice in the beginning since the length of results changed
after initialization and the program will re-render
 */
  // useEffect(() => {
  //   const search = async () => {
  //     const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
  //       params: {
  //         action: 'query',
  //         list: 'search',
  //         origin: '*',
  //         format: 'json',
  //         srsearch: term
  //       },
  //     });
  //
  //     setResults(data.query.search);
  //   };
  //
  //   // ensure the program is directly executes when startup
  //   if (term && !results.length) {
  //     search();
  //   } else {
  //
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 500);
  //
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button tiny" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
        </div>
      </div>)
  })

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;