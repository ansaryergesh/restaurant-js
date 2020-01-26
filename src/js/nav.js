const nav = () => {
  const nav = document.createElement('nav');
  nav.innerHTML = `<div class="nav-wrapper">
  <a href="#" class="brand-logo">Lounge Bar</a>
  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li><a class="home">Home</a></li>
    <li><a class="menu">Menu</a></li>
    <li><a class="about">About</a></li>
    <li><a class="contact">Contact us</a></li>
  </ul>
  </div>`;
  return nav;
};

export { nav };