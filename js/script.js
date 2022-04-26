const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 250,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('current-section')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('current-section')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*========== DARK MODE ==========*/
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=change__theme")

checkbox.addEventListener("change", function(){
    html.classList.toggle("dark-mode")
})