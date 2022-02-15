import { useState, useCallback, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import cleanData from "../utilities/cleanData";
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
  const [radios, setRadios] = useState([]);
  const [query, setQuery] = useState({
    name: "",
    countryCode: "AU",
    tagList: ["Music"],
    offset: 30,
    limit: 30,
    lastCheckOk: true,
  });
  const [currRadio, setCurrRadio] = useState(radios[0]);
  const handleCurrRadio = (radio) => {
    setCurrRadio(radio);
  };

  const scrollLoading = () => {
    setQuery({ ...query, offset: query.offset + 30 });
  };

  const handleNewQuery = (newQuery) => {
    setRadios("");
    setQuery(newQuery);
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
          let cleanedData = cleanData(data);
          console.log(cleanedData);
          setIsLoading(false);
          setRadios([...radios, ...cleanedData]);
        });
    } catch (e) {
      console.log(e);
    }
  };
  // set init stations
  useEffect(() => {
    getStations(query);
  }, [query]);

  return {
    currRadio,
    setCurrRadio,
    handleCurrRadio,
    setRadios,
    scrollLoading,
    query,
    setQuery,
    getStations,
    isLoading,
    radios,
    handleNewQuery,
  };
};

export default useRadioBrowser;
