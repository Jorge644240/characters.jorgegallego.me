document.querySelector("textarea").addEventListener("input", () => {
    const length = document.querySelector("textarea").value.length;
    document.querySelector("p span").innerHTML = length;
    if (length < 10) document.body.classList = ["black"]
    else if (length < 20) document.body.classList = ["red"];
    else if (length < 30) document.body.classList = ["yellow"];
    else document.body.classList = ["green"];
});

const textarea = () => {
    if (window.innerWidth < 500) {
        document.querySelector("textarea").cols = "20";
        document.querySelector("textarea").rows = "4";
    } else {
        document.querySelector("textarea").cols = "30";
        document.querySelector("textarea").rows = "5";
    }
}

window.onload = window.onresize = textarea;