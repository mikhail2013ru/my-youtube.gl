const gloAcademyList = document.querySelector('.glo-academy-list')
const trendingList = document.querySelector('.trending-list')
const musicList = document.querySelector('.music-list')

console.dir(trending)

const createCard = (dataVideo) => {
    const imgUrl = dataVideo.snippet.thumbnails.high.url
    const videoId = dataVideo.id.videoId
    const titleVideo = dataVideo.snippet.title
    const dateVideo = dataVideo.snippet.publishedAt
    const channelTitle = dataVideo.snippet.channelTitle
    let video = document.querySelector('.video-counter')
    let viewCount = ''
    const videoDate = document.querySelectorAll('.video-date') 
    
    if (dataVideo.statistics) {
        viewCount = `${dataVideo.statistics.viewCount} views`

        videoDate.forEach((item, index, arr) => {
            item.style.color = 'red'
            // console.log(index)
        })
    } 
    // console.log(!dataVideo.statistics && dataVideo.snippet)
    // if (!dataVideo.statistics) {
    //     let video = document.querySelector('.video-views')
    //     video.style.marginRight = 0
    // }

    // console.log(viewCount)
    const card = document.createElement('div')
    card.classList.add('video-card')
    card.innerHTML = `
            <div class="video-thumb">
                <a class="link-video youtube-modal" href="https://youtu.be/${videoId}">
                <img src="${imgUrl}" alt="" class="thumbnail">
                </a>
            </div>
            <h3 class="video-title">${titleVideo}</h3>
            <div class="video-info">
                <span class="video-counter">
                <span class="video-views">${viewCount}</span>
                <span class="video-date">${(new Date(dateVideo)).toLocaleString()}</span>
                </span>
                <span class="video-channel">${channelTitle}</span>
            </div>`
    return card
}

const createList = (wrapper, listVideo) => {
    wrapper.textContent = '';

    listVideo.forEach(item => {
        const card = createCard(item)
        wrapper.append(card)
    });
}

createList(gloAcademyList, gloAcademy)
createList(trendingList, trending)
createList(musicList, music)