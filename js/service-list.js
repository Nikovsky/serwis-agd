const wrapper = document.querySelector(".service-city"),
    selectBtn = wrapper.querySelector(".select-btn"),
    searchInp = wrapper.querySelector("input"),
    options = wrapper.querySelector(".options"),
    sci = document.querySelector(".service-city-info"),
    go = sci.querySelector("#godzinyOtwarcia"),
    as = sci.querySelector("#adresSerwisu"),
    city = sci.querySelector("#city"),
    tel = sci.querySelector("#tel");

const services = [
    "Będzin", "Bydgoszcz", "Bytom", "Chojnice", "Chorzów", "Elbląg", "Gdańsk", "Gliwice",
    "Gniezno", "Katowice", "Kluczbork", "Kraków", "Lebork", "Lidzbark",
    "Łódź", "Malbork", "Mrągowo", "Mysłowice", "Olsztyn", "Opole"]

function addService(selectedService) {
    options.innerHTML = "";
    services.forEach(service => {
        let isSelected = service == selectedService ? "selected" : "";
        let li = `<li onclick="updateService(this)" class="${isSelected}">${service}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
    if (selectedService === "Będzin") {
        go.innerHTML = "6:00 - 14:00";
        as.innerHTML = "ul. Kwiatow 5";
        city.innerHTML = "Będzin";
        tel.innerHTML = "+48 453-543-234";
    }
    else if (selectedService === "Bydgoszcz") {
        go.innerHTML = "8:00 - 17:00";
        as.innerHTML = "ul. Zielona 45/1";
        city.innerHTML = "Bydgoszcz";
        tel.innerHTML = "+48 942-853-544";
    }
    else if (selectedService === "Bytom") {
        go.innerHTML = "10:00 - 17:30";
        as.innerHTML = "ul. Żołnierska 34";
        city.innerHTML = "Bytom";
        tel.innerHTML = "+48 454-235-852";
    }
    else if (selectedService === "Chojnice") {
        go.innerHTML = "10:00 - 14:00";
        as.innerHTML = "ul. Rynek 23";
        city.innerHTML = "Chojnice";
        tel.innerHTML = "+48 546-945-247";
    }
    else if (selectedService === "Chorzów") {
        go.innerHTML = "09:00 - 14:00";
        as.innerHTML = "ul. Słoneczna 2";
        city.innerHTML = "Chorzów";
        tel.innerHTML = "+48 564-452-979";
    }
    else if (selectedService === "Elbląg") {
        go.innerHTML = "10:35 - 16:10";
        as.innerHTML = "ul. Uliczna 12/2c";
        city.innerHTML = "Elbląg";
        tel.innerHTML = "+48 564-452-542";
    }
    else if (selectedService === "Gdańsk") {
        go.innerHTML = "10:00 - 18:00";
        as.innerHTML = "ul. Stoczniowa 12";
        city.innerHTML = "Gdańsk";
        tel.innerHTML = "+48 463-678-887";
    }
    else if (selectedService === "Gliwice") {
        go.innerHTML = "12:00 - 18:00";
        as.innerHTML = "ul. Portowa 3";
        city.innerHTML = "Gliwice";
        tel.innerHTML = "+48 435-334-885";
    }
    else if (selectedService === "Gniezno") {
        go.innerHTML = "11:00 - 14:00";
        as.innerHTML = "ul. Rycerska 16";
        city.innerHTML = "Gniezno";
        tel.innerHTML = "+48 234-442-945";
    }
    else if (selectedService === "Katowice") {
        go.innerHTML = "11:00 - 17:00";
        as.innerHTML = "ul. Śląska 34";
        city.innerHTML = "Katowice";
        tel.innerHTML = "+48 646-353-989";
    }
    else if (selectedService === "Kluczbork") {
        go.innerHTML = "10:00 - 17:00";
        as.innerHTML = "ul. Sybiraków 23";
        city.innerHTML = "Kluczbork";
        tel.innerHTML = "+48 886-862-546";
    }
    else if (selectedService === "Kraków") {
        go.innerHTML = "10:00 - 16:00";
        as.innerHTML = "ul. Sybiraków 13";
        city.innerHTML = "Kraków";
        tel.innerHTML = "+48 753-345-963";
    }
    else if (selectedService === "Lebork") {
        go.innerHTML = "10:00 - 16:00";
        as.innerHTML = "ul. Sysna 10";
        city.innerHTML = "Lebork";
        tel.innerHTML = "+48 564-163-855";
    }
    else if (selectedService === "Lidzbark") {
        go.innerHTML = "08:30 - 16:00";
        as.innerHTML = "ul. Cieszaka 19";
        city.innerHTML = "Lidzbark";
        tel.innerHTML = "+48 453-864-854";
    }
    else if (selectedService === "Łódź") {
        go.innerHTML = "09:30 - 19:00";
        as.innerHTML = "ul. Stateczna 6";
        city.innerHTML = "Łódź";
        tel.innerHTML = "+48 456-563-776";
    }
    else if (selectedService === "Malbork") {
        go.innerHTML = "09:30 - 17:00";
        as.innerHTML = "ul. Rycerska II";
        city.innerHTML = "Malbork";
        tel.innerHTML = "+48 343-553-234";
    }
    else if (selectedService === "Mrągowo") {
        go.innerHTML = "10:30 - 17:00";
        as.innerHTML = "ul. Jeziorna 56";
        city.innerHTML = "Mrągowo";
        tel.innerHTML = "+48 746-753-342";
    }
    else if (selectedService === "Mysłowice") {
        go.innerHTML = "9:00 - 12:00";
        as.innerHTML = "ul. Katowicka 12";
        city.innerHTML = "Mysłowice";
        tel.innerHTML = "+48 223-456-578";
    }
    else if (selectedService === "Olsztyn") {
        go.innerHTML = "10:00 - 15:00";
        as.innerHTML = "ul. Zamkowka 2";
        city.innerHTML = "Olsztyn";
        tel.innerHTML = "+48 567-884-357";
    }
    else if (selectedService === "Opole") {
        go.innerHTML = "13:00 - 18:00";
        as.innerHTML = "ul. Oleska 45";
        city.innerHTML = "Opole";
        tel.innerHTML = "+48 567-884-357";
    }
}

addService();

function updateService(selectedLi) {
    searchInp.value = "";
    addService(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
};

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = services.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateService(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px">Nie znaleziono serwisu</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));