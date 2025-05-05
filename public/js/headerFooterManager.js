
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        
        this.innerHTML = `
        <div class="top">
        <div class="container">
        <div class="top-header-container">
            <div class="top-nav">
                <div class="top-header-text">
                    <p>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!</p>
                     <div class="shopnow-button">
                    <a href="#"><p>Shop Now</p></a>
                </div>
                </div>
            <div class="language">
                <div class="language-dropdown">
                    <select id="language"><p>
                        <option value="English"><p>English</p></option>
                        <option value="Nepali">Nepali</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option></p>
                    </select>
                </div>
            </div>
            </div>
        </div>
        </div>
       </div>
       <div class="stickyinav">
            <div class="container">
                <div class="header-container">
                    <div class="burger-menu" onclick="toggleMenu()">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>
     <div class="menu">
     <div class="cross" >&times;</div>
                            <div class="home"><a href="Ecommerce.html " >Home</a></div>
                            <div class="home"><a href="contactus.html">Contact</a></div>
                            <div class="home"><a href="about.html">About</a></div>
                            <div class="home"><a href="cart.html">Cart</a></div>
                            <div class="home"><a href="index.html">Sign-Up</a></div>
                            <div class="home"><a href="Account.html">Manage My Account</a></div>
                            <div class="home" onclick="alert('Thanks for your review!')">My Reviews</div>
                            <div class="home" onclick="alert('Your account has been logged out!')"><a href="/logout">Logout</a></div>
                            <div class="home" onclick="alert('Your order is cancelled!')">Order Cancelled</div>
                            <div class="home" onclick="alert('My Orders clicked!')">My Orders</div>
                        </div>
                    <div class="eh">
                        <div class="line-nav">Exclusive</div>
                        <div class="homes">
                            <div class="home"><a href="Ecommerce.html " >Home</a></div>
                            <div class="contact"><a href="contactus.html">Contact</a></div>
                            <div class="about"><a href="about.html">About</a></div>
                            <div class="sign-upp"><a href="index.html">Sign-Up</a></div>
                        </div>
                             <div class="alogo">
                        <div class="search">
                             <input type="text" placeholder="What are you looking for?" > 
                              <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                          
                        </div>
                        <div class="icons">
                            <div class="icon1"><i class="fa-regular fa-heart"></i></div>
                            <div class="icon2"><a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a></div>
                            <div class="icon3">
                                <i class="fa-regular fa-user"></i>
                               <span> <div class="menu-options">
                                    <div class="menu-option"><i class="fa-regular fa-user"></i><a href="Account.html">Manage My Account</a></div>
                                    <div class="menu-option" onclick="alert('My Orders clicked!')"><i class="fa-solid fa-bag-shopping"></i>My Orders</div>
                                    <div class="menu-option" onclick="alert('Your order is cancelled!')"><i class="fa-regular fa-circle-xmark"></i>Order Cancelled</div>
                                    <div class="menu-option" onclick="alert('Thanks for your review!')"><i class="fa-regular fa-star"></i>My Reviews</div>
                                    <div class="menu-option" onclick="alert('Your account has been logged out!')"><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="/logout">Logout</a></div>
                                </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             <div class="line">
        </div>
        </div>`
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
       
        this.innerHTML =`
        <div class="contactt">
            <div class="container">
                <div class="footer">
                    <div class="Exclusive">
                        <h3>Exclusive</h3>
                        <p>Subscribe</p>
                        <h6>Get 10% off your first order</h6>
                        <div class="input-container">
                            <input type="text" placeholder="Enter your email">
                            <button class="logo-button" type="button">
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    <div class="support">
                        <p>Support</p>
                        <h6>Kathmandu, Balkumari, Nepal</h6>
                        <h6>Udhakal610@gmail.com</h6>
                        <h6>9842263072</h6>
                    </div>
                    <div class="account">
                        <p>Account</p>
                        <h6><a href="Account.html">My Account</a></h6>
                        <h6><a href="Sign-up.html">Login / Register</a></h6>
                        <h6><a href="cart.html">Cart</a></h6>
                        <h6><a href="wishlist.html">Wishlist</a></h6>
                        <h6><a href="shop.html">Shop</a></h6>
                    </div>
                    <div class="quicklink">
                        <p>Quick Links</p>
                        <h6><a href="privacy.html">Privacy Policy</a></h6>
                        <h6><a href="terms.html">Terms of Use</a></h6>
                        <h6><a href="faq.html">FAQ</a></h6>
                        <h6><a href="contactus.html">Contact</a></h6>
                    </div>
                    <div class="downloadapp">
                        <p>Download App</p>
                        <h6>Save $3 with the app for new users only</h6>
                        <div class="social-icons">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="last-footer">
                <i class="fa-regular fa-copyright"></i>
                <p>Copyright Ujjal 2024. All rights reserved.</p>
            </div>
        </div>
`;
    }
}


class SpecialHead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <title>Custom Elements</title>
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/ccount.css">
        <link rel="stylesheet" href="css/sign-up.css">
        <link rel="stylesheet" href="css/about.css">
        <link rel="stylesheet" href="css/login.css">
        <link rel="stylesheet" href="css/contactus.css">
        <link rel="stylesheet" href="css/headerfooter.css">
         <link rel="stylesheet" href="css/cart.css">
         <link rel="stylesheet" href="css/checkOut.css">
         <link rel="stylesheet" href="css/boot-strap.css">

        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>
<script src="ecommerce-js.js" defer></script>
<script src="headerFooterManager.js" defer></script>
<script src="https://kit.fontawesome.com/73c74f1e46.js" crossorigin="anonymous" defer></script>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js" defer></script>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    }
  
    // Attaching the event listener to the burger menu element
    document.querySelector('.burger-menu').addEventListener('click', toggleMenu);
  document.querySelector('.cross').addEventListener('click', toggleMenu);
  });
customElements.define('special-head', SpecialHead);
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
