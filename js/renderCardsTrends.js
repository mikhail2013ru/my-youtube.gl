const trendingList = document.querySelector('.trending-list')

const createCardTrends = (dataVideo) => {
    const imgUrl = dataVideo.snippet.thumbnails.high.url
    const videoId = dataVideo.id.videoId
    const titleVideo = dataVideo.snippet.title
    const dateVideo = dataVideo.snippet.publishedAt
    const channelTitle = dataVideo.snippet.channelTitle
    const videoViews = dataVideo.statistics.viewCount
    
    const card = document.createElement('div')
    card.classList.add('video-card-trending')
    card.innerHTML =`
            <div class="video-thumb">
                <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
                </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
              <span class="video-counter-trending">
                <span class="video-views">${videoViews} views</span>
                <span class="video-date-trending">${dateVideo}</span>
              </span>
              <span class="video-channel">${channelTitle}</span>
            </div>`
    return card
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';

    listVideo.forEach(item => {
        let card = createCardTrends(item)
        wrapper.append(card)
    });
}

createList(trendingList, trending)


