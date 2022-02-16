import { useState, useCallback, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import cleanData from "../utilities/cleanData";
/**
 *  return isLoading, sendRequest()
 *
 */

interface queryParams {
  name: string;
  countryCode: string;
  tag: string;
  offset: number;
  limit: number;
}

const useRadioBrowser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [radios, setRadios] = useState([]);
  const [query, setQuery] = useState({
    countryCode: "",
    tag: "Jazz",
    name: "",
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

  /**
   * @param query
   * countryCode: something is inconsistency with the original API
   * countryCode with empty String will return radios whose countryCode is empty
   * NOT ALL Countries
   * This works differently from "state" query parameter
   * tried countryCode = * and undefined, not works
   * Have to make a separate query
   */

  const getStations = async (query: queryParams) => {
    try {
      setIsLoading(true);
      const api = new RadioBrowserApi("world-radio");
      let resData;
      // query with countryCode?
      if (query.countryCode) {
        resData = await api
          .searchStations({
            countryCode: query.countryCode,
            name: query.name,
            tag: query.tag,
            offset: query.offset,
            limit: query.limit,
          })
          .then((data) => {
            let cleanedData = cleanData(data);
            console.log(cleanedData);
            setIsLoading(false);
            setRadios([...radios, ...cleanedData]);
          });
      } else {
        // query without country code
        resData = await api
          .searchStations({
            name: query.name,
            tag: query.tag,
            offset: query.offset,
            limit: query.limit,
            removeDuplicates: true,
          })
          .then((data) => {
            let cleanedData = cleanData(data);
            console.log(cleanedData);
            setIsLoading(false);
            setRadios([...radios, ...cleanedData]);
          });
      }
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
