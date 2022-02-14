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

  const cleanData = (data) => {
    // filter: clean out radios that does not have a icon
    let newData = [...data].filter((x) => x.favicon != "");
    // clean duplicate stations by comparing station names and homepages
    for (let i = 0; i < newData.length - 1; i++)
      if (
        // station names to lower case, remove space
        newData[i].name.toLowerCase().replace(/ /g, "") ===
          newData[i + 1].name.toLowerCase().replace(/ /g, "") ||
        // compare homepage
        newData[i].homepage === newData[i + 1].homepage
      ) {
        newData.splice(i, 1);
      }
    return newData;
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
          setRadios(cleanedData);
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
