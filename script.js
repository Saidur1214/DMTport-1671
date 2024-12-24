console.log("Prooceding Javascript");

let web_name = document.getElementById("web-name");
let web_url = document.getElementById("web-url");
let push_btn = document.getElementById("web-push");
let placer = document.querySelector(".placer");

function loadcard() {
  if (localStorage.length === 0) {
    console.log("Failed to load load or no data INIT");
    return;
  }

  for (let l = 0; l < localStorage.length; l++) {
    let stored_name = localStorage.key(l);
    let stored_url = localStorage.getItem(stored_name);

    let create_card = document.createElement("div");

    create_card.classList.add("card");

    create_card.innerHTML = `<span class="w-name">${stored_name}</span><span class="w-url">${stored_url}</span>`;

    placer.append(create_card);
  }
}

loadcard();

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
  create_card.innerHTML = `<span class="w-name"><a href="${web_url_value}">${web_name_value}</a></span><span class="w-url"><a href="${web_url_value}">${web_url_value}</a></span>`;

  placer.append(create_card);

  localStorage.setItem(web_name_value, web_url_value);
}

push_btn.addEventListener("click", inject_sites);
