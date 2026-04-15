const data = [
    {
        "id": 1,
        "avtar": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-icon",
        "image": "https://images.unsplash.com/photo-1706798951716-27defb4ea70b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "High fashion shoot vibes - #fashion #model",
        "like": 200,
        "comment": 30,
        "share": 60
    },
    {
        "id": 2,
        "avtar": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@model-elite",
        "image": "https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Runway glam moments - #model #runway",
        "like": 120,
        "comment": 25,
        "share": 40
    }, {
        "id": 3,
        "avtar": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@glam-model",
        "image": "https://images.unsplash.com/photo-1635853670663-12e40fcb0462?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Glam studio session - #glam #photoshoot",
        "like": 180,
        "comment": 20,
        "share": 50
    },
    {
        "id": 4,
        "avtar": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@runway-queen",
        "image": "https://images.unsplash.com/photo-1738159128157-a9c87ce99314?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Catwalk highlights - #runway #style",
        "like": 250,
        "comment": 45,
        "share": 80
    },
    {
        "id": 5,
        "avtar": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@style-diva",
        "image": "https://images.unsplash.com/photo-1587567169399-b0fb22571ad8?q=80&w=706&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Style showcase - #fashion #diva",
        "like": 140,
        "comment": 18,
        "share": 35
    },
    {
        "id": 6,
        "avtar": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "username": "@pose-master",
        "image": "https://images.unsplash.com/photo-1649414114385-87c211edc38a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        "title": "Perfect pose moments - #pose #model",
        "like": 175,
        "comment": 22,
        "share": 48
    },
    {
        "id": 7,
        "avtar": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "username": "@catwalk-star",
        "image": "https://images.unsplash.com/photo-1570985333372-d735daa2596f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        "title": "Catwalk energy - #catwalk #fashion",
        "like": 300,
        "comment": 55,
        "share": 95
    },
    {
        "id": 8,
        "avtar": "https://images.unsplash.com/photo-1600267240593-3fc5ad866e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "username": "@model-vibes",
        "image": "https://images.unsplash.com/photo-1600267240593-3fc5ad866e67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "title": "Model vibes on set - #vibes #model",
        "like": 130,
        "comment": 15,
        "share": 30
    },
    {
        "id": 9,
        "avtar": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "username": "@trend-model",
        "image": "https://images.unsplash.com/photo-1611760543246-956539975518?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
        "title": "Trending fashion looks - #trend #style",
        "like": 210,
        "comment": 35,
        "share": 70
    },
    {
        "id": 10,
        "avtar": "https://images.unsplash.com/photo-1653370767081-3d5e8d5d13b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8",
        "username": "@glow-model",
        "image": "https://images.unsplash.com/photo-1653370767081-3d5e8d5d13b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8",
        "title": "Glow up session - #glow #beauty",
        "like": 190,
        "comment": 28,
        "share": 55
    },
    {
        "id": 11,
        "avtar": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-runner",
        "image": "https://images.unsplash.com/photo-1670265308734-678171190076?q=80&w=671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Runway practice shots - #runway #practice",
        "like": 110,
        "comment": 12,
        "share": 25
    },
    {
        "id": 12,
        "avtar": "https://plus.unsplash.com/premium_photo-1663051195247-38c48597b9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        "username": "@style-runway",
        "image": "https://plus.unsplash.com/premium_photo-1663051195247-38c48597b9f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        "title": "Runway style blast - #style #runway",
        "like": 220,
        "comment": 33,
        "share": 65
    }, {
        "id": 13,
        "avtar": "https://images.unsplash.com/photo-1719680356714-a6b1fa4c6eb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@editorial-look",
        "image": "https://images.unsplash.com/photo-1719680356714-a6b1fa4c6eb2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Editorial shoot magic - #editorial #model",
        "like": 260,
        "comment": 40,
        "share": 85
    },
    {
        "id": 14,
        "avtar": "https://plus.unsplash.com/premium_photo-1669951867055-02d679129190?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@pose-queen",
        "image": "https://plus.unsplash.com/premium_photo-1669951867055-02d679129190?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Pose queen moments - #pose #queen",
        "like": 270,
        "comment": 48,
        "share": 90
    },
    {
        "id": 15,
        "avtar": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@fashion-vision",
        "image": "https://plus.unsplash.com/premium_photo-1769105242703-9f5251fcaca7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Visionary fashion shoot - #vision #fashion",
        "like": 160,
        "comment": 21,
        "share": 42
    },
    {
        "id": 16,
        "avtar": "https://images.unsplash.com/photo-1703056715594-062760a8b9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "username": "@model-scene",
        "image": "https://images.unsplash.com/photo-1703056715594-062760a8b9ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
        "title": "Behind the scenes - #bts #model",
        "like": 145,
        "comment": 19,
        "share": 38
    },
    {
        "id": 17,
        "avtar": "https://plus.unsplash.com/premium_photo-1661964240268-cd66b75dc88d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        "username": "@runway-glam",
        "image": "https://plus.unsplash.com/premium_photo-1661964240268-cd66b75dc88d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        "title": "Glam runway show - #glam #runway",
        "like": 310,
        "comment": 60,
        "share": 100
    },
    {
        "id": 18,
        "avtar": "https://plus.unsplash.com/premium_photo-1661964246418-1be9d02c89de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "username": "@style-model",
        "image": "https://plus.unsplash.com/premium_photo-1661964246418-1be9d02c89de?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Style model shoot - #style #model",
        "like": 135,
        "comment": 17,
        "share": 32
    },
    {
        "id": 19,
        "avtar": "https://plus.unsplash.com/premium_photo-1661964321544-94fced60e490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        "username": "@fashion-shots",
        "image": "https://plus.unsplash.com/premium_photo-1661964321544-94fced60e490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        "title": "Stunning fashion shots - #fashion #shots",
        "like": 280,
        "comment": 50,
        "share": 88
    },
    {
        "id": 20,
        "avtar": "https://plus.unsplash.com/premium_photo-1727427850318-35cb18b7836b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        "username": "@elite-runway",
        "image": "https://plus.unsplash.com/premium_photo-1727427850318-35cb18b7836b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8",
        "title": "Elite runway showcase - #elite #runway",
        "like": 330,
        "comment": 65,
        "share": 110
    }
];

let sum = '';
data.forEach(function (reel) {
    sum = sum + `<div class="reel">
                    <img src="${reel.image}"
                        alt="img">

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
                        </div>
                        <div class="menu">
                            <h4><i class="ri-more-2-fill"></i></h4>
                            <h6></h6>
                        </div>
                    </div>
                </div>`;
});

let reels = document.querySelector(".reels");
reels.innerHTML = sum;