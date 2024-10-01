<template>
    <section id="home" class="mt-5 mb-5 pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <p class="fs-3">Entregas super rápidas</p>
                    <h1 class="fs-1 fw-bold">
                        Uma vida mais <strong style="color: rgb(77 175 72);">saudável</strong> com alimentos frescos.
                    </h1>
                    <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, iste. Dolorum
                        amet
                        fugit, maiores iure mollitia dignissimos ipsum ad perspiciatis.</p>
                    <a href="#" class="btn btn-warning mb-5 text-center">Compre agora <i
                            class="bi bi-arrow-right"></i></a>
                </div>
                <div class="col-lg-5">
                    <img class="d-block w-100" src="../images/supermercado.png" alt="">
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="home-card-icon p-3 me-2 ms-2">
                                    <i class="bi bi-truck"></i>
                                </div>
                                <div>
                                    <p><strong class="fw-bold">Frete grátis</strong> <br> Com qualquer compra acima de
                                        R$100,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="home-card-icon p-3 me-2 ms-2">
                                    <i class="bi bi-credit-card-2-back-fill"></i>
                                </div>
                                <div>
                                    <p><strong class="fw-bold">Pagamento seguro</strong> <br> Ao utilizar nossos
                                        serviços</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="home-card-icon p-3 me-2 ms-2">
                                    <i class="bi bi-hand-thumbs-up"></i>
                                </div>
                                <div>
                                    <p><strong class="fw-bold">Qualidade garantida</strong> <br> Nossos produtos são da
                                        melhor
                                        qualidade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#home .card {
    border-color: rgb(77 175 72);
    border-radius: 20px;
}

#home .card .home-card-icon {
    border-radius: 50%;
    background-color: rgb(77 175 72);
    text-align: center;
    color: white;
}
</style>