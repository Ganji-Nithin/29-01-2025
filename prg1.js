let v=document.getElementById('s')
v.addEventListener('click',async()=>{
var d=document.getElementById('city').value
const url=`https://api.openweathermap.org/data/2.5/weather?q=${d}&appid=${"34623359374b3f5cb5c3a41050da1ee1"}`
var a=await fetch(url)
var b=await a.json()
console.log(b)
var {feels_like,grnd_level,humidity,pressure}=b.main
graph(feels_like,grnd_level,humidity,pressure)
Bargraph(feels_like,grnd_level,humidity,pressure)
})
function graph(feels_like,grnd_level,humidity,pressure)
{
  const ctx = document.getElementById('q');     
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['feels_like','grnd_level','humidity','pressure'],
    datasets: [{
      label: '# of Votes',
      data: [feels_like,grnd_level,humidity,pressure],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}

function Bargraph(feels_like,grnd_level,humidity,pressure)
{
  const ctx = document.getElementById('e');     
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['feels_like','grnd_level','humidity','pressure'],
      datasets: [{
        label: '# of Votes',
        data: [feels_like,grnd_level,humidity,pressure],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}




