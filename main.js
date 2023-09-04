const populate = async (value, currency) => {
    let myStr = ""
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_vom9BA2r2KSNRdrMgmldlSMuPyOyiCNyaBgN4QFV&base_currency=" + currency
    let response = await fetch(url)
    let rJson = await response.json()
    document.querySelector(".output").style.display = "block"       //to make table visible

    for (let key of Object.keys(rJson["data"])) {

        //we use `` to convert the json format into string format.
        myStr += ` <tr>
                        <td>${key}</td>
                        <td>${parseFloat((rJson["data"][key]["value"] * value).toFixed(2))}</td>
                    </tr> 
                `
    }
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
}
const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value
    populate(value, currency)
})