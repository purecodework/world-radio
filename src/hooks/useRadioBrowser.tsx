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

const useRadioBrowser = (query) => {
  const [isLoading, setIsLoading] = useState(false);
  const [radios, setRadios] = useState([{}]);
  // let initQuery = {
  //   countryCode: "US",
  //   tagList: ["jazz"],
  //   offset: 0,
  //   limit: 50,
  //   lastCheckOk: true,
  // };

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

  return { getStations, isLoading, radios };
};

export default useRadioBrowser;
