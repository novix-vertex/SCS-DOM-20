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
        "video": "https://www.pexels.com/download/video/28667667/"
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
        "video": "https://www.pexels.com/download/video/32924050/"
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
        "video": "https://www.pexels.com/download/video/25456498/"
    },
    {
        "id": 4,
        "avtar": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@drink-delight",
        "image": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Refreshing summer drinks 🍹 #drinks #refreshing",
        "like": 250,
        "isLiked": false,
        "isFollowed": false,
        "comment": 45,
        "share": 80,
        "video": "https://www.pexels.com/download/video/29532464/"
    },
    {
        "id": 5,
        "avtar": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@foodie-bites",
        "image": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Delicious street food moments 🍔 #foodie #streetfood",
        "like": 140,
        "isLiked": true,
        "isFollowed": false,
        "comment": 18,
        "share": 35,
        "video": "https://www.pexels.com/download/video/5780034/"
    },
    {
        "id": 6,
        "avtar": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "username": "@chef-special",
        "image": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "title": "Chef’s special dish 🍽️ #chef #foodlover",
        "like": 175,
        "isLiked": false,
        "isFollowed": true,
        "comment": 22,
        "share": 48,
        "video": "https://www.pexels.com/download/video/16423978/"
    },
    {
        "id": 7,
        "avtar": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "username": "@noodle-junction",
        "image": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "title": "Chineese vibes 🔥 #chow #noodels",
        "like": 270,
        "isLiked": false,
        "isFollowed": false,
        "comment": 72,
        "share": 75,
        "video": "https://www.pexels.com/download/video/6289336/"
    },
    {
        "id": 8,
        "avtar": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "username": "@food-trending",
        "image": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "title": "Trending food hacks 🍜 #foodtrend #viral",
        "like": 210,
        "isLiked": false,
        "isFollowed": false,
        "comment": 35,
        "share": 70,
        "video": "https://www.pexels.com/download/video/6281228/"
    },
    {
        "id": 9,
        "avtar": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@gourmet-vision",
        "image": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Gourmet plating art 🍴 #gourmet #fineDining",
        "like": 110,
        "isLiked": true,
        "isFollowed": true,
        "comment": 12,
        "share": 25,
        "video": "https://www.pexels.com/download/video/19981541/"
    },
    {
        "id": 10,
        "avtar": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@quick-bites",
        "image": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Quick snack ideas 🍟 #snacks #fastfood",
        "like": 160,
        "isLiked": true,
        "isFollowed": false,
        "comment": 21,
        "share": 42,
        "video": "https://www.pexels.com/download/video/20712255/"
    }
];

let reels = document.querySelector(".reels");


function addReels() {
    let sum = '';
    data.forEach(function (reel, idx) {
        sum = sum + `<div class="reel">
                    <video autoplay loop src="${reel.video}"
                        alt="vid"></video>

                    <div class="bottom">
                        <div class="bottom-top">
                            <img class="avtar"
                                src="${reel.avtar}"
                                alt="avtar">
                            <h3 class="username">${reel.username}</h3>
                            <button id = ${idx} class="subscribe">${reel.isFollowed ? 'Unsubscribe' : 'Subscribe'}</button>
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
    if (dets.target.className === "like") {

        if (data[id].isLiked) {
            data[id].like--;
        } else {
            data[id].like++;
        }
        data[id].isLiked = !data[id].isLiked;
        addReels();
    }
    if (dets.target.className === "subscribe") {

        data[id].isFollowed = !data[id].isFollowed;
        addReels();
    }
});
