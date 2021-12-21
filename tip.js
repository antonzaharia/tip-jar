const form = document.querySelector('form')

if (window.ethereum) {
    form.classList.add('has-eth')
}

form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log('submit!')
})