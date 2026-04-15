let data = [
    {
        "id": 1,
        "avtar": "",
        "username": "@model-elite",
        "image": "",
        "title": "Runway glam moments - #model #runway",
        "like": 120,
        "comment": 25,
        "share": 40
    },
    {
        "id": 2,
        "avtar": "",
        "username": "@fashion-icon",
        "image": "",
        "title": "High fashion shoot vibes - #fashion #model",
        "like": 200,
        "comment": 30,
        "share": 60
    },
    {
        "id": 3,
        "avtar": "",
        "username": "@glam-model",
        "image": "",
        "title": "Glam studio session - #glam #photoshoot",
        "like": 180,
        "comment": 20,
        "share": 50
    },
    {
        "id": 4,
        "avtar": "",
        "username": "@runway-queen",
        "image": "",
        "title": "Catwalk highlights - #runway #style",
        "like": 250,
        "comment": 45,
        "share": 80
    },
    {
        "id": 5,
        "avtar": "",
        "username": "@style-diva",
        "image": "",
        "title": "Style showcase - #fashion #diva",
        "like": 140,
        "comment": 18,
        "share": 35
    },
    {
        "id": 6,
        "avtar": "",
        "username": "@pose-master",
        "image": "",
        "title": "Perfect pose moments - #pose #model",
        "like": 175,
        "comment": 22,
        "share": 48
    },
    {
        "id": 7,
        "avtar": "",
        "username": "@catwalk-star",
        "image": "",
        "title": "Catwalk energy - #catwalk #fashion",
        "like": 300,
        "comment": 55,
        "share": 95
    },
    {
        "id": 8,
        "avtar": "",
        "username": "@model-vibes",
        "image": "",
        "title": "Model vibes on set - #vibes #model",
        "like": 130,
        "comment": 15,
        "share": 30
    },
    {
        "id": 9,
        "avtar": "",
        "username": "@trend-model",
        "image": "",
        "title": "Trending fashion looks - #trend #style",
        "like": 210,
        "comment": 35,
        "share": 70
    },
    {
        "id": 10,
        "avtar": "",
        "username": "@editorial-look",
        "image": "",
        "title": "Editorial shoot magic - #editorial #model",
        "like": 260,
        "comment": 40,
        "share": 85
    },
    {
        "id": 11,
        "avtar": "",
        "username": "@fashion-runner",
        "image": "",
        "title": "Runway practice shots - #runway #practice",
        "like": 110,
        "comment": 12,
        "share": 25
    },
    {
        "id": 12,
        "avtar": "",
        "username": "@glow-model",
        "image": "",
        "title": "Glow up session - #glow #beauty",
        "like": 190,
        "comment": 28,
        "share": 55
    },
    {
        "id": 13,
        "avtar": "",
        "username": "@style-runway",
        "image": "",
        "title": "Runway style blast - #style #runway",
        "like": 220,
        "comment": 33,
        "share": 65
    },
    {
        "id": 14,
        "avtar": "",
        "username": "@pose-queen",
        "image": "",
        "title": "Pose queen moments - #pose #queen",
        "like": 270,
        "comment": 48,
        "share": 90
    },
    {
        "id": 15,
        "avtar": "",
        "username": "@fashion-vision",
        "image": "",
        "title": "Visionary fashion shoot - #vision #fashion",
        "like": 160,
        "comment": 21,
        "share": 42
    },
    {
        "id": 16,
        "avtar": "",
        "username": "@model-scene",
        "image": "",
        "title": "Behind the scenes - #bts #model",
        "like": 145,
        "comment": 19,
        "share": 38
    },
    {
        "id": 17,
        "avtar": "",
        "username": "@runway-glam",
        "image": "",
        "title": "Glam runway show - #glam #runway",
        "like": 310,
        "comment": 60,
        "share": 100
    },
    {
        "id": 18,
        "avtar": "",
        "username": "@style-model",
        "image": "",
        "title": "Style model shoot - #style #model",
        "like": 135,
        "comment": 17,
        "share": 32
    },
    {
        "id": 19,
        "avtar": "",
        "username": "@fashion-shots",
        "image": "",
        "title": "Stunning fashion shots - #fashion #shots",
        "like": 280,
        "comment": 50,
        "share": 88
    },
    {
        "id": 20,
        "avtar": "",
        "username": "@elite-runway",
        "image": "",
        "title": "Elite runway showcase - #elite #runway",
        "like": 330,
        "comment": 65,
        "share": 110
    }
];

let sum;
array.forEach(function (reel) {
    sum = sum + `<div class="reel">
                    <img src="https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="img">

                    <div class="bottom">
                        <div class="bottom-top">
                            <img class="avtar"
                                src="https://images.unsplash.com/photo-1599588683983-dc7dd610d430?q=80&w=664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="avtar">
                            <h3 class="handle">model.sharma</h3>
                            <button class="subscribe">Subscribe</button>
                        </div>
                        <h2 class="title">Modeling: Feel the modern vibe #vibe #model #modern</h2>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4><i class="ri-heart-line"></i></h4>
                            <h6>200</h6>
                        </div>
                        <div class="comment">
                            <h4><i class="ri-chat-1-line"></i></h4>
                            <h6>15</h6>
                        </div>
                        <div class="share">
                            <h4><i class="ri-share-forward-line"></i></h4>
                            <h6>70</h6>
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