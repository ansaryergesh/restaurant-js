const home =(()=> {
    const section = document.querySelector('section');
    const header = document.querySelector('.header');
    const text = document.querySelector('.text');
    const other = document.querySelector('.other');
    section.classList.add('section');
    const row = document.querySelector('.row');
    const map = document.querySelector('.map');
    const image = () => {
        return ` <img class="photo" src="https://i9.photo.2gis.com/images/branch/67/9429411758101449_fc9b.jpg">`

        
    }
    other.innerHTML = image();

    const render = () => {
        header.textContent = "Welcome to the Restaurn Page";
        text.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia numquam voluptates provident eius, illum totam pariatur voluptatem sit iste nulla quod labore tempore eos rem officia ad ex corrupti dolores!";  
        map.classList.add("none");
        text.classList.remove('none');
        if (document.querySelector('.form') !== null) {
            document.querySelector('.form').classList.add("none");
        }
        other.classList.remove('none');
      };
    
      return { render };

})();

export { home }