// console.log("js loaded");
// let resp = {};
let resp = [];
let resp2 = [];
// let a = [];

const getData = async () => {
    try {
        await axios.get("https://jsonplaceholder.typicode.com/photos?_limit=20")
        .then(response => {
            // resp = response.data;
            resp.push(...response.data);
            resp2.push(...response.data);
            // a.push(...response.data);
            // console.log(a);
        })
        printData(resp);
    } catch (error) {
        console.log(error);
    }
}

const container = document.querySelector(".images");

const clearData = () => {
    container.innerHTML = "";
}

const printData = (input = []) => {
    // console.log(input);
    input.forEach(item => {
        // Element
        const postElement = document.createElement("div");
        postElement.setAttribute("class", "postElement");

        // ID
        const postID = document.createElement("div");
        postID.setAttribute("id", item.id);

        // Delete Button
        const buttonDel = document.createElement("button");
        buttonDel.setAttribute("class", "buttonDel");
        buttonDel.innerText = "Delete";
        buttonDel.addEventListener("click", () => {
            const index = resp.findIndex(items => items == item);
            console.log(index);
            postElement.remove();
            resp.splice(index, 1);
        })
            //TODO Get this in outside

        // Title
        const postTitle = document.createElement("div");
        postTitle.setAttribute("class", "postTitle");

        // Item
        const postItem = document.createElement("img");
        postItem.setAttribute("class", "postImg");

        // Values
        // postID.innerText = item.id;
        postTitle.innerText = item.title;
        postItem.src = item.thumbnailUrl;

        // Binding
        postElement.appendChild(postID);
        postElement.appendChild(postTitle);
        postElement.appendChild(postItem);
        postElement.appendChild(buttonDel);
        container.appendChild(postElement);
        // console.log("ended");
    })

}

getData();

// Searchbar
const input = document.querySelector("input");
input.innerHTML = "";
input.addEventListener("input", () => {
    filter = input.value;
    // if (filter == "" || filter == " ") {
    //     printData(resp);
    // }
    let test = resp.filter(item => item.title.includes(filter));
    container.innerHTML = "";
    printData(test);
})

// Reset
const breset = document.querySelector(".reset");
breset.addEventListener("click", () => {
    resp = [...resp2];
    clearData();
    printData(resp);
})

// Upload image
const form = document.querySelector(".form");
const ftitle = document.querySelector("#title");
const furl = document.querySelector("#url");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    // console.log(ftitle.value);
    let length = resp.length;
    resp[length] = {"id" : length, "title" : ftitle.value, "url" : "furl"};
    clearData();
    printData(resp);
})

// Delete button
// buttonDel = document.querySelector(".buttonDel");
/* buttonDel.addEventListener("click", () => {
    postElement.remove();
    delete item;
}) */
