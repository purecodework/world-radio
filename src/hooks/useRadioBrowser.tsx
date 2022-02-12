import { useState, useCallback, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
/**
 *  return isLoading, sendRequest()
 *  sendRequest takes url, method, body, and headers, return json response
 */

interface queryParams {
  countryCode: string;
  tagList: string[];
  offset: number;
  limit: number;
}

const useRadio = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [radios, setRadios] = useState([{}]);
  let initQuery = {
    countryCode: "US",
    tagList: ["jazz"],
    offset: 1,
    limit: 5,
  };

  const getStations = async (query: queryParams) => {
    try {
      setIsLoading(true);
      const api = new RadioBrowserApi("world-radio");
      let resData;
      resData = await api
        .searchStations({
          countryCode: query.countryCode,
          tagList: query.tagList,
          offset: query.offset,
          limit: query.limit,
        })
        .then((data) => {
          setIsLoading(false);
          setRadios([...data, ...radios]);
        });
    } catch (e) {
      console.log(e);
    }
  };
  // set init stations
  useEffect(() => {
    getStations(initQuery);
  }, []);

  return { getStations, isLoading, radios };
};

export default useRadio;
