/*-----1 FONCTION POUR SWITCH DE LOGO-----*/
function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("Images/Dr_Stone_logo.png")) {
        Image_Id.src = "Images/Dr_Stone_logo_2.png";
    } else {
        Image_Id.src = "Images/Dr_Stone_logo.png";
    }
}

/*-----2 FONCTION POUR LE MENU RENDANT VISIBLE LES CATEG ET LES SOUS CATEG-----*/
function show() {
    document.getElementById('musique').style.visibility = "visible";
}

function hide() {
    document.getElementById('musique').style.visibility = "hidden";
}

function show1() {
    document.getElementById('inventions').style.visibility = "visible";
}

function hide1() {
    document.getElementById('inventions').style.visibility = "hidden";
}

function showost() {
    document.getElementById('ost').style.visibility = "visible";
}

function hideost() {
    document.getElementById('ost').style.visibility = "hidden";
}

function showop() {
    document.getElementById('op').style.visibility = "visible";
}

function hideop() {
    document.getElementById('op').style.visibility = "hidden";
}

function showed() {
    document.getElementById('ed').style.visibility = "visible";
}

function hideed() {
    document.getElementById('ed').style.visibility = "hidden";
}

/*-----3 FONCTIONS POUR CUSTOM LE CURSEUR DE LA PAGE D'ACCUEIL-----*/
document.onmousemove = follow_cursor;
function follow_cursor(evenement){
    if(navigator.appName=="Microsoft Internet Explorer") {
        var x = event.x+document.body.scrollLeft;
        var y = event.y+document.body.scrollTop;
    }
    else{
        var x =  evenement.pageX;
        var y =  evenement.pageY;
    }

    document.getElementById("pointer").style.left = (x-10)+'px';
    document.getElementById("pointer").style.top  = (y-10)+'px';
    document.getElementById("cursor").style.left = (x-5)+'px';
    document.getElementById("cursor").style.top  = (y-5)+'px';
    document.getElementById("hand").style.left = (x-41)+'px';
    document.getElementById("hand").style.top = (y-5)+'px';
}

function cursor_to_hand() {
    document.getElementById('cursor').style.visibility = "hidden";
    document.getElementById('hand').style.visibility = "visible";
}
function hand_to_cursor() {
    document.getElementById('cursor').style.visibility = "visible";
    document.getElementById('hand').style.visibility = "hidden";
}

document.addEventListener('click', ()=>{
    document.getElementById('pointer').style.display = "block";

    setTimeout(()=>{
        document.getElementById('pointer').style.display = "none";
    }, 500);
})

/*-----4 FONCTION QUI PERMET DE SWITCH DE PAGE POUR LANCER L'ANIMATION DE MECHA SENKU-----*/
function start_animation(){
    let clique = 0;
    console.log(clique);
    if(clique=1){
    document.location.href="senku_cola2.html";
    }
}

/*-----FONCTIONS POUR L'ANIMATION DE MECHA SENKU-----*/

/*-----5 FONCTION POUR QUE LE TEXTE S'ECRIVE TOUT SEUL (c à nous))-----*/

function ékritouseul(){
    const pre = document.querySelector('pre')
    const text = "     Salut, je suis Mecha Senku !        \n      De l'eau gazeuse, de la coriandre, \n        du citron vert et du caramel\n              fait avec du miel. \n       Mélangez et vous obtenez du Cola ! \n Pressez du citron vert sur de la coriandre \n    écrasée pour sentir l'odeur du Cola ! \n                 Ça déchire !"

    let i = 0

    const interval = setInterval(() => {
        pre.innerHTML += text[i]
        i++

        if(i >= text.length) {
            clearInterval(interval)
        }
    },36)
}


/*-----6 FONCTION QUI LANCE L'AUDIO-----*/

function playaudio(){
    document.getElementById('my_audio').play();
}

/*-----FONCTIONS QUI RENDENT VISIBLE LES ELEMENTS AU FIL DU TEMPS-----*/
function afficher00() {
    document.getElementById('dialogue').style.visibility = "visible";
}
function afficher0() {
    document.getElementById('mecha_senku').style.visibility = "visible";
}

function afficher() {
    document.getElementById('eau_gazeuse').style.visibility = "visible";
}

function afficher1() {
    document.getElementById('coriandre').style.visibility = "visible";
}

function afficher2() {
    document.getElementById('citron_vert').style.visibility = "visible";
}

function afficher3() {
    document.getElementById('miel').style.visibility = "visible";
}
function afficher4() {
    document.getElementById('senku_cola').style.visibility = "visible";
    document.getElementById('senku_cola2').style.visibility = "visible";
}
/*-----7 FONCTION QUI ACTIVE LES setTimout POUR LES FONCTIONS D'EN HAUT-----*/
function TimeActivation(){
    setTimeout(playaudio,0)
    setTimeout(afficher00,300)
    setTimeout(afficher0,500)
    setTimeout(afficher,2500)
    setTimeout(afficher1,3100)
    setTimeout(afficher2,3700)
    setTimeout(afficher3,4500)
    setTimeout(afficher4,6200)
}
/*-----8 FONCTION POUR L'AVERTISSEMENT-----*/
function Attention() {
    alert("ATTENTION ! CECI EST ISSUE D'UNE OEUVRE DE FICTION, À NE PAS REPRODUIRE !");
  }


/*-----9 FONCTION POUR RETOURNER EN HAUT DE LA PAGE-----*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
    {
        document.getElementById("haut").style.display = "block";
    } 
    else 
    {
        document.getElementById("haut").style.display = "none";
    }
}

/*-----10 FONCTION POUR REDIRIGER VERS LE FANDOM */
function redirect() {
    window.open("https://dr-stone.fandom.com/fr/wiki/Inventions_%26_D%C3%A9couvertes");
  }

/*-----11 ET ÇA C'EST LE SLIDER COPIÉ COLLÉ MAIS INDISPENSABLE POUR LE SITE (sinon pas de contenu)-----*/
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });


