const data = [
    {
        "id": 1,
        "avtar": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-icon",
        "image": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "High fashion shoot vibes - #fashion #model",
        "like": 200,
        "comment": 30,
        "share": 60,
        "video": "https://www.pexels.com/download/video/32908600/"
    },
    {
        "id": 2,
        "avtar": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@model-elite",
        "image": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Runway glam moments - #model #runway",
        "like": 120,
        "comment": 25,
        "share": 40,
        "video": "https://www.pexels.com/download/video/32924050/"
    }, {
        "id": 3,
        "avtar": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@glam-model",
        "image": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Glam studio session - #glam #photoshoot",
        "like": 180,
        "comment": 20,
        "share": 50,
        "video": "https://www.pexels.com/download/video/25456498/"
    },
    {
        "id": 4,
        "avtar": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@runway-queen",
        "image": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Catwalk highlights - #runway #style",
        "like": 250,
        "comment": 45,
        "share": 80,
        "video": "https://www.pexels.com/download/video/29532464/"
    },
    {
        "id": 5,
        "avtar": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@style-diva",
        "image": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Style showcase - #fashion #diva",
        "like": 140,
        "comment": 18,
        "share": 35,
        "video": "https://www.pexels.com/download/video/5780034/"
    },
    {
        "id": 6,
        "avtar": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "username": "@pose-master",
        "image": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "title": "Perfect pose moments - #pose #model",
        "like": 175,
        "comment": 22,
        "share": 48,
        "video": "https://www.pexels.com/download/video/16423978/"
    },
    {
        "id": 7,
        "avtar": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "username": "@catwalk-star",
        "image": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "title": "Catwalk energy - #catwalk #fashion",
        "like": 300,
        "comment": 55,
        "share": 95,
        "video": "https://www.pexels.com/download/video/6289336/"
    },

    {
        "id": 8,
        "avtar": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "username": "@trend-model",
        "image": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "title": "Trending fashion looks - #trend #style",
        "like": 210,
        "comment": 35,
        "share": 70,
        "video": "https://www.pexels.com/download/video/6281228/"
    },

    {
        "id": 9,
        "avtar": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-runner",
        "image": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Runway practice shots - #runway #practice",
        "like": 110,
        "comment": 12,
        "share": 25,
        "video": "https://www.pexels.com/download/video/19981541/"
    },
    {
        "id": 10,
        "avtar": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-vision",
        "image": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Visionary fashion shoot - #vision #fashion",
        "like": 160,
        "comment": 21,
        "share": 42,
        "video": "https://www.pexels.com/download/video/20712255/"
    }
];

let sum = '';
let reels = document.querySelector(".reels");
data.forEach(function (reel) {
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${reel.video}"
                        alt="vid"></video>

                    <div class="bottom">
                        <div class="bottom-top">
                            <img class="avtar"
                                src="${reel.avtar}"
                                alt="avtar">
                            <h3 class="username">${reel.username}</h3>
                            <button class="subscribe">Subscribe</button>
                        </div>
                        <h2 class="title">${reel.title}</h2>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4><i class="ri-heart-line"></i></h4>
                            <h6>${reel.like}</h6>
                        </div>
                        <div class="comment">
                            <h4><i class="ri-chat-1-line"></i></h4>
                            <h6>${reel.comment}</h6>
                        </div>
                        <div class="share">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>${reel.share}</h6>
                        </div>                        <div class="menu">
                            <h4><i class="ri-more-2-fill"></i></h4>
                            <h6></h6>
                        </div>
                    </div>
                </div>`;
});

reels.innerHTML = sum;