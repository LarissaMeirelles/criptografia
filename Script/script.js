const selecao = document.getElementById('selecionar');
const btnrange= document.getElementById('pscoes');
const pscoes_numero= document.getElementById('pscoes_numero');
const textorange= document.getElementById('textoposicoes');
const ba64= document.getElementById('base64');


selecao.addEventListener('change', (event) => {

  if (selecao.value === "cc") {

    // Ocultar opção de incremento Cifra de César (quando for BASE64) //
  
    btnrange.style.visibility= 'visible';
    textorange.style.visibility= 'visible';
    pscoes_numero.style.visibility= 'visible';

  } else {
   
    // Mostrar opção de incremento Cifra de César  //

    btnrange.style.visibility= 'hidden';
    textorange.style.visibility= 'hidden';
    pscoes_numero.style.visibility= 'hidden';

  }
});
//código para mudar mensagem do botão e aplicação do DOM
const btnRadioCodificar = document.getElementById('btnRadioCodificar')
const btnRadioDecodificar = document.getElementById('btnRadioDecodificar')
const botaosubmit = document.getElementById('botaosubmit')

btnRadioCodificar.addEventListener('mudar', function () {
  botaosubmit.innerHTML = 'Codificar Mensagem'
})
btnRadioDecodificar.addEventListener('mudar', function () {
  botaosubmit.innerHTML = 'Decodificar Mensagem'
});


function codificar () {
  document.getElementById("botaosubmit").style.display = "inline"
  document.getElementById("botaoDecriptografar").style.display = "none"
}
function decodificar () {
  document.getElementById("botaosubmit").style.display = "none"
  document.getElementById("botaoDecriptografar").style.display = "inline"
}

function criptografia() {
  const text = document.getElementById('textoUsuario')
  const method = document.getElementById('selecionar')
  if (method.value === 'cc') {
    cc(text.value)
  } else {
    to64(text)
  }
}

function decriptografia(){
  const text = document.getElementById('textoUsuario')
  const method = document.getElementById('selecionar')
  if (method.value === 'cc') {
    cc(text.value)
  } else {
    to64(text)
  }
}


//Função para cifras de cesar e transformando o alfabeto em uma lista
function cc(text) {
 
  let posicoes = parseInt(document.getElementById('pscoes').value)
  const code = document.querySelector('input[name="code"]:checked').value
  if (code === 'decodificar') {
    posicoes = posicoes * -1
  }
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
  
  const textoOriginal = text.split('')
  let textoCriptografado = ''
  for (let i = 0; i < textoOriginal.length; i++) {
    let posicaoNoAlfabeto = alfabeto.indexOf(textoOriginal[i])
    
    if (posicaoNoAlfabeto + posicoes > alfabeto.length) {
      
      const somaPosicoes = posicaoNoAlfabeto + posicoes
      const diferenca = somaPosicoes - alfabeto.length
      posicaoNoAlfabeto = diferenca
    } else if (posicaoNoAlfabeto + posicoes < 0) {
      
      const somaPosicoes = posicaoNoAlfabeto + posicoes
      const diferenca = alfabeto.length - somaPosicoes
      posicaoNoAlfabeto = alfabeto.length + diferenca - 1
      console.log({ posicaoNoAlfabeto, diferenca, somaPosicoes })
    } else {
      posicaoNoAlfabeto += posicoes
    }
    console.log(alfabeto[posicaoNoAlfabeto])
 
    if (textoOriginal[i] === ' ') {
      textoCriptografado += ' '
    } else {
      textoCriptografado += alfabeto[posicaoNoAlfabeto]
    }

   
  }
  document.getElementById('textofinal').value = textoCriptografado
}

// Agora a função para codificar e decodificar base 64
function to64(text) {
  const code = document.querySelector('input[name="code"]:checked').value
  if (code === 'codificar') {
    document.getElementById('textofinal').value = btoa(text.value)
  } else if (code === 'decodificar') {
    document.getElementById('textofinal').value = atob(text.value)
  } else {
    alert('selecione codificar ou decodificar')
  }
}})
