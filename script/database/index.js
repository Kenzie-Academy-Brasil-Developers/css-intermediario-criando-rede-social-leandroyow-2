const contentPost = document.querySelector("#contentPost");
const btnPost = document.querySelector("#btnPostNow");
const body = document.querySelector("body");
const like = document.querySelector("like");
const ulPosts = document.querySelector(".ulPosts");
const suggestedUsers = document.querySelector(".allUsers");
const userSuggestedUsername = document.querySelectorAll(".userSuggestedName");
const userSuggestedJob = document.querySelectorAll(".userSuggestedJob");


function buttonPost () {
    body.addEventListener("click", () => {
        if(contentPost.value.length > 0) {
            btnPost.classList.remove("form__btnDeactivated");
            btnPost.classList.add("form__btnActive");
        } else {

            btnPost.classList.remove("form__btnActive");
            btnPost.classList.add("form__btnDeactivated");
        }
    })
}
function renderPosts() {
    for(let i=0;i<posts.length; i++) {

    const divUserCard = document.createElement("div");
    divUserCard.setAttribute("aria-labelledby", posts[i].id_post);

    const divpostHeaderAlign = document.createElement("div");
    const imgProfile = document.createElement("img");
    const pUsername = document.createElement("p");
    const pJob = document.createElement("p");
    const divTitleUser = document.createElement("div");
    
    pUsername.innerText = users[i].user;
    pJob.innerText = users[i].stack;
    imgProfile.src = users[i].img;
    divUserCard.classList.add("userCard");
    divUserCard.classList.add("userCardPost");
    const divPost = document.querySelectorAll(".userCardPost");
    
    
    divpostHeaderAlign.classList.add("postHeaderAlign");
    imgProfile.classList.add("profileImg");
    pUsername.classList.add("pUsername");
    pJob.classList.add("pJob");

    const div1Body = document.createElement("div");

    div1Body.classList.add("sectionUsers__DivSuggestions");
    div1Body.classList.add("postsWrapper");

    const divPostBody = document.createElement("div");
    const h2Body = document.createElement("h2");
    const pBody = document.createElement("p");
    h2Body.innerText = posts[i].title;
    divPostBody.classList.add("postBody");

    const divFooter = document.createElement("div");
    const btnFooter = document.createElement("button");
    const imgLikeFooter = document.createElement("img");
    const likeCount = document.createElement("p")

    likeCount.classList.add(".likeCount");
    likeCount.innerText = RandomNumberOfLikes(1, 156);
    divFooter.classList.add("footerPost");
    btnFooter.classList.add("btnOpenPost");
    btnFooter.innerText = "Abrir Post";

    btnFooter.id = posts[i].id_post
        

    pBody.innerText = posts[i].text;
    pBody.classList.add("lineLimiter");
    imgLikeFooter.classList.add("like");
    imgLikeFooter.src = "../../assets/img/like.svg"

    ulPosts.append(divUserCard);
    divUserCard.append(divpostHeaderAlign, div1Body);
    divpostHeaderAlign.append(imgProfile, divTitleUser);
    divTitleUser.append(pUsername, pJob);
    div1Body.append(divPostBody, divFooter);
    divPostBody.append(h2Body, pBody);
    divFooter.append(btnFooter, imgLikeFooter, likeCount);
    divPostBody.append(h2Body, pBody);

    const btnOpenPost = document.querySelectorAll(".btnOpenPost");
    const pModalText  = document.querySelector(".pModalText");

    }
    
}
function RandomNumberOfLikes(min, max) {
    max = Math.floor(max);
    min = Math.ceil(min);
    
    return Math.floor(Math.random() * (max - min) + min);
}
function btnFollowingFocus() {
    let btnFollow = document.querySelectorAll(".btnFollow");
    
    btnFollow.forEach(btnFollow => {
        btnFollow.addEventListener("click", (event) => {
            
            btnFollow.innerText = "Seguindo"
            btnFollow.style.backgroundColor = "#4263EB";
            btnFollow.style.color = "white";
            btnFollow.style.width = "65px";
            
            btnFollow.addEventListener("click", ()=> {
                btnFollow.innerText = "Seguir"
                btnFollow.style.backgroundColor = "white";
                btnFollow.style.color = "#212529";
                btnFollow.style.width = "55px";
            })
        })
    })
    
    
}

renderPosts();
buttonPost(); 
btnFollowingFocus();
