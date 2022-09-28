

function openModal() {

    const btnOpenPost = document.querySelectorAll(".btnOpenPost");
    const modalWrapper = document.querySelector(".wrapper");
    const btnCloseModal = document.querySelector(".btnCloseModal");
    const pModalText  = document.querySelector(".pModalText");
    const modalTitle = document.querySelector(".modalTitle");
    const modalImg = document.querySelector(".modalImg");
    const modalUsername = document.querySelector(".modalUsername");
    const modalJob = document.querySelector(".modalJob");

    btnOpenPost.forEach(btn => {
        btn.addEventListener("click", (e) => {
            modalWrapper.classList.remove("hidden");
            const el = e.target;
            const id = el.parentElement.parentElement.parentElement.getAttribute("aria-labelledby");
            posts.forEach((elem) => {
                if(elem.id_post === Number(id)) {
                    pModalText.innerText = elem.text;
                    modalTitle.innerText = elem.title;
                }
            })

            users.forEach((elem) => {
                if(elem.id === Number(id)) {
                    modalImg.src = elem.img;
                    modalUsername.innerText = elem.user;
                    modalJob.innerText = elem.stack;

                }
            })

        })
    })

    btnCloseModal.addEventListener("click", (e) => {
        modalWrapper.classList.add("hidden");
    })
}

openModal();