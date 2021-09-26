const firebaseConfig = {
    apiKey: "AIzaSyBgQOcRzH4gpXArLBlx2edbYACS3I7W8bY",
    authDomain: "friendbook-7a05b.firebaseapp.com",
    databaseURL: "https://friendbook-7a05b-default-rtdb.firebaseio.com",
    projectId: "friendbook-7a05b",
    storageBucket: "friendbook-7a05b.appspot.com",
    messagingSenderId: "439507904784",
    appId: "1:439507904784:web:71c716ffdc14c09ea9dd95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

function getData() {
    firebase.database().ref("/" + user_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();

            userid = childKey;
            user_detail = childData;

            name = user_detail['Friendname'];
            message = user_detail['Friend_Message'];
            dobirth = user_detail['Friend_Birthday'];
            name_with_tag = "<h4 style='background-color:rgb(200,220,20); text-align: center; font-size: 25px;'> " + name + "</h4>";
            message_tag = "<h4 class='message_h4'>" + message + "</h4>";
            Date_of_birth = "<h3>" + dobirth + "</h3>"


            row = name_with_tag + message_tag + Date_of_birth;
            document.getElementById("output").innerHTML += row;

        });
    });
}
getData();

function addFrndMesg() {
    window.location = "memory.html";
}


function logout() {
    localStorage.removeItem("user_name");
    window.location.replace("login.html");
}


//document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";