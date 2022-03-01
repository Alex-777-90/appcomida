
let prato = ""
let sobremesa=""
let bebida =""

function frango(){

 document.getElementById("prato_frango").style.borderColor = "green"
 document.getElementById("carne").style.borderColor = "white"
 document.getElementById("vegetariano").style.borderColor = "white"

prato = "Frango"

}

function carne(){

    document.getElementById("carne").style.borderColor = "green"
    document.getElementById("prato_frango").style.borderColor = "white"
    document.getElementById("vegetariano").style.borderColor = "white"

    prato = " Yakisoba de Carne"

}

function vegan(){

    document.getElementById("vegetariano").style.borderColor = "green"
    document.getElementById("carne").style.borderColor = "white"
    document.getElementById("prato_frango").style.borderColor = "white"
    
    prato = " Yakisoba Vegetariano"

}

function coca_cola(){

    document.getElementById("coca").style.borderColor = "green"
    document.getElementById("fanta").style.borderColor = "white"
 
    bebida = "Coca-Cola"

}

function Fanta(){

    document.getElementById("fanta").style.borderColor = "green"
    document.getElementById("coca").style.borderColor = "white"

    bebida="Fanta"

}

function bolo_cenoura(){

    document.getElementById("bolo").style.borderColor = "green"
    document.getElementById("sorvete").style.borderColor = "white"

    sobremesa ="Bolo de cenoura"


}

function sorvetes (){


    document.getElementById("sorvete").style.borderColor = "green"
    document.getElementById("bolo").style.borderColor = "white"

    sobremesa = "Sorvete"

}

function limpa(){
    
    if (prato == "" && sobremesa == "" && bebida == "" ){
      
        window.alert("Você não selecionou nenhum item  ,por favor verifique alguma opção e selecione")
    }else{
    document.getElementById("prato_frango").style.borderColor = "white"
    document.getElementById("carne").style.borderColor = "white"
    document.getElementById("vegetariano").style.borderColor = "white"
    document.getElementById("bolo").style.borderColor = "white"
    document.getElementById("sorvete").style.borderColor = "white"
    document.getElementById("coca").style.borderColor = "white"
    document.getElementById("fanta").style.borderColor = "white"

    prato = ""
    sobremesa =""
    bebida =""

    }

}

function funcao_pedido(){

    if (prato == "" && sobremesa == "" && bebida == "" ){
      
        window.alert("Você não selecionou nenhum item  ,por favor verifique alguma opção e selecione")


    }else if(prato != "" && sobremesa == "" && bebida == "" ){ 

        let mensagem = `Olá gostaria de realizar o meu pedido só do ${prato}`

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);


    }else if(prato == "" && sobremesa != "" && bebida == "" ){

        let mensagem = `Olá gostaria de realizar o meu pedido só o ${sobremesa}`

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);


    }else if(prato == "" && sobremesa == "" && bebida != "" ){

        let mensagem = `Olá gostaria de realizar o meu pedido que é só a ${bebida}`

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);



    }else if(prato != "" && sobremesa != "" && bebida != "" ){
       
        let mensagem = `Olá gostaria de realizar o meu pedido do combo que é ${prato} , ${sobremesa} e ${bebida} `

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);


    }else if(prato != "" && sobremesa == "" && bebida != "" ){

        let mensagem = `Olá gostaria de realizar o meu pedido do ${prato} e da  ${bebida} `

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);


    }else if(prato != "" && sobremesa != "" && bebida == "" ){

        let mensagem = `Olá gostaria de realizar o meu pedido do ${prato} e do ${sobremesa} `

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);



    }else{

        let mensagem = `Olá gostaria de realizar o meu pedido da ${bebida} e do ${sobremesa} `

        window.open(`https://wa.me/+5511966471637?text= ${mensagem}`);

    }

}