const reelsData = [
  {
    videoUrl: "./video/video1.mp4", // Blank as requested
    username: "code_guru_max",
    profilepic: "https://placehold.co/100x100/581c87/ffffff?text=CG",
    reelTitle: "Top 5 CSS Tricks for 2025",
    isFollwed: false,
    isLiked: false,
    likeCount: 550,
    commentCount: 180,
    shareCount: 110,
    isSaved: true,
  },
  {
    videoUrl: "./video/video2.mp4",
    username: "design_by_anna",
    profilepic: "https://placehold.co/100x100/4c4c4c/ffffff?text=DA",
    reelTitle: "Minimalist UI Design Principles",
    isFollwed: true,
    isLiked: false,
    likeCount: 100,
    commentCount: 122,
    shareCount: 450,
    isSaved: true,
  },
  {
    videoUrl: "./video/video3.mp4",
    username: "dev_ops_life",
    profilepic: "https://placehold.co/100x100/0369a1/ffffff?text=DL",
    reelTitle: "Image Slider Using CSS",
    isFollwed: true,
    isLiked: true,
    likeCount: 356,
    commentCount: 222,
    shareCount: 115,
    isSaved: true,
  },
  {
    videoUrl: "./video/video4.mp4",
    username: "react_reels_pro",
    profilepic: "https://placehold.co/100x100/10b981/ffffff?text=RP",
    reelTitle: "Content Marketing",
    isFollwed: true,
    isLiked: true,
    likeCount: 160,
    commentCount: 505,
    shareCount: 322,
    isSaved: false,
  },
  {
    videoUrl: "./video/video5.mp4",
    username: "javascript_jake",
    profilepic: "https://placehold.co/100x100/f97316/ffffff?text=JJ",
    reelTitle: "How to Animate your 3D Charachter",
    isFollwed: false,
    isLiked: false,
    likeCount: 298,
    commentCount: 417,
    shareCount: 263,
    isSaved: true,
  },
  {
    videoUrl: "./video/video6.mp4",
    username: "frontend_freda",
    profilepic: "https://placehold.co/100x100/e11d48/ffffff?text=FF",
    reelTitle: "My setup for zero-config web development.",
    isFollwed: true,
    isLiked: true,
    likeCount: 428,
    commentCount: 450,
    shareCount: 360,
    isSaved: false,
  },
  {
    videoUrl: "./video/video7.mp4",
    username: "ai_insights",
    profilepic: "https://placehold.co/100x100/6366f1/ffffff?text=AI",
    reelTitle: "The future of LLMs in software testing.",
    isFollwed: false,
    isLiked: true,
    likeCount: 618,
    commentCount: 687,
    shareCount: 630,
    isSaved: false,
  },
  {
    videoUrl: "./video/video1.mp4",
    username: "clean_code_chef",
    profilepic: "https://placehold.co/100x100/0f766e/ffffff?text=CC",
    reelTitle: "Refactoring giant component into smaller chunks.",
    isFollwed: false,
    isLiked: true,
    likeCount: 462,
    commentCount: 284,
    shareCount: 156,
    isSaved: true,
  },
  {
    videoUrl: "./video/video2.mp4",
    username: "web_security_gal",
    profilepic: "https://placehold.co/100x100/a78bfa/ffffff?text=WS",
    reelTitle: "Preventing XSS attacks in 3 easy steps.",
    isFollwed: true,
    isLiked: false,
    likeCount: 649,
    commentCount: 691,
    shareCount: 459,
    isSaved: false,
  },
  {
    videoUrl: "./video/video3.mp4",
    username: "full_stack_fury",
    profilepic: "https://placehold.co/100x100/374151/ffffff?text=FS",
    reelTitle: "Building a GraphQL API in under 5 minutes.",
    isFollwed: true,
    isLiked: true,
    likeCount: 223,
    commentCount: 297,
    shareCount: 170,
    isSaved: true,
  },
];

let reelContainer = document.querySelector(".all-reels");

function addData() {
  let allReels = "";

  reelsData.forEach((reel, idx) => {
    allReels =
      allReels +
      `<div class="reel">
            <video class="main-video" src=${
              reel.videoUrl
            } muted autoplay loop></video>

            <div class="bottom">
              <div class="user">
                <img
                  src=${reel.profilepic}
                  alt=""
                />
                <h4>${reel.username}</h4>
                <button id=${idx} class="followBtn">${
        reel.isFollwed ? "Unfollow" : "Follow"
      }</button>
              </div>
              <h3>${reel.reelTitle}</h3>
            </div>

            <div class="right">
              <div id=${idx} class="like">
                <h4 class="like-icon icon">${
                  reel.isLiked
                    ? '<i class="ri-heart-3-fill liked"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${reel.likeCount}</h6>
              </div>
              <div id=${idx} class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${reel.commentCount}</h6>
              </div>
              <div id=${idx} class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${reel.shareCount}</h6>
              </div>
              <div id=${idx} class="save">
                <h4 class="save-icon icon">${
                  reel.isSaved
                    ? '<i class="ri-bookmark-fill"></i>'
                    : '<i class="ri-bookmark-line"></i>'
                }</h4>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
  });

  reelContainer.innerHTML = allReels;
}

addData();

reelContainer.addEventListener("click", function (evt) {
  console.log(evt.target.className);

  if (evt.target.className === "like") {
    if (!reelsData[evt.target.id].isLiked) {
      reelsData[evt.target.id].likeCount++;
      reelsData[evt.target.id].isLiked = true;
      addData();
    } else {
      reelsData[evt.target.id].likeCount--;
      reelsData[evt.target.id].isLiked = false;
      addData();
    }
  } else if (evt.target.className === "followBtn") {
    if (!reelsData[evt.target.id].isFollwed) {
      reelsData[evt.target.id].isFollwed = true;
      addData();
    } else {
      reelsData[evt.target.id].isFollwed = false;
      addData();
    }
  } else if (evt.target.className === "save") {
    if (!reelsData[evt.target.id].isSaved) {
      reelsData[evt.target.id].isSaved = true;
      addData();
    } else {
      reelsData[evt.target.id].isSaved = false;
      addData();
    }
  }
});
