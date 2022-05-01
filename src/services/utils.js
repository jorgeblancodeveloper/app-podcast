export const getPodcastContent = (podcastList, id) => {
  return podcastList.feed?.entry.filter(
    (el) => el.id.attributes["im:id"] === id
  )[0];
};

export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const getDifferenceTime = (data) => {
  const date1 = new Date();
  const date2 = new Date(data);
  const diffTime = Math.abs(date2 - date1);
  const diffMin = diffTime / (1000 * 60);

  //Use minutes instead of days in DEV mode
  return process.env.REACT_APP_VERSION === "dev"
    ? diffMin
    : diffTime / (diffMin * 60 * 24);
};

export const logDebug = (...msj) => {
  if (process.env.REACT_APP_VERSION === "dev") {
    console.log(...msj);
  }
};

export const savePodcastListToLocal = (data) => {
  localStorage.setItem("podcastList", data);
};
export const saveEpisodeListToLocal = (data) => {
  localStorage.setItem("episodeList", data);
};

export const readPodcastListFromLocal = () =>
  JSON.parse(localStorage.getItem("podcastList"));
export const readEpisodeListFromLocal = () =>
  JSON.parse(localStorage.getItem("episodeList"));
