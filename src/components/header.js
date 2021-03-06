import { reRender } from "../utils/reRender";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
  render() {
    return /*html*/ `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YGshop.vn</title>
    <link rel="icon" href="data:image/png;base64,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">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://kit.fontawesome.com/19ffdd2821.js" crossorigin="anonymous"></script>
    <style>
        .banner {
            height: 580px;
        }

        .banner-bottom {
            height: 600px;
        }
    </style>
</head>

<body>
    <div class="container max-w-full mx-auto bg-black">
        <header class="flex justify-between px-12 ">
            <div class="header-right flex">
                <div class="logo">
                    <img width="100px"
                        src="https://bizweb.dktcdn.net/100/331/067/themes/823156/assets/logo.png?1645371297935"
                        alt="">
                </div>
                <div class="menu my-auto">
                    <ul class="flex">
                        <li><a href="/"
                                class="p-3 text-lg text-white font-[600] hover:border-[#03778e] hover:text-orange-500 ">HOME</a>
                        </li>
                        <li><a href="/about"
                                class="p-3 text-lg text-white font-[600] hover:border-[#03778e] hover:text-orange-500 ">ABOUT US</a>
                        </li>
                        <li><a href="/products"
                                class="p-3 text-lg text-white font-[600] hover:border-[#03778e] hover:text-orange-500 ">PRODUCTS</a>
                        </li>
                        <li><a href="/posts"
                                class="p-3 text-lg text-white font-[600] hover:border-[#03778e] hover:text-orange-500 ">POSTS</a>
                        </li>
                        <li id="admin">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-left flex my-auto">
            <div id="signined" class="flex">
                
            </div>
            <a href="/#/cart">
                <div class="cart px-4 text-lg text-white font-[600] item-center relative hover:text-orange-500">CART 
                    <i class="fas fa-shopping-cart z-0 text-2xl"></i>
                    <span id="number" class="absolute bottom-2 left-32 z-10 text-red-500 p-1">0</span>
                </div>
                </a>
            </div>
        </header> 
        <main class="bg-[#dbdad7]">

        `;
  },
  afterRender() {
    const signined = document.querySelector("#signined");
    const admin = document.querySelector("#admin");
    const number_cart= document.querySelector("#number");
    // check cart
    if(localStorage.getItem('cart')){
      number_cart.innerHTML = JSON.parse(localStorage.getItem('cart')).length;
    }
    //check user signin
    if (localStorage.getItem("user")) {
      // console.log(localStorage.getItem("user"))
      signined.innerHTML = ` <div id="signined" class="flex">
      <div class="user font-sans text-xl px-3 text-white">Hello : <span id="emailUser"></span></div>
      <div class="logout cursor-pointer font-sans text-lg px-3 text-white hover:text-orange-500" id="logout">Log out</div>
    </div>`;
      //print username
      const email = document.querySelector("#emailUser");
      email.innerHTML = JSON.parse(localStorage.getItem("user")).email;
      //ph??n quy???n
      if (JSON.parse(localStorage.getItem("user")).id === 1) {
        admin.innerHTML = `<a href="/admin"
        class="p-3 text-lg text-white font-[600]  hover:border-[#03778e] hover:text-orange-500 ">ADMIN</a>`;
      } else {
        admin.innerHTML = "";
      }
      //logout
      const logout = document.querySelector("#logout");
      logout.addEventListener("click", () => {
        localStorage.removeItem("user");
        toastr.success("b???n ???? ????ng xu???t th??nh c??ng !");
        reRender(Header, "#header");
      });
    } else {
      signined.innerHTML = `<ul class="list-none flex">
        <li class="px-2 "><a href="/#/signin"
        class=" text-lg text-[#888] font-[600] hover:text-[#03778e] "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg></a>
        </li>
        <li class="px-2 "><a href="/#/signup"
        class=" text-lg text-[#888] font-[600] hover:text-[#03778e] "><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg></a>
        </li>
    </ul>`;
    }
    //
  },
};

export default Header;
