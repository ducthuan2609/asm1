import Header from "../components/header";

const Contact ={
    render(){
        return /*html*/`
        <h2 class="text-center font-[700] text-5xl p-8">CONTACT</h2>
        <div class="content flex justify-center p-8">
                <img width="500" class="mr-24" src="https://shop.mixigaming.com/wp-content/uploads/2020/09/118070490_238469837342215_4161744696367508805_n.jpg" alt="">
            <form action="">
            <label for="" class="font-[500] text-xl">Email</label><br>
            <input type="text" class="w-full my-2 p-2 outline-none border border-2"><br>
            <label for="" class="font-[500] text-xl ">Phone Number</label><br>
            <input type="text" class="w-full my-2 p-2 outline-none border border-2" ><br>
            <label for="" class="font-[500] text-xl">Feed Back</label><br>
            <textarea cols="70" rows="5" class="my-2 outline-none border border-2"></textarea>
        </form>
        </div>
        `
    },afterRender(){
        Header.afterRender()
    }
}
export default Contact;