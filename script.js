console.log("Prooceding Javascript");

let web_name = document.getElementById("web-name");
let web_url = document.getElementById("web-url");
let push_btn = document.getElementById("web-push");
let placer = document.querySelector(".placer");

function inject_sites() {
  let web_name_value = web_name.value;
  let web_url_value = web_url.value;

  if (!web_name_value || !web_url_value) {
    alert("error!");
    return;
  }

  let create_card = document.createElement("div");

  create_card.classList.add("card");

  create_card.innerHTML = `<span class="w-name">${web_name_value}</span><span class="w-url">${web_url_value}</span>`;

  placer.append(create_card);

  storeToLocalStorage(web_name_value, web_url_value)

}

push_btn.addEventListener("click", inject_sites)

function storecard(web_name, web_url) {
  let web_name_value = web_name.value;
  let web_url_value = web_url.value;

  let storage = []

  
}


// let axs = []
// console.log(axs);

// function pume(axs) {
//     let b = "saidur"
//     axs.push(b)
//     console.log(axs)
// }

// pume()
