<script setup>
import { reactive } from 'vue';

const dataDoEvento = new Date("Sep 29, 2024 18:37:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
  const dataAtual = new Date();
  const timeStampAtual = dataAtual.getTime();

  const distanciaEvento = timeStampDoEvento - timeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;
  const segundosEmMs = 1000;

  const diasAteOEvento = Math.floor(distanciaEvento / diaEmMs);
  const horasAteOEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
  const minutosAteOEvento = Math.floor((distanciaEvento % horaEmMs) / minutosEmMs);
  const segundosAteOEvento = Math.floor((distanciaEvento % minutosEmMs) / segundosEmMs);

  document.querySelector('#contador_dia').innerHTML = `<strong>${diasAteOEvento}</strong> Dias`;
  document.querySelector('#contador_horas').innerHTML = `<strong>${horasAteOEvento}</strong> Horas`;
  document.querySelector('#contador_minutos').innerHTML = `<strong>${minutosAteOEvento}</strong> Minutos`;
  document.querySelector('#contador_segundos').innerHTML = `<strong>${segundosAteOEvento}</strong> Segundos`;

  if (distanciaEvento < 0) {
    clearInterval(contaAsHoras);
    document.querySelector('#contador').innerHTML = `A oferta chegou ao fim!`;
    document.querySelector('#contador').classList.add('bg-contador');
  }
}, 1000);


const produtos = reactive({
  quantidade: 1,
});

const decrementar = () => {
  produtos.quantidade--;
};

const incrementar = () => {
  produtos.quantidade++;
};

</script>

<template>

  <div class="container">
    <header id="header"
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="#" class="d-flex link-body-emphasis text-decoration-none fw-bold">
          <i class="fs-1 text-success me-2 bi bi-cart4"></i>
          <p class="fs-5 text-uppercase"><span class="text-success">Nome do</span> <br> Mercado</p>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#home" class="nav-link px-2 fw-bold active">Home</a></li>
        <li><a href="#sobre" class="nav-link px-2 fw-bold">Sobre</a></li>
        <li><a href="#servicos" class="nav-link px-2 fw-bold">Serciços</a></li>
        <li><a href="#shop" class="nav-link px-2 fw-bold">Shop</a></li>
        <li><a href="#contato" class="nav-link px-2 fw-bold">Contato</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <ul style="list-style: none;" class="d-flex align-items-center">
          <li><a href="#" class="nav-link"><i class="bi bi-search"></i></a></li>
          <li>
            <a href="#" class="nav-link">
              <i class="bi bi-cart4 carrinho-header"><span class="qtd-carrinho">10</span></i>
            </a>
          </li>
          <li><a href="#" class="btn btn-success">Cadastre-se</a></li>
        </ul>
      </div>
    </header>
  </div>

  <section id="home" class="mt-5 mb-5 pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <p class="fs-3">Entregas super rápidas</p>
          <h1 class="fs-1 fw-bold">
            Uma vida mais <strong style="color: rgb(77 175 72);">saudável</strong> com alimentos frescos.
          </h1>
          <p class="fs-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, iste. Dolorum amet
            fugit, maiores iure mollitia dignissimos ipsum ad perspiciatis.</p>
          <a href="#" class="btn btn-warning mb-5 text-center">Compre agora <i class="bi bi-arrow-right"></i></a>
        </div>
        <div class="col-lg-5">
          <img class="d-block w-100" src="./images/supermercado.png" alt="">
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
                  <p><strong class="fw-bold">Frete grátis</strong> <br> Com qualquer compra acima de R$100,00</p>
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
                  <p><strong class="fw-bold">Pagamento seguro</strong> <br> Ao utilizar nossos serviços</p>
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
                  <p><strong class="fw-bold">Qualidade garantida</strong> <br> Nossos produtos são da melhor
                    qualidade</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="sobre" class="mt-5 mb-5 pt-5 pb-5">
    <div class="container">
      <div class="row text-center">
        <h2>Escolha do cliente</h2>
        <h1 class="fw-bold">Confira nossos produtos</h1>
      </div>
      <div class="row mt-5">
        <div class="col-lg-6">
          <div class="img01 mb-3"></div>
        </div>
        <div class="col-lg-2">
          <div class="img02 mb-3"></div>
        </div>
        <div class="col-lg-4">
          <div class="img03 mb-3"></div>
        </div>
        <div class="col-lg-2">
          <div class="img02 mb-3"></div>
        </div>
        <div class="col-lg-4">
          <div class="img03 mb-3"></div>
        </div>
        <div class="col-lg-6">
          <div class="img01 mb-3"></div>
        </div>
      </div>
    </div>
  </section>

  <section id="oferta" class="mt-5 mb-5 pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="d-lg-flex align-items-center">
          <div class="col-lg-6">
            <img class="d-block w-100" src="./images/frutas.png" alt="">
          </div>
          <div style="color: white;" class="col-lg-6">
            <h2>Ofertas Semanais</h2>
            <h1 class="fw-bold">Confira a oferta do dia</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ut, dolor maxime at ad doloremque
              eligendi delectus nobis nulla facilis.</p>
            <div class="time-promotion">
              <div id="contador">
                <div class="row">
                  <div class="col mb-3">
                    <div id="contador_dia"></div>
                  </div>
                  <div class="col mb-3">
                    <div id="contador_horas"></div>
                  </div>
                  <div class="col mb-3">
                    <div id="contador_minutos"></div>
                  </div>
                  <div class="col mb-3">
                    <div id="contador_segundos"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="produtos" class="mt-5 mb-5 pt-5 pb-5">
    <div class="container">
      <div class="row text-center">
        <h2>Escolha do cliente</h2>
        <h1 class="fw-bold">Confira nossos produtos</h1>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/carne_produto.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Carne</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/queijo.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Queijo</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/tomates.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Tomate</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/leite_produto.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Leite</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/peixe.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Peixe</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card mt-5" style="width: 100%;">
            <img src="./images/brocolis.png" class="card-img-top" alt="...">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h5 class="card-title">Brocolis</h5>
                <p><strong>R$24,00/KG</strong></p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <p><span style="color: hsl(42.9deg 100% 59.41%);"><i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i class="bi bi-star-fill"></i> <i
                      class="bi bi-star-fill"></i></span> ( 122 Avaliações)</p>
                <p class="fw-bold" style="color: rgb(77 175 72);">Em Estoque</p>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div style="background-color: #ccc;" class="rounded">
                  <button @click="decrementar" class="btn btn-decrementar me-3" type="button">-</button>
                  <p class="d-inline" id="produto-qtd">{{ produtos.quantidade }}</p>
                  <button @click="incrementar" class="btn btn-incrementar ms-3" type="button">+</button>
                </div>
                <a href="#" class="nav-link fw-bold fs-3">
                  <i class="bi bi-cart-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="row text-center mt-5 d-block">
        <a href="#" style="width: 220px;" class="btn btn-warning mb-5 text-center">Veja todos os Produtos <i
            class="bi bi-arrow-right"></i></a>
      </div>
    </div>
  </section>

</template>

<style scoped>
.carrinho-header {
  position: relative;
  margin-right: 30px;
  margin-left: 30px;
}

.carrinho-header .qtd-carrinho {
  position: absolute;
  top: -10px;
  left: 15px;
}

.qtd-carrinho {
  font-weight: bold;
  color: rgb(77 175 72);
}

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

#sobre .img01 {
  background-image: url(./images/carne.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 310px;
  border-radius: 20px;
}

#sobre .img02 {
  background-image: url(./images/leite.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 310px;
  border-radius: 20px;
}

#sobre .img03 {
  background-image: url(./images/comida.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 310px;
  border-radius: 20px;
}

#oferta {
  background-color: rgb(77 175 72);
}

.bg-contador {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: #000;
  font-size: 20px;
  background-color: white;
}

#oferta .time-promotion #contador #contador_dia,
#oferta .time-promotion #contador #contador_horas,
#oferta .time-promotion #contador #contador_minutos,
#oferta .time-promotion #contador #contador_segundos {
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: #000;
  font-size: 30px;
  background-color: white;
}

#produtos .card {
  border: none;
  background-color: hsl(0deg 0% 97.25%);
}

#produtos .card img {
  height: 300px;
}

#produtos .btn-decrementar {
  background-color: hsl(46.23deg 100% 76.08%);
}

#produtos .btn-incrementar {
  background-color: hsl(117.89deg 70.37% 84.12%);
}
</style>