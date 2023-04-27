const cajas = document.querySelectorAll(".caja");
image = document.querySelector(".image");

//bucle a través de cada elemento de las cajas//

cajas.forEach(caja => {
    //elemento arrastrable se arrastra sobre un elemento caja//

    caja.addEventListener("dragover", (e) => {
        e.preventDefault(); //evita el comportamiento por defecto//
        caja.classList.add("sobre")
    });

    // elemento arrastrable sale por encima de un elemento caja//
    caja.addEventListener("dragleave", () => {
        caja.classList.remove("sobre")
    });

    // se suelta un elemento arrastrable sobre un elemento caja//
    caja.addEventListener("drop", () => {
        caja.appendChild(image);
        caja.classList.remove("sobre");
    })

});
