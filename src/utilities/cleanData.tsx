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
  // sort by votes
  let sortedData = newData.sort((a, b) => a.votes - b.votes);
  return sortedData;
};

export default cleanData;
