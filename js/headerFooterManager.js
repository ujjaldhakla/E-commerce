
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
                    <a href="#">Shop Now</a>
                </div>
                </div>
               
            
            <div class="language">
                <div class="language-dropdown">
                    <select id="language">
                        <option value="English">English</option>
                        <option value="Nepali">Nepali</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Spanish">Spanish</option>
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
                    <div class="eh">
                        <div class="line-nav">Exclusive</div>
                        <div class="homes">
                            <div class="home"><a href="Ecommerce.html " >Home</a></div>
                            <div class="contact"><a href="contactus.html">Contact</a></div>
                            <div class="about"><a href="about.html">About</a></div>
                            <div class="sign-upp"><a href="Sign-up.html">Sign-Up</a></div>
                        </div>
                             <div class="alogo">
                        <div class="search">
                            <input type="text" placeholder="What are you looking for?">
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
                                    <div class="menu-option" onclick="alert('Your account has been logged out!')"><i class="fa-solid fa-arrow-right-from-bracket"></i>Logout</div>
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
        console.log('SpecialHeader rendered');
        this.innerHTML = `
        <div class="contactt">
            <div class="container">
                <div class="footer">
                    <div class="Exclusive">
                        <h2>Exclusive</h2>
                        <h4>Subscribe</h4>
                        <p>Get 10% off your first order</p>
                        <div class="input-container">
                            <input type="text" placeholder="Enter your email">
                            <button class="logo-button" type="button">
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                    <div class="support">
                        <h4>Support</h4>
                        <p>Kathmandu, Balkumari, Nepal</p>
                        <p>Udhakal610@gmail.com</p>
                        <p>9842263072</p>
                    </div>
                    <div class="account">
                        <h4>Account</h4>
                        <p><a href="Account.html">My Account</a></p>
                        <p><a href="Sign-up.html">Login / Register</a></p>
                        <p><a href="cart.html">Cart</a></p>
                        <p><a href="wishlist.html">Wishlist</a></p>
                        <p><a href="shop.html">Shop</a></p>
                    </div>
                    <div class="quicklink">
                        <h4>Quick Links</h4>
                        <p><a href="privacy.html">Privacy Policy</a></p>
                        <p><a href="terms.html">Terms of Use</a></p>
                        <p><a href="faq.html">FAQ</a></p>
                        <p><a href="contactus.html">Contact</a></p>
                    </div>
                    <div class="downloadapp">
                        <h4>Download App</h4>
                        <p>Save $3 with the app for new users only</p>
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

customElements.define('special-head', SpecialHead);
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
