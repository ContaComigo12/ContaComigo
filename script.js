$(document).ready(function(){

//Geral

// Modals de Histórias

function limpaBtns(){
    document.querySelector('#btnVoltar').classList.remove("btnSumir");
    document.querySelector('#btnProximo').classList.remove("btnSumir");
    document.querySelector('#btnComecar').classList.remove("btnSumir");
    document.querySelector('#btnVoltar').classList.remove("btnAparecer");
    document.querySelector('#btnProximo').classList.remove("btnAparecer");
    document.querySelector('#btnComecar').classList.remove("btnAparecer");
}

function padraoBtns(){
    document.querySelector('#btnVoltar').classList.add("btnSumir");
    document.querySelector('#btnProximo').classList.add("btnSumir");
    document.querySelector('#btnComecar').classList.add("btnAparecer");
}

$('#btnComecar').on('click', function mudarBtns() {
    document.querySelector('#btnVoltar').classList.toggle("btnSumir");
    document.querySelector('#btnVoltar').classList.toggle("btnAparecer");
    document.querySelector('#btnProximo').classList.toggle("btnSumir");
    document.querySelector('#btnProximo').classList.toggle("btnAparecer");
    document.querySelector('#btnComecar').classList.toggle("btnSumir");
    document.querySelector('#btnComecar').classList.toggle("btnAparecer");
});

// Parallax
setTimeout(function(){

    $('#frase').parallax({imageSrc: 'imagens/parallax.jpg'});
    $('#div-sobre').parallax({imageSrc: 'imagens/parallax.jpg'});

},250);



// Como Me Sinto

    //Sentimentos Modal

    $('#historia-sentimentos-modal').modal({
        show: false,
        backdrop: 'static',
        keyboard: false
    }) 


    $('#select-triste').on('click', function abreModalHistoria() {
        limpaBtns();
        padraoBtns();        
        $("#historia-sentimentos-modal").modal({
            show: true
        });
    });
    
    function checkitemSentimentos(){
        const $this = $('#sentimentos-carousel');

        if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
            document.querySelector('#btnVoltar').setAttribute('disabled','');
            document.querySelector('#btnProximo').removeAttribute('disabled');
        } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
            document.querySelector('#btnProximo').setAttribute('disabled','');
            document.querySelector('#btnVoltar').removeAttribute('disabled');
        } else {
            document.querySelector('#btnVoltar').removeAttribute('disabled');
            document.querySelector('#btnProximo').removeAttribute('disabled');
        }
    }

    $('#sentimentos-carousel').on('slid.bs.carousel', checkitemSentimentos);

    //Modal Get Nome

    $('#nome-modal').modal({
        backdrop: 'static',
        keyboard: false
    })

    function abreModal() {
        $("#nome-modal").modal({
             show: true
           });
        }
       setTimeout(abreModal, 1000);
    
       window.onload = function abreModal(){
        
       }

       $('#btnSalvar').on('click', function(){
        var nome = document.getElementById("getNome").value;
        if(nome != ""){
            document.getElementById("nome").innerHTML = nome + '!';  
        }else{
            document.getElementById("nome").innerHTML = 'Amigo!';
        }
              
       });
    
       $('#getNome').keydown(function (e) {
        if (e.keyCode == 13) {
            document.getElementById("btnSalvar").click();
        }          
        


    });
// Fim Como me Sinto

//Index

    //Virar Card

    $('.face').on('click', function() {

        let id = $(this).attr('id');

        if(id == 'carta1'){
            document.querySelector('#frente1').classList.toggle("virarFrente");
            document.querySelector('#verso1').classList.toggle("virarVerso");
        }else if(id == 'carta2'){
            document.querySelector('#frente2').classList.toggle("virarFrente");
            document.querySelector('#verso2').classList.toggle("virarVerso");
        }else{
            document.querySelector('#frente3').classList.toggle("virarFrente");
            document.querySelector('#verso3').classList.toggle("virarVerso");
        }
        
    });


// Fim Index

// Desbravador

    // Modal Desbravador

    $('#desbravador-modal').modal({
        show: false,
        backdrop: 'static',
        keyboard: false
    }) 


    $('.box-desbravador.11').on('click', function abreModalAbertura() {
        limpaBtns();
        padraoBtns();        
        $("#desbravador-modal").modal({
            show: true
        });
    });
    
    function checkitem(){
        const $this = $('#desbravador-carousel');

        if ($('.carousel-inner .itens .carousel-item:first').hasClass('active')) {
            document.querySelector('#btnVoltar').setAttribute('disabled','');
            document.querySelector('#btnProximo').removeAttribute('disabled');
        } else if ($('.carousel-inner .itens .carousel-item:last').hasClass('active')) {
            document.querySelector('#btnProximo').setAttribute('disabled','');
            document.querySelector('#btnVoltar').removeAttribute('disabled');
        } else {
            document.querySelector('#btnVoltar').removeAttribute('disabled');
            document.querySelector('#btnProximo').removeAttribute('disabled');
        }
    }

    $('#desbravador-carousel').on('slid.bs.carousel', checkitem);

    //Apagar{
        function limpaBtns2(){
            document.querySelector('#btnVoltar2').classList.remove("btnSumir");
            document.querySelector('#btnProximo2').classList.remove("btnSumir");
            document.querySelector('#btnComecar2').classList.remove("btnSumir");
            document.querySelector('#btnVoltar2').classList.remove("btnAparecer");
            document.querySelector('#btnProximo2').classList.remove("btnAparecer");
            document.querySelector('#btnComecar2').classList.remove("btnAparecer");
        }
    
        function padraoBtns2(){
            document.querySelector('#btnVoltar2').classList.add("btnSumir");
            document.querySelector('#btnProximo2').classList.add("btnSumir");
            document.querySelector('#btnComecar2').classList.add("btnAparecer");
        }
    
        $('#btnComecar2').on('click', function mudarBtns() {
            document.querySelector('#btnVoltar2').classList.toggle("btnSumir");
            document.querySelector('#btnVoltar2').classList.toggle("btnAparecer");
            document.querySelector('#btnProximo2').classList.toggle("btnSumir");
            document.querySelector('#btnProximo2').classList.toggle("btnAparecer");
            document.querySelector('#btnComecar2').classList.toggle("btnSumir");
            document.querySelector('#btnComecar2').classList.toggle("btnAparecer");
        });
    
    
    
        $('#desbravador-modal2').modal({
            show: false,
            backdrop: 'static',
            keyboard: false
        }) 
    
    
        $('.box-desbravador.22').on('click', function abreModalAbertura2() {
            limpaBtns2();
            padraoBtns2();        
            $("#desbravador-modal2").modal({
                show: true
            });
        });
        
        function checkitem2(){
            const $this = $('#desbravador-carousel2');
    
            if ($('.carousel-inner .2 .carousel-item:first').hasClass('active')) {
                document.querySelector('#btnVoltar2').setAttribute('disabled','');
                document.querySelector('#btnProximo2').removeAttribute('disabled');
            } else if ($('.carousel-inner .2 .carousel-item:last').hasClass('active')) {
                document.querySelector('#btnProximo2').setAttribute('disabled','');
                document.querySelector('#btnVoltar2').removeAttribute('disabled');
            } else {
                document.querySelector('#btnVoltar2').removeAttribute('disabled');
                document.querySelector('#btnProximo2').removeAttribute('disabled');
            }
        }
    
        $('#desbravador-carousel2').on('slid.bs.carousel', checkitem2);
    //}

    // Filtro Desbravador

    $('.filterSelect').on('click', function(){
        let tipo = $(this).attr('id');
        let boxes = $('.box-desbravador');

        $('.filterSelect').removeClass('ativo');
        $(this).addClass('ativo');

        if(tipo == 'ciencias-btn'){            
            mostrarBoxes('ciencias',boxes);
        }else if(tipo == 'cultura-btn'){
            mostrarBoxes('cultura',boxes);
        }else if(tipo == 'artes-btn'){
            mostrarBoxes('artes',boxes);
        }else if(tipo == 'curiosidades-btn'){
            mostrarBoxes('curiosidades',boxes);
        }else if(tipo == 'manuais-btn'){
            mostrarBoxes('manuais',boxes);
        }else{
            mostrarBoxes('todos',boxes)
        }
    });

    function mostrarBoxes(tipo, boxes){
        if(tipo == 'todos'){    
            $(boxes).fadeIn();     
        }else{     
            $(boxes).each(function(){
                if(!$(this).hasClass(tipo)){
                    $(this).fadeOut();
                }else{
                    $(this).fadeIn();
                }
            });
        }
    }

});



