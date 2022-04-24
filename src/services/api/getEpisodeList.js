 const getEpisodeList = id => {
//   return fetch(
//     `https://itunes.apple.com/lookup?id=${id}`).then((response) => response.json());
// };




return fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=100`)}`)
.then(response => {
	if (response.ok) return response.json()
	throw new Error('Network response was not ok.')
})
 }
export default getEpisodeList;
