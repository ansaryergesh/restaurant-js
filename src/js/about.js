const about =(()=> {
    const section = document.querySelector('section');
    const header = document.querySelector('.header');
    const text = document.querySelector('.text');
    const map = document.createElement('section');
    map.classList.add('map');
    const other = document.querySelector('.other');
    section.appendChild(map);
    section.classList.add('section');
    const row = document.querySelector('.row');

    const render = () => {
        header.textContent = "About us";
        text.textContent = "Pub, Mint Lounge bar on Gagarin Ave. European, Eastern cuisine. Average account per person 6000-10000 tenge. Below you can see the location of Lounge Bar:";
        other.classList.add('none');
        map.classList.remove('none');
        text.classList.remove('none');
        if (document.querySelector('.form') !== null) {
            document.querySelector('.form').classList.add("none");
        }
      };
    
      return { render };

})();

export { about }