import AddProductAdmin from "../../components/addProductAdmin";
import HeaderAdmin from "../../components/headerAdmin";

const AddPostAdminPage ={
    render(){
        return `
            ${HeaderAdmin.render()};
            ${AddProductAdmin.render()}
        `;
    },
    afterRender(){
        AddProductAdmin.afterRender();
    }
}
export default AddPostAdminPage;