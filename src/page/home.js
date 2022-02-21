import Header from "../components/header";
import Main from "../components/product";
const HomePage = {
    async render() {
        return `
        <div class="title text-center mb-12">
                <h2 class=" font-[700] p-12 text-4xl ">BÁN CHẠY NHẤT</h2>
                <button class="p-2 font-[400] text-xl border-2 text-[#03778e] border-[#03778e] "><a href="#">XEM TẤT
                        CẢ</a>
                </button>
            </div>
        ${await Main.render()}
        <div
                class="banner-bottom my-16 bg-no-repeat w-full bg-cover bg-center bg-[url('https://bizweb.dktcdn.net/100/331/067/themes/823156/assets/slider_2.jpg?1645371297935')]">
            </div>
            <div class="contact text-center">
                <h2 class="p-12 text-5xl font-[500]">Awesome feedback</h2>
                <button class="bg-[#03778e] p-2 mb-6 rounded-lg text-[#fff]"><i
                        class="fab fa-instagram-square px-2"></i>Follow us</button>
            </div>
        </main>
        `
    },
    afterRender(){
        Header.afterRender();
    }
}

export default HomePage;