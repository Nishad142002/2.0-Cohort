const reelsData = [
  {
    videoUrl: "./video/video1.mp4", // Blank as requested
    username: "code_guru_max",
    profilepic: "https://placehold.co/100x100/581c87/ffffff?text=CG",
    reelTitle: "Top 5 CSS Tricks for 2025",
    isFollwed: false,
    isLiked: false,
    likeCount: "12.5K",
    commentCount: "870",
    shareCount: "3.2K",
    isSaved: true,
  },
  {
    videoUrl: "./video/video2.mp4",
    username: "design_by_anna",
    profilepic: "https://placehold.co/100x100/4c4c4c/ffffff?text=DA",
    reelTitle: "Minimalist UI Design Principles",
    isFollwed: true,
    isLiked: false,
    likeCount: "5.1K",
    commentCount: "122",
    shareCount: "450",
    isSaved: true,
  },
  {
    videoUrl: "./video/video3.mp4",
    username: "dev_ops_life",
    profilepic: "https://placehold.co/100x100/0369a1/ffffff?text=DL",
    reelTitle: "Image Slider Using CSS",
    isFollwed: true,
    isLiked: true,
    likeCount: "35K",
    commentCount: "2.1K",
    shareCount: "1.5K",
    isSaved: true,
  },
  {
    videoUrl: "./video/video4.mp4",
    username: "react_reels_pro",
    profilepic: "https://placehold.co/100x100/10b981/ffffff?text=RP",
    reelTitle: "Content Marketing",
    isFollwed: true,
    isLiked: true,
    likeCount: "9.9K",
    commentCount: "505",
    shareCount: "980",
    isSaved: false,
  },
  {
    videoUrl: "./video/video5.mp4",
    username: "javascript_jake",
    profilepic: "https://placehold.co/100x100/f97316/ffffff?text=JJ",
    reelTitle: "How to Animate your 3D Charachter",
    isFollwed: false,
    isLiked: false,
    likeCount: "1.2K",
    commentCount: "55",
    shareCount: "120",
    isSaved: true,
  },
  {
    videoUrl: "./video/video6.mp4",
    username: "frontend_freda",
    profilepic: "https://placehold.co/100x100/e11d48/ffffff?text=FF",
    reelTitle: "My setup for zero-config web development.",
    isFollwed: true,
    isLiked: true,
    likeCount: "42.8K",
    commentCount: "3.5K",
    shareCount: "7.1K",
    isSaved: false,
  },
  {
    videoUrl: "./video/video7.mp4",
    username: "ai_insights",
    profilepic: "https://placehold.co/100x100/6366f1/ffffff?text=AI",
    reelTitle: "The future of LLMs in software testing.",
    isFollwed: false,
    isLiked: true,
    likeCount: "8.4K",
    commentCount: "1.1K",
    shareCount: "650",
    isSaved: false,
  },
  {
    videoUrl: "./video/video1.mp4",
    username: "clean_code_chef",
    profilepic: "https://placehold.co/100x100/0f766e/ffffff?text=CC",
    reelTitle: "Refactoring giant component into smaller chunks.",
    isFollwed: false,
    isLiked: true,
    likeCount: "18K",
    commentCount: "990",
    shareCount: "2.4K",
    isSaved: true,
  },
  {
    videoUrl: "./video/video2.mp4",
    username: "web_security_gal",
    profilepic: "https://placehold.co/100x100/a78bfa/ffffff?text=WS",
    reelTitle: "Preventing XSS attacks in 3 easy steps.",
    isFollwed: true,
    isLiked: false,
    likeCount: "3.7K",
    commentCount: "280",
    shareCount: "390",
    isSaved: false,
  },
  {
    videoUrl: "./video/video3.mp4",
    username: "full_stack_fury",
    profilepic: "https://placehold.co/100x100/374151/ffffff?text=FS",
    reelTitle: "Building a GraphQL API in under 5 minutes.",
    isFollwed: true,
    isLiked: true,
    likeCount: "22.3K",
    commentCount: "1.5K",
    shareCount: "4.8K",
    isSaved: true,
  },
];

let allReels = "";

reelsData.forEach((reel) => {
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
                <button>${reel.isFollwed ? "Unfollow" : "Follow"}</button>
              </div>
              <h3>${reel.reelTitle}</h3>
            </div>

            <div class="right">
              <div class="like">
                <h4 class="like-icon icon">${
                  reel.isLiked
                    ? '<i class="ri-heart-3-fill liked"></i>'
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${reel.likeCount}</h6>
              </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${reel.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${reel.shareCount}</h6>
              </div>
              <div class="save">
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

let reelContainer = document.querySelector(".all-reels");
reelContainer.innerHTML = allReels;
