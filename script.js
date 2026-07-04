// Efek 3D

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

let x=(window.innerWidth/2-e.clientX)/25;

let y=(window.innerHeight/2-e.clientY)/25;

card.style.transform=`
rotateY(${x}deg)
rotateX(${-y}deg)
`;

});

const kata=[

"Kalau aku boleh memilih lagi, aku tetap akan memilih kamu ❤️",

"Kamu adalah alasan kenapa aku tersenyum setiap hari 🥰",

"Terima kasih sudah menjadi bagian terindah dalam hidupku 💕",

"Aku berharap kita bisa bersama selamanya 🌹",

"Cintaku mungkin sederhana, tapi selalu untuk kamu ❤️"

];

const btn=document.getElementById("btn");

const text=document.getElementById("kata");

btn.onclick=()=>{

let random=Math.floor(Math.random()*kata.length);

text.innerHTML=kata[random];

}

// Musik

const music=document.getElementById("music");

music.volume=0.4;

// Browser mungkin memblokir autoplay,
// jadi setelah klik pertama musik pasti diputar.

document.body.addEventListener("click",()=>{

music.play();

},{once:true});

// Partikel Hati

const particles=document.getElementById("particles");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

particles.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,250);


// =========================
// Slide Foto Otomatis
// =========================

const photo = document.getElementById("photo");

const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg"
];

let current = 0;

function changePhoto(){

    photo.style.opacity = "0";

    setTimeout(()=>{

        current++;

        if(current >= photos.length){
            current = 0;
        }

        photo.src = photos[current];

        photo.style.opacity = "1";

    },500);

}

setInterval(changePhoto,4000);