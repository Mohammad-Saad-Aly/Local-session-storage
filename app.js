localStorage.setItem('name', 'Saad')
localStorage.setItem('age', 21)
localStorage.setItem('name1', 'rafeh')
localStorage.clear()
var a = localStorage.removeItem('uhjjssdh')
console.log(a)
sessionStorage.setItem('name', 'Saad')

let signup = () => {
    var a = document.getElementById('email').value;
    var b = document.getElementById('pass').value
    localStorage.setItem('email', a)
    localStorage.setItem('password', b)
}

let signin = () => {
    var a = document.getElementById('semail').value;
    var b = document.getElementById('spass').value;
    if (a == localStorage.getItem('email') && b == localStorage.getItem('password')) {
        window.location.href = './welcome.html'
    } else {
        alert('Invalid email or Pass')
    }
}