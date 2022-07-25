import createView from "../createView.js"

export default function InsertQuoteView(props) {
    return `
<form class="container">
    <h1>New Quote</h1>
    <h1>New Quote</h1>
    <form>
        <label for="quoteInput" class="form-label">Quote</label>
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a quote">
        
         <label for="authorInput" class="form-label">Author</label>
        <input class="form-control" list="datalistOptions" id="quoteAuthor" placeholder="Enter a author">
        
        <button class="form-control" id="insert-btn">Insert Quote</button>
    </form>
</div>
`;
}

export function InsertQuoteEvents() {
    const addButton = document.querySelector("#insert-btn");
    addButton.addEventListener("click", addQuote);
}

function addQuote() {
    const quoteInput = document.querySelector("#quoteInput");
    const quoteText = quoteInput.value.trim();

    const authorInput = document.querySelector("#authorInput");
    const authorText = authorInput.value.trim();

    if (quoteText.length < 1) {
        console.log("Quote cannot be blank");
        return;
    }
    if (authorText.length < 1) {
        return;
    }

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([newQuote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/quotes", requestOptions)
        .then(function (response) {
            if(!response.ok) {
                console.log("add quote error: " + response.status);
            } else {
                console.log("add quote ok");
                createView("/quote");
            }
        });
}