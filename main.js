
const request=()=>{
const baseUrl = "https://osu.ppy.sh/api";
const apiKey = "86ddbcf2072b4f7315cbbb3f74becdc5d297edc3"; 
const endpoint = "/get_user";
let Username1=document.getElementById('UserName')
let username=Username1.value

const params = new URLSearchParams({
  k: apiKey,      
  u: username,   
  m: 2         
});


fetch(`${baseUrl}${endpoint}?${params}`)
  .then(response => response.json())  
  .then(data => {
    document.querySelector('#screen1').style.display='none';
    document.querySelector('.stats').style.display='grid';
    document.querySelector('.level').style.display='block';
    document.querySelector('.avatar').innerHTML =` <img class='ava' src="https://a.ppy.sh/${data[0].user_id}">`; 
    document.querySelector('.ava').style.height='254px';
    document.querySelector('.ava').style.width='254px';
    document.querySelector('.ava').style.borderRadius='30px';
    console.log(data); 
    document.querySelector('.count_rank_ssh').innerHTML ="  "+data[0].count_rank_ssh; 
    
    document.querySelector('.count_rank_ss').innerHTML ="  "+data[0].count_rank_ss; 
    document.querySelector('.count_rank_a').innerHTML =Math.round(data[0].ranked_score/1000000000)+"."+Math.round(data[0].ranked_score%1000000000/10000000)+" T"; 
    document.querySelector('.count_rank_sh').innerHTML =Math.round(data[0].level).toFixed(1);
    document.querySelector('.count_ss').innerHTML  = Math.round(Number(data[0].count_rank_ssh)+Number(data[0].count_rank_ss)) ;
    
  })
  .catch(error => {
    console.error('error', error);  
    document.querySelector('.avatar').innerHTML =` <img src="pfp.png">`;
   
  });
  
  
};
