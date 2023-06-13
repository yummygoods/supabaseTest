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



// const { data, error } = await supabase.auth.signUp({
//   email: 'example@email.com',
//   password: 'example-password',
// })


// const { data, error } = await supabase.auth.signUp({
//   email: 'melissa@yummygoods.com',
//   password: 'TestSupabase',
// })





//*************************** start of google login  **********************************
async function signInWithGoogle(loginData) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}



const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
	event.preventDefault();
  let loginData = document.getElementById('loginForm').value;
console.log(loginData);
signInWithGoogle(loginData);
loginForm.reset();
});




//***************************** end of google login **********************************


//***************************** start of google signout **********************************

async function signout() {
  const { error } = await supabase.auth.signOut()
}


//***************************** end of google signout**********************************

//Obtain the provider refresh token#
// Google OAuth2.0 doesn't return the provider_refresh_token by default. If you need the provider_refresh_token returned, you will need to add additional query parameters:
// async function signInWithGoogle() {
//   const { data, error } = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       queryParams: {
//         access_type: 'offline',
//         prompt: 'consent',
//         hd: 'domain.com', // google will also allow OAuth logins to be restricted to a specified domain using the 'hd' parameter
//       },
//     },
//   })
// }





//***************************** add dog to db ********************************** 
async function addDog(dog_name){
  const { data, error } = await supabase
    .from('dogs')
    .insert([{dog_name: dog_name}] );
  }

//********************************** dog form **********************************
const dogForm = document.getElementById('dogForm');

dogForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('prevented form default, noice');
  let dog_name = document.getElementById('dog_name').value;
  console.log(dog_name);
addDog(dog_name);
	dogForm.reset();
});
//***************************** end of add dog *******************************






