const firebaseConfig = {

    apiKey: "AIzaSyCOOuoCOcnTn8pleW4AZzNDQ1xNW1jo1eI",

    authDomain: "cloud-storage-e888b.firebaseapp.com",

    databaseURL: "https://cloud-storage-e888b-default-rtdb.firebaseio.com",

    projectId: "cloud-storage-e888b",

    storageBucket: "cloud-storage-e888b.appspot.com",

    messagingSenderId: "451468897568",

    appId: "1:451468897568:web:4019effc19a52459f17b45",

    measurementId: "G-QN51HBKJ8E"

  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //initialize variables
  const auth=firebase.auth();
  const database=firebase.database()


document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})


document.getElementById("signUpForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("random.html")
//     }
// })

function login(){
    const email=document.getElementById("email").value 
    const password=document.getElementById("password").value 
    auth.signInWithEmailAndPassword(email,password)
    .then(function(){
                //declare user variable
                var user=auth.currentUser

                //add this user to firebase database
                var database_ref=database.ref();
        
                var user_data={
               
                    last_login:Date.now()
                }
        
                database_ref.child('users/'+user.uid).update(user_data)
        
                location.replace("cloud_storage.html")
    })
    .catch((error)=>{
        alert(error.message)
    })
}

function signUp(){
    const email1=document.getElementById("email1").value 
    const password1=document.getElementById("password1").value 
    auth.createUserWithEmailAndPassword(email1, password1)
    .then(function(){
        //declare user variable
        var user=auth.currentUser

        //add this user to firebase database
        var database_ref=database.ref();

        var user_data={
            email:email1,
            password:password1,
            last_login:Date.now()
        }

        database_ref.child('users/'+user.uid).set(user_data)

        alert("User Created")
    })
    .catch((error) => {
        console.log(error.message)
  });
}