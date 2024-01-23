const barProgress = document.querySelector("#bar-scroll-progress");
const maxHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    const porcent = (window.scrollY / maxHeight) * 100;
    console.log(porcent)
    barProgress.style.width = `${porcent}%`;
})
