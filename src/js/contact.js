const contact =(()=> {
    const header = document.querySelector('.header');
    const text = document.querySelector('.text');
    const map = document.querySelector('.map');
    const other = document.querySelector('.other');
    const row = document.querySelector('.section');
    const form = document.createElement('form');
    form.classList.add("form");
    row.appendChild(form);
    const formItems = () => {
        return (`<div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">mode_edit</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <label for="icon_prefix2">Message</label>
        </div>
        <button class="btn waves-effect waves-light center" type="submit" name="action">Submit
            <i class="material-icons right">send</i>
        </button>
 
      </div>`)
    }
    
    const render = () => {
        header.textContent = "Contact us";
        text.classList.add('none');
        other.classList.add('none');
        map.classList.add('none');
        form.classList.remove('none');
        form.innerHTML = formItems();
        if (document.querySelector('.card') !== null) {
          document.querySelector('.card').classList.add("none");
        }
      };
    
      return { render };

})();


export { contact }