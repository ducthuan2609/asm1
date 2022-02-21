import HeaderAdmin from "../../components/headerAdmin";
import ProAdmin from "../../components/ProAdmin";

const ListProductAdmin ={
    async render(){
        return `
        ${await HeaderAdmin.render()}
        ${await ProAdmin.render()}
        `;
    },
    afterRender(){
        ProAdmin.afterRender();
    }
}

export default ListProductAdmin;