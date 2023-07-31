const gloAcademyList = document.querySelector('.glo-academy-list')
const trendingList = document.querySelector('.trending-list')
const musicList = document.querySelector('.music-list')

const createCard = (dataVideo) => {
    const imgUrl = dataVideo.snippet.thumbnails.high.url
    const videoId = dataVideo.id.videoId
    const titleVideo = dataVideo.snippet.title
    const dateVideo = dataVideo.snippet.publishedAt
    const channelTitle = dataVideo.snippet.channelTitle
    
    const card = document.createElement('div')
    card.classList.add('video-card')
    card.innerHTML =`
            <div class="video-thumb">
                <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
                </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
                <span class="video-counter">
                <span class="video-views">${transfer()}</span>
                <span class="video-date">${(new Date(dateVideo)).toLocaleString()}</span>
                <span class="video-channel">${channelTitle}</span>
            </div>`
    return card
}

function transfer(send) {
    console.log(send)
    // return send
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';

    listVideo.forEach(item => {
        let card = createCard(item)
        viewCountCards(item)
        wrapper.append(card)
    });

    function viewCountCards(dataVideo) {
        let videoViews = document.querySelectorAll('.video-views')
        let viewCount = ''
        videoViews.forEach(elem => {
            if (dataVideo.statistics) {
                viewCount = `${dataVideo.statistics.viewCount} views`
                // console.log(viewCount)
                if (elem.textContent.trim() !== '') {
                    elem.style.marginRight = '5px'
                    elem.style.color = 'red'
                }
            }
        })
        
        return transfer(viewCount)
    }
}





createList(gloAcademyList, gloAcademy)
createList(trendingList, trending)
createList(musicList, music)