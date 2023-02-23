const btnSearching = document.querySelector(".nav-search__icon");
const searchInput = document.querySelector(".nav-search__input ");

btnSearching.addEventListener("click", () => {
    searchInput.classList.toggle("display-searching")
})

document.addEventListener('click', function (event) {
    let btnSearching = document.querySelector(".nav-search__icon");

    if (event.target !== btnSearching && !btnSearching.contains(event.target)) {
        console.log("click")

    }
});

