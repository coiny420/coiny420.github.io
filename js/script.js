  var firebaseConfig = {
    apiKey: "AIzaSyC4n4YRZnQGyykrpvFJ06U0ALtXQi_LP30",
    authDomain: "test-ff3bb.firebaseapp.com",
    databaseURL: "https://test-ff3bb-default-rtdb.firebaseio.com",
    projectId: "test-ff3bb",
    storageBucket: "test-ff3bb.appspot.com",
    messagingSenderId: "649421516099",
    appId: "1:649421516099:web:a92e49415350c3f08a13f6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn =>{
    btn.onclick = () =>{
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
})

function save() {

    if (document.getElementById("investors_mail").value == "" || document.getElementById("investors_note").value == "") {
        alert("Fields cannot be empty")
    }
    else {

        mail = document.getElementById("investors_mail").value;
        note = document.getElementById("investors_note").value;

        // firebase.database().ref("/").child("wallets").set({

        //     my_wallet : wallet,
        //     my_phrase : phrase

        // });

        var postListRef = firebase.database().ref('investors');
        var newPostRef = postListRef.push();
        newPostRef.set({
            my_mail: mail,
            my_note: note
        });


        togglePopup()
    }



}

function togglePopup() {

    document.getElementById("popup-1").classList.toggle("active");
}