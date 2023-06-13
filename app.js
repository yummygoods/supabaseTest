console.log("🦄 you're a god damn unicorn")
// import { createClient } from '@supabase/supabase-js'
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

//todo store in env file
let supabaseUrl = 'https://uwncspcmpkovuytmxbvj.supabase.co';
let supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmNzcGNtcGtvdnV5dG14YnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNzM4MjUsImV4cCI6MjAwMTg0OTgyNX0.B1JecR10twcLu0--5MPW3e-R4SH90D7SToeSvz1ucno';



// // Create a single supabase client for interacting with your database
// const supabase = createClient(supabaseUrl, supabaseKey,  {
//   global: { fetch: fetch.bind(globalThis) }
// });
// console.log(supabase);

const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);




//*************************** START OF  SIGN UP with email  **********************************

async function signUpWithEmail(email, password){
const { data, error } = await supabase.auth.signUp(
  {
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  }
)
}

function emailSignUp(){
const signupForm = document.getElementById('signUpForm');
signUpForm.addEventListener('submit', (event) => {
	event.preventDefault();
  let email = document.getElementById('signUpEmail').value;
  let password = document.getElementById('signUpPassword').value;
console.log(email, password);
// signInWithGoogle();
signUpWithEmail(email, password);
loginForm.reset();
});
}

emailSignUp();
//*************************** END OF SIGN UP with email  **********************************





//*************************** start of google login  **********************************
// async function signInWithGoogle() {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       queryParams: {
//         access_type: 'offline',
//         prompt: 'consent',
//         //hd: 'domain.com',  google will also allow OAuth logins to be restricted to a specified domain using the 'hd' parameter
//       },
//     },
//   })
// }

// ********************************** USER LOG IN  **********************************
async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}


const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
	event.preventDefault();
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
console.log(email, password);
// signInWithGoogle();
signInWithEmail(email, password);
loginForm.reset();
});


// ********************************** END  OF  USER LOG IN  **********************************






// loginForm.addEventListener('submit', (event) => {
// 	event.preventDefault();
//   let loginData = document.getElementById('loginForm').value;
// console.log(loginData);

// loginForm.reset();
// });




//***************************** end of google login **********************************


//***************************** start of google signout **********************************

async function signout() {
  const { error } = await supabase.auth.signOut()
}


//***************************** end of google signout**********************************






// //***************************** add dog to db ********************************** 
// async function addDog(dog_name){
//   const { data, error } = await supabase
//     .from('dogs')
//     .insert([{dog_name: dog_name}] );
//   }

// //********************************** dog form **********************************
// const dogForm = document.getElementById('dogForm');

// dogForm.addEventListener('submit', (event) => {
// 	event.preventDefault();
// 	console.log('prevented form default, noice');
//   let dog_name = document.getElementById('dog_name').value;
//   console.log(dog_name);
// addDog(dog_name);
// 	dogForm.reset();
// });
// //***************************** end of add dog *******************************






