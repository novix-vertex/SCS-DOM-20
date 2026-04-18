const data = [
    {
        "id": 1,
        "avtar": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@spice-route",
        "image": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Spicy flavors of India 🌶️ #indianfood #spicy",
        "like": 200,
        "isLiked": false,
        "isFollowed": true,
        "comment": 30,
        "share": 60,
        "video": "vid1.mp4"
    },
    {
        "id": 2,
        "avtar": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@tasty-kitchen",
        "image": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Cooking up magic 🍝 #homecooking #yum",
        "like": 120,
        "isLiked": true,
        "isFollowed": true,
        "comment": 25,
        "share": 40,
        "video": "vid2.mp4"
    },
    {
        "id": 3,
        "avtar": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@sweet-cravings",
        "image": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Dessert heaven 🍰 #sweettooth #desserts",
        "like": 180,
        "isLiked": false,
        "isFollowed": false,
        "comment": 20,
        "share": 50,
        "video": "vid3.mp4"
    },
    {
        "id": 4,
        "avtar": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@yummy",
        "image": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Yummy Desert 🍰 #sweet #desserts",
        "like": 250,
        "isLiked": false,
        "isFollowed": false,
        "comment": 45,
        "share": 80,
        "video": "vid4.mp4"
    },
    {
        "id": 5,
        "avtar": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@chef-special",
        "image": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Chef’s special dish 🍽️ #chef #foodlover",
        "like": 140,
        "isLiked": true,
        "isFollowed": false,
        "comment": 18,
        "share": 35,
        "video": "vid5.mp4"
    },
    {
        "id": 6,
        "avtar": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "username": "@foodie-bites",
        "image": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "title": "Delicious street food moments 🍜 #foodie #streetfood",
        "like": 175,
        "isLiked": false,
        "isFollowed": true,
        "comment": 22,
        "share": 48,
        "video": "vid6.mp4"
    },
    {
        "id": 7,
        "avtar": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "username": "@drink-delight",
        "image": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "title": "Refreshing summer drinks 🍹 #drinks #refreshing",
        "like": 270,
        "isLiked": false,
        "isFollowed": false,
        "comment": 72,
        "share": 75,
        "video": "vid7.mp4"
    },
    {
        "id": 8,
        "avtar": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "username": "@icecream-trending",
        "image": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "title": "Trending icecream art 🍨 #foodtrend #viral",
        "like": 210,
        "isLiked": false,
        "isFollowed": false,
        "comment": 35,
        "share": 70,
        "video": "vid8.mp4"
    },
    {
        "id": 9,
        "avtar": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@coffee-art",
        "image": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Coffee art ☕ #drink #coffee",
        "like": 110,
        "isLiked": true,
        "isFollowed": true,
        "comment": 12,
        "share": 25,
        "video": "vid9.mp4"
    },
    {
        "id": 10,
        "avtar": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@coffee-artist",
        "image": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Making coffee is an art ☕ #drink #coffeetime",
        "like": 160,
        "isLiked": true,
        "isFollowed": false,
        "comment": 21,
        "share": 42,
        "video": "vid10.mp4"
    }
];

let reels = document.querySelector(".reels");
function addReels() {
    let sum = '';
    data.forEach(function (reel, idx) {
        sum = sum + `<div class="reel">
                    <video id = ${idx} autoplay loop muted src="${reel.video}"
                        alt="vid"></video>

                    <div class="bottom">
                        <div class="bottom-top">
                            <img class="avtar"
                                src="${reel.avtar}"
                                alt="avtar">
                            <h3 class="username">${reel.username}</h3>
                            <button id = ${idx} class="vid subscribe" >${reel.isFollowed ? 'Unsubscribe' : 'Subscribe'}</button>
                        </div>
                        <h2 class="title">${reel.title}</h2>
                    </div>
                    <div class="right">
                        <div id = ${idx} class="like">
                            <h4>${reel.isLiked ? '<i class="ri-heart-fill love"></i>' : '<i class="ri-heart-line"></i>'}
                            </h4>
                            <h6>${reel.like}</h6>
                        </div>
                        <div id = ${idx} class="comment">
                            <h4><i class="ri-chat-1-line"></i></h4>
                            <h6>${reel.comment}</h6>
                        </div>
                        <div id = ${idx} class="share">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>${reel.share}</h6>
                        </div>                        
                        <div class="menu">
                            <h4><i class="ri-more-2-fill"></i></h4>
                            <h6></h6>
                        </div>
                    </div>
                </div>`;
    });

    reels.innerHTML = sum;
}

addReels();

reels.addEventListener("click", function (dets) {
    let id = dets.target.id;

    if (dets.target.classList.contains("like")) {

        data[id].isLiked = !data[id].isLiked;
        data[id].like += data[id].isLiked ? 1 : -1;

        document.querySelectorAll(".like h6")[id].innerText = data[id].like;

    }
    if (dets.target.classList.contains("subscribe")) {
        //  console.log("sub")
        data[id].isFollowed = !data[id].isFollowed;
        //addReels();
    }
});

function checkReel(isFirst = false) {
    const all_reels = document.querySelectorAll(".reel");
    let center = window.innerHeight / 2;

    all_reels.forEach((reel) => {
        // console.log(reel);
        const rect = reel.getBoundingClientRect();
        const video = reel.querySelector("video");

        if (isFirst) {
            document.addEventListener("click", () => {
                video.muted = false;
            }, { once: true });
        } else {

            if (rect.top <= center && rect.bottom >= center) {
                video.muted = false;
                video.play();
            } else {
                video.muted = true;
                video.pause();
            }
        }
    });
}

reels.addEventListener("scroll", () => checkReel());

window.addEventListener("load", () => checkReel(true));