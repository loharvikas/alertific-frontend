
import {React, useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import Result from './Result';
import './Search.css';
import ReactFlagsSelect from 'react-flags-select';

const Loader = () => {
  return (
      <div class="loader">
          <div class="loader__element"></div>
      </div>
  )
}


const Search = (props) => {
    const [appList, setAppList] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [country, setCountry] = useState('');
    const platform = props.match.params.platform;
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
        () => {
          if (debouncedSearchTerm) {
            setIsSearching(true);
            fetchApps(debouncedSearchTerm).then((results) => {
              setIsSearching(false);
              setAppList(results);
            });
          } else {
            setAppList([]);
            setIsSearching(false);
          }
        },
        [debouncedSearchTerm] // Only call effect if debounced search term changes
      );

    function fetchApps(appName) {
        if(appName.length > 0) {
            console.log({appName})
            return (     
                axios
                    .get(`/api/${platform}/${appName}/${country}/`)
                    .then((res) => res.data)
                    .catch((err) => {
                        console.error(err);
                        return []
                    })
            )
        }
    }

    return (
        <div className="container">

            <div className="header">
                <h1>Search for an app</h1>
            </div>
            <div className="form-container">
                {isSearching && <Loader />}
                <form classNam="form">
                    <div className="form-control" id="countries">
                      <p className="input-info">Which country/region would you like to track?</p>
                      <ReactFlagsSelect
                              selected={country}
                              onSelect={code => setCountry(code)}
                          />
                    </div>
                    <div className="form-control">
                        <input  id='app' 
                                className="app-input" 
                                placeholder="Enter your app name here..."
                                onChange={e => setSearchTerm(e.target.value)}
                                disabled={ country ? false : true  }
                                >
                        </input>
                    </div>
                </form>
            </div>
            { !isSearching && <Result app_list = {appList} platform={platform} country={country}/> }
        </div>
    )
}

function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        // Update debounced value after delay
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        // Cancel the timeout if value changes (also on delay change or unmount)
        // This is how we prevent debounced value from updating if value is changed ...
        // .. within the delay period. Timeout gets cleared and restarted.
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
  }

export default withRouter(Search)