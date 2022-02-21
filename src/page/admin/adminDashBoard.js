import HeaderAdmin from "../../components/headerAdmin";
import MainAdmin from "../../components/mainAdmin";

const AdminDashBroad = {
    render(){
        return `
            ${HeaderAdmin.render()}
            ${MainAdmin.render()}
        `
    }
}
export default AdminDashBroad;