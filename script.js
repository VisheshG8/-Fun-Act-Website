let t = new Date()
let d = document.getElementById('time')

setInterval(function() {
  t = new Date()
  d.innerHTML = t
}, 1000)