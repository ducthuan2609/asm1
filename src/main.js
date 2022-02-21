import Navigo from "navigo";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./page/home";
import SignIn from "./page/signin";
import SignUp from "./page/signup";
import AddPostAdmin from "./components/addProductAdmin";
import AboutPage from "./page/about";
import Contact from "./page/contact";
import AdminDashBroad from "./page/admin/adminDashBoard";
import ProPage from "./page/productPage";
import DetailProductPage from "./page/detailProduct";
import ListProductAdmin from "./page/admin/ListProductAdmin";
import PostPage from "./page/PostPage";
import ListPostAdmin from "./page/admin/listPostAdmin";
import DetailPostPage from "./page/detailPost";
import EditProPage from "./page/admin/editProductPage";
import EditPostPage from "./page/admin/editPost";
import CartPage from "./page/cartPage";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.querySelector("#header").innerHTML = Header.render();
  document.querySelector("#banner").innerHTML = Banner.render();
  document.querySelector("#app").innerHTML = await content.render(id);
  document.querySelector("#footer").innerHTML = Footer.render();
  if (content.afterRender) content.afterRender(id);
};

const printAdmin = async (admin, id) => {
  document.querySelector("#header").innerHTML = "";
  document.querySelector("#banner").innerHTML = "";
  document.querySelector("#app").innerHTML = await admin.render(id);
  document.querySelector("#footer").innerHTML = "";
  if (admin.afterRender) admin.afterRender(id);
};

router.on("/admin/*", () => {}, {
  before: (done) => {
      const userId = JSON.parse(localStorage.getItem('user')).id;
      console.log(userId);
      if(userId === 1){
        done()
      }else{
        document.location.href="/";
      }
  },
});

router.on({
  "/": () => {
    print(HomePage);
  },
  "": () => {
    print(HomePage);
  },
  "/cart": () => {
    print(CartPage);
  },
  "/about": () => {
    print(AboutPage);
  },
  "/contact": () => {
    print(Contact);
  },
  "/posts":()=>{
    print(PostPage);
  },
  "/post/:id":(value)=>{
    print(DetailPostPage,value.data.id);
  },
  // product
  "/products": () => {
    print(ProPage);
  },
  "/product/:id": (value) => {
    print(DetailProductPage, value.data.id);
  },
  //admin
  "/admin": () => {
    printAdmin(AdminDashBroad);
  },
  "/admin/listproducts": () => {
    printAdmin(ListProductAdmin);
  },
  "/admin/listposts": () => {
    printAdmin(ListPostAdmin);
  },
  "/admin/addproduct": () => {
    printAdmin(AddPostAdmin);
  },
  "/admin/editproduct/:id": (value) => {
    printAdmin(EditProPage, value.data.id);
  },
  "/admin/editpost/:id": (value) => {
    printAdmin(EditPostPage, value.data.id);
  },
  "/signin": () => {
    printAdmin(SignIn);
  },
  "/signup": () => {
    printAdmin(SignUp);
  },
});
router.resolve();
