const root = document.getElementById("root");
const siteSearch = document.getElementById("site-search");
const selectTest = document.getElementById("tests-select");

siteSearch.addEventListener("input", highlight);
selectTest.addEventListener("change", highlight);

/* Мой код: */
function highlight() {
    let cardItem = document.querySelector(".card-item");
    let reg = new RegExp(siteSearch.value, 'gi');
    let result = cardItem.innerText.replace(reg, (str) => {
        return "<span class='search-results'>" + str + "</span>";
    });
    cardItem.innerHTML = result;
}