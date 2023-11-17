const listMenu = document.querySelector(".menu_pilihan"), tombolMenu = listMenu.querySelector(".tombol_menu"), sosmeds = listMenu.querySelectorAll(".sosmed"), sosmedteks = listMenu.querySelectorAll(".tombol_teks");

tombolMenu.addEventListener("click", () => listMenu.classList.toggle("active"));

sosmeds.forEach(sosmed => {
    sosmed.addEventListener("click", () => {
        let selectedSosmed = sosmed.querySelector(".sosmed_teks").innerText;
        sosmedteks.innerHTML = selectedSosmed;

        listMenu.classList.remove("active");
    })
})
