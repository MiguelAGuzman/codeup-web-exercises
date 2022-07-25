import createView from "../createView.js"

export default function InsertQuote(props) {
    return `
<form class="container">
    <h1>New Quote</h1>
    <form>
        <label for="quoteText" class="form-label">Quote</label>
        <input class="form-control" list="datalistOptions" id="quoteText" placeholder="Enter a quote">
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
    const quoteInput = document.querySelector("#quoteText");
    const quote = quoteInput.value.trim();
    if (quote.length < 1) {
        console.log("Fact cannot be blank");
        return;
    }

    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': DOG_QUOTE_API_KEY
        },
        body: JSON.stringify([quote])
    }
    fetch("https://dogfacts.fulgentcorp.com:12250/v1/facts", requestOptions)
        .then(function (response) {
            if(!response.ok) {
                console.log("add quote error: " + response.status);
            } else {
                console.log("add quote ok");
                createView("/quote");
            }
        });
}