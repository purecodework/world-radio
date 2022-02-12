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

const useRadioBrowser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [radios, setRadios] = useState([{}]);
  let initQuery = {
    countryCode: "US",
    tagList: ["jazz"],
    offset: 1,
    limit: 10,
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
          console.log(data);
          setIsLoading(false);
          setRadios(data);
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

export default useRadioBrowser;
