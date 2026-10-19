function scrollSlider(containerId, direction) {
    const sliderTrack = document.getElementById(containerId);
    
    if (sliderTrack) {
        const card = sliderTrack.querySelector('.slider__card');
        if (card) {
            const cardWidth = card.offsetWidth;
            const style = window.getComputedStyle(sliderTrack);
            const gap = parseInt(style.gap) || 20;
            const scrollAmount = (cardWidth + gap) * direction;
            
            sliderTrack.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        } else {
            sliderTrack.scrollBy({
                left: direction * 300,
                behavior: 'smooth'
            });
        }
    } else {
        console.warn(`O container com o ID "${containerId}" não foi encontrado.`);
    }
}