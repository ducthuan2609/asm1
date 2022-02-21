import Header from "../components/header";
import { $ } from "../utils";
import { minusCart, numberFormat, plusCart, removeCart } from "../utils/cart";
import { reRender } from "../utils/reRender";

const CartPage = {
    render(){
        const cart = JSON.parse(localStorage.getItem('cart'));
        let total=0;
        return /*html*/`
        <table class="text-center mx-auto  my-12">
        <thead>
            <tr class="border-b-2 border-[#ccc] ">
                <th class="p-12">#</th>
                <th class="p-12"> Ảnh sản phẩm</th>
                <th class="p-12">Tên sản phẩm</th>
                <th class="p-12">Giá sản phẩm</th>
                <th class=""></th>
                <th class="p-12">Số lượng</th>
                <th class=""></th>
                <th class="p-12">Thành tiền</th>
                <th class="p-12">Xóa</th>
            </tr>
        </thead>
        <tbody>
        ${cart.map((item,index) => `
            <tr class="border-b-2 border-[#ccc]">
                <td class="p-12">${index+1}</td>
                <td class=""><a href="/product/${item.id}"> <img src="${item.img}" width="60" class="mx-auto"></a></td>
                <td class=" font-bold">${item.name}</td>
                <td class="" >${numberFormat.format(item.Price)}đ</td>
                <td class="pl-12 cursor-pointer"><button data-id="${item.id}" class="btn plus">+</button></td>
                <td class="" >${item.quantity}</td>
                <td class="pr-12 cursor-pointer"><button data-id="${item.id}"  class="btn minus">-</button></td>
                <td class=" text-red-500" ><span class="prices">${numberFormat.format(item.Price*item.quantity)}</span>đ</td>
                <td class=" cursor-pointer" ><button data-id="${item.id}" class="btn remove">Xóa</button></td>
            </tr>
            `).join('')
        }
           
        </tbody>
        <tfoot>
            <tr class="">
                <td colspan="7" class="p-3 font-bold"> Tổng tiền:</td>
                <td class="font-bold text-red-600"><span id="totalPrice"></span>đ</td>
            </tr>
        </tfoot>
    </table>
    <div class="item flex justify-evenly">
        <div class="left">
            <a href="/#/"><button class="bg-[#03778e] p-3 m-2 text-white">Tiếp tục mua hàng</button></a>
            <a href="#"><button class="bg-[#03778e] p-3 m-2 text-white">Thanh toán</button></a>
        </div>
        <form action="" class="p-4">
            <input type="text" class="p-2 outline-none border-2" placeholder="Mã giảm giá "><br>
            <button type="submit" class="bg-[#03778e] text-white p-2 mt-2 ">Áp dụng</button>
     </form>
    </div>
        `
    },
    afterRender(){
        Header.afterRender();
        const btns= $('.btn');
        const totalPrice =$('#totalPrice');
        let total =0;
        if(JSON.parse(localStorage.getItem('cart'))){
            const cart = JSON.parse(localStorage.getItem('cart'));
            cart.forEach(item =>{
                total +=item.Price*item.quantity;
                totalPrice.innerHTML= numberFormat.format(total);
            })
        }


       btns.forEach(btns => {
           btns.addEventListener('click',()=>{
               const id = btns.dataset.id;
               if(btns.classList.contains('plus')){
                   plusCart(id,()=>{
                       reRender(CartPage,'#app')
                   });
               }else if(btns.classList.contains('minus')){
                   minusCart(id,()=>{
                    reRender(CartPage,'#app')
                   });
               }else{
                   removeCart(id,()=>{
                       reRender(CartPage,'#app')
                   });
               }
           })
       });
    }
}
export default CartPage;