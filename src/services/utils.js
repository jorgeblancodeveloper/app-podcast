const getSelectedPodcast = (podcastList, id) => {
  return podcastList.feed?.entry.filter(
    (el) => el.id.attributes["im:id"] === id
  )[0];
};

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const getDifferenceTime = (data) => {
  const date1 = new Date();
  const date2 = new Date(data);
  const diffTime = Math.abs(date2 - date1);
  const diffMin = diffTime / (1000 * 60);
  return diffTime / (1000 * 60 * 60 * 24);
  // return diffMin;
};

export { millisToMinutesAndSeconds, getSelectedPodcast, getDifferenceTime };

