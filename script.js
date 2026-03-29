// script.js
function toggleMobile() {
    const menu = document.getElementById('mobileMenu')
    menu.classList.toggle('hidden')
}

function submitPledge(e) {
    e.preventDefault()
    const name = document.getElementById('name').value.trim()
    
    if (name) {
        alert(`✅ Thank you, ${name}.\n\nYour voice has been added.\n\nTogether we keep Poland Polish, safe, and sovereign.`)
        e.target.reset()
        
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 1200)
    }
}

console.log('%c🇵🇱 ProudPoland site ready – focused on Poland’s success.', 'color:#c8102e; font-weight:500')