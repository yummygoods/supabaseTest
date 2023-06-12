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


async function addDog(dog_name){
  const { data, error } = await supabase
    .from('dogs')
    .insert([{dog_name: dog_name}] );
  }





const dogForm = document.getElementById('dogForm');

dogForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('prevented form default, noice');
  let dog_name = document.getElementById('dog_name').value;
  console.log(dog_name);
addDog(dog_name);
	dogForm.reset();
});

console.log('now listening for submit button');





// async function loadData() {
//   const { data, error } = await supabase
//           .from('dogs')
//           .select('dog_name')

//   console.log(data)
//   // console.log(error)
// }
// loadData();


