const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCpMWhxcdDtQT42P6u9yqqxg&part=snippet%2Cid&order=date&maxResults=9';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ddadf9feb3msha75b6f49078b065p119ad5jsn57b9170d6a71',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};


const content = null || document.getElementById('content')

async function fetchData(urlAPi) {
  const response = await fetch(urlAPi, options);
  const data = await response.json();
  console.log(data)
  return data;
}

(async () => {
  const videos = await fetchData(API);
  try {
    let view = videos.items.map(
      (video) => `
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.tittle}
          </h3>
        </div>
    </div>
    `
    ).slice(0,4).join('');
    content.innerHTML = view;
  } catch (error) {
    console.error(error);
  }
})();
