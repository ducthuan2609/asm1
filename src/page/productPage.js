import Header from "../components/header";
import Main from "../components/product";

const ProPage = {
    async render() {
         return `
        <h1 class="text-center p-8 text-4xl font-medium">Sản phẩm nổi bật</h1>
                ${await Main.render()}
        `},
        afterRender(){
                Header.afterRender();
        }
}

export default ProPage;