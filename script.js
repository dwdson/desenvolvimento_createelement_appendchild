///criação do título
let titulo = document.createElement("h1");
titulo.innerText = "Produto a venda!!!"
titulo.id = "titulo"

let bodyTitulo = document.querySelector("body")
bodyTitulo.appendChild(titulo);

let subtitulo = document.createElement("h2");
subtitulo.innerText = "Dispenso curiosos."
subtitulo.id = "subtitulo"

let body_subtitulo = document.querySelector("body")
body_subtitulo.appendChild(subtitulo);

//criando uma div com uma breve história do produto com imagem

const consoleAtari = document.createElement("div");

consoleAtari.innerHTML =

`<h2 class="post-titulo">Atari</h2>

<p class="post-texto">

  Atari: esse tem história!!!

</p>
<p>Atari 2600, originalmente vendido como Atari Video Computer System ou Atari VCS até novembro de 1982, é um videogame projetado por Jay Miner e lançado em 11 de setembro de 1977 nos Estados Unidos e em 1983 no Brasil. Sendo descontinuado oficialmente em 1992.</P>
<img src= img/"Atari.png" alt="imagem do produto" >  
`
const console = document.querySelector("body");
console.appendChild(consoleAtari);

const especificoesTecnicas = document.createElement("div");

especificoesTecnicas.innerHTML = `
<table border="1" width="60%" align="center" bgcolor="aqua">
          <caption>
            <b>Tabela de preços</b>
          </caption>
          <thead>
            <tr>
              <th>Ano de fabricação</th>
              <th>Pacote</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1983</td>
              <td>Console + 02 Joystick</td>
              <td>R$500,00</td>
            </tr>

            <tr>
              <td><strong>Defeitos apresentados</strong></td>
              <td><strong>Especificações</strong></td>
              
            </tr>
          </tbody>

          <tfoot>
            <tr>
              <td>Nenhum</td>
              <td>Bits: 8 bits
              CPU: Variante do processador 6502 (Real: 6507)
              Frequência de operação: 1,19 MHz
              Memória RAM: 128 Bytes
              Memória ROM: Capacidade máxima de 4 kB.
              Resolução: 160x192 (NTSC) / 160x228 (PAL)
              Cores: 128 cores no sistema NTSC, pouco menos no sistema PAL.
              Som: 2 canais (cada um com um chip próprio)</td>
              
            </tr>
          </tfoot>
        </table>
`
const especificações = document.querySelector("body");
especificações.appendChild(especificoesTecnicas);


