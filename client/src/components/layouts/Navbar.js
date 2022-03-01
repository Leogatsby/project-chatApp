import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="green">
        <div className="nav-wrapper">
          <a href="/" class="brand-logo">
            Chat
          </a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Login</a>
            </li>
            <li>
              <a href="badges.html">Signup</a>
            </li>
            <li>
              <a href="collapsible.html">logout</a>
            </li>
          </ul>
        </div>
      </nav>
      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">로그인</a>
        </li>
        <li>
          <a href="badges.html">회원가입</a>
        </li>
        <li>
          <a href="collapsible.html">로그아웃</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
