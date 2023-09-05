const populate = async (amount, currency) => {
    
    let myStr = ""

    //modify url "&base_currency=" + currency
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_e9tVEpkt644lqD8Q0YcpKrONFUwug5MBYac6qyvL&base_currency=" + currency

    let response = await fetch(url)
    let input = await response.json()

    document.querySelector(".output").style.display = "block"       //to make table visible

    //the 'input' response contains various "data"-"value" mapping for different currencies 
    for (let key of Object.keys(input["data"])) {

        //we use `` to convert the json format into string format.
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${parseFloat((input["data"][key]["value"] * amount).toFixed(2))}</td>
                    </tr> 
                `
    }

    //inserting converted currencies in the table
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {

    e.preventDefault()
    const amount = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(amount, currency)
})
