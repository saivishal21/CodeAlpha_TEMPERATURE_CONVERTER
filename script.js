let original_link = document.getElementById("original_link")
let generate = document.getElementById("generate")
let shorten_link = document.getElementById("shorten_link")
let copy = document.getElementById("copy")


generate.addEventListener("click",() => {
    let url = original_link.value;
    fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer {TOKEN}',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
});
})