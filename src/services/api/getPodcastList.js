const getPodcastList = () => {
    const apiKey = "be61808705057db2b8bb4afc82ef5b1c";
    return fetch(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
    ).then((response) => response.json());
  };
  export default getPodcastList;
  