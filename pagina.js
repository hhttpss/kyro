const searchButton =
    document.getElementById(
        "searchButton"
    );

const searchPanel =
    document.getElementById(
        "searchPanel"
    );

const searchClose =
    document.getElementById(
        "searchClose"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );


// ==============================
// ABRIR BUSCADOR
// ==============================

searchButton.addEventListener(
    "click",
    function () {

        searchPanel.classList.add(
            "active"
        );

        setTimeout(
            function () {

                searchInput.focus();

            },
            300
        );

    }
);


// ==============================
// CERRAR BUSCADOR
// ==============================

searchClose.addEventListener(
    "click",
    function () {

        searchPanel.classList.remove(
            "active"
        );

    }
);


// ==============================
// CERRAR BUSCADOR CON ESC
// ==============================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            searchPanel.classList.remove(
                "active"
            );

        }

    }
);


// ==============================
// BUSCAR CON ENTER
// ==============================

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            const busqueda =
                searchInput.value.trim();


            if (busqueda === "") {
                return;
            }


            window.location.href =
                "catalogo.html?buscar=" +
                encodeURIComponent(
                    busqueda
                );

        }

    }
);


// ==============================
// CONTADOR DEL CARRITO
// ==============================

function actualizarContadorCarrito() {

    const carrito =
        JSON.parse(
            localStorage.getItem(
                "carritoKYRO"
            )
        ) || [];


    const totalProductos =
        carrito.reduce(
            function (
                total,
                producto
            ) {

                return (
                    total +
                    Number(
                        producto.cantidad
                    )
                );

            },
            0
        );


    const contador =
        document.getElementById(
            "cartCount"
        );


    if (contador) {

        contador.textContent =
            totalProductos;

    }

}


// EJECUTAR AL ABRIR LA PÁGINA

actualizarContadorCarrito();


// VOLVER A ACTUALIZAR SI REGRESAMOS
// A LA PÁGINA CON EL BOTÓN ATRÁS

window.addEventListener(
    "pageshow",
    function () {

        actualizarContadorCarrito();

    }
);