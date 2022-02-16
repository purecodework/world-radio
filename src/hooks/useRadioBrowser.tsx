import { useState, useCallback, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import cleanData from "../utilities/cleanData";
import { queryParams, radio } from "../types";

/**
 * hooks
 * @returns { currRadio,scrollLoading,getStations,handleNewQuery ...}

 *  currRadio: current playing video
 *  scrollLoading: infinite scroll, fetch new data when suer scrolled to bottom
 *  getStations: query method
 *  handleNewQuery: update query, fire getStations in useEffect which dep is query
 */

const useRadioBrowser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [radios, setRadios] = useState<[radio?]>([]);
  const [currRadio, setCurrRadio] = useState<radio>();

  // init query
  const [query, setQuery] = useState<queryParams>({
    countryCode: "",
    tag: "Jazz",
    name: "",
    offset: 30,
    limit: 30,
  });

  // set playing radio
  const handleCurrRadio = (radio: radio) => {
    setCurrRadio(radio);
  };

  // submit new query
  const handleNewQuery = (newQuery: queryParams) => {
    setRadios([]);
    setQuery(newQuery);
  };

  // fetch more radios when user scroll to the bottom of search list
  const scrollLoading = () => {
    setQuery({ ...query, offset: query.offset + 30 });
  };

  /**
   * @param query
   * countryCode: does not work as expected
   * countryCode='' will filter out all countries
   * Must be handled in a separate condition
   */

  const getStations = async (query: queryParams) => {
    try {
      setIsLoading(true);
      const api = new RadioBrowserApi("world-radio");
      let resData;
      // query with countryCode
      if (query.countryCode) {
        resData = await api.searchStations(query).then((data) => {
          let cleanedData = cleanData(data);
          console.log(cleanedData);
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
            setIsLoading(false);
            setRadios([...radios, ...cleanedData]);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // query updates will trigger getStations to fetch data
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
