export const nav = () => {
    const nav = document.createElement('nav');
    const navLists = () => {
        return (`<div class="nav-wrapper">
        <a href="#" class="brand-logo">Restaurant Menu</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>`)
    }

    nav.innerHTML = navLists();

    return nav;
}
 