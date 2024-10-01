<template>
    <div class="container">
        <header id="header"
            class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
            <div class="col-md-3 mb-2 mb-md-0">
                <RouterLink to="/" class="d-flex link-body-emphasis text-decoration-none fw-bold">
                    <i class="fs-1 text-success me-2 bi bi-cart4"></i>
                    <p class="fs-5 text-uppercase"><span class="text-success">Nome do</span> <br> Mercado</p>
                </RouterLink>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li>
                    <RouterLink class="nav-link px-2 fw-bold" to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link px-2 fw-bold" to="/sobre">Sobre</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link px-2 fw-bold" to="/produtos">Produtos</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link px-2 fw-bold" to="/shop">Shop</RouterLink>
                </li>
                <li>
                    <RouterLink class="nav-link px-2 fw-bold" to="/contato">Contato</RouterLink>
                </li>
            </ul>

            <div class="col-md-3 text-end">
                <ul style="list-style: none;" class="d-flex align-items-center">
                    <li><a href="#" class="nav-link"><i class="bi bi-search"></i></a></li>
                    <li>
                        <a href="#" class="nav-link ms-5 me-5">
                            <i class="bi bi-cart4"></i>
                        </a>
                    </li>
                    <li><a href="#" class="btn btn-success">Cadastre-se</a></li>
                </ul>
            </div>
        </header>
    </div>
</template>

<style scoped>
#header {
    background-color: white;
}

#header .nav li a {
    color: #000;
    transition: .5s ease;
}

#header .nav li a:hover {
    color: rgb(77 175 72);
}

#header .nav li .active {
  color: rgb(77 175 72);
}
</style>