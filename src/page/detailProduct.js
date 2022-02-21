import { get } from "../api/product";
import { $ } from "../utils/index";
import RelatedProducts from "../components/relatedProducts";
import { addToCart, numberFormat } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import { reRender } from "../utils/reRender";
const DetailProductPage = {
  async render(id) {
    const { data } = await get(id);
    return /* html */ `
        <div class="title p-8 ml-24">
                <a href="#" class="text-[#888]">Trang chủ /</a>
                <a href="#" class="text-[#888]">Áo phông</a>
            </div>
            <div class="detailPro flex  justify-center py-8">
                <img src="${data.img}" alt=""
                    width="550">
                <div class="info ml-8 text-left ">
                    <h2 class="text-3xl font-[700]">${data.name}</h2>
                    <span class="flex justify-start  pt-3 my-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </span>
                    <span class="line-through text-[#888] text-3xl mr-4">250,000₫</span><span
                        class="font-[500] text-red-500 text-3xl">${numberFormat.format(
                          data.Price
                        )}₫</span>
                    <form action="" class="my-6">
                        <label for="" class="text-xl font-[500]">Chọn size áo :</label>
                        <select name="" id="size" class="my-8  w-42  outline-none p-2 rounded-lg border-2">
                            <option value="">Chọn size tùy ý</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select><br>
                        <label for="" class="text-xl "> <i class="fas fa-circle texl-xs text-green-500"></i> Còn
                            hàng</label><br>
                        <input type="number" id="inputValue" min="1" value="1" class="border-2 mt-6 outline-none rounded-lg p-2">
                        <button id="addToCart" data-id="${
                          data.id
                        }" class="bg-red-300 p-2 rounded-lg font-[500] text-[#fff] ">Thêm vào giỏ hàng</button>
                    </form>
                    <span>Danh mục :</span><a href="#"><span> Áo phông</span></a>
                    <div class="icon mt-6">
                        <a href="#"><i class="fab fa-facebook-f text-2xl p-2 text-[#385898] rounded-full border-2 "
                                title="facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter text-2xl p-2 text-[#1d9bf0] rounded-full border-2 "
                                title=" twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
        ${await RelatedProducts.render()}
        `;
  },
  afterRender(id) {
    Header.afterRender();
    const inputValue = $("#inputValue");
    $("#addToCart").addEventListener("click", async (e) => {
      e.preventDefault();
      const { data } = await get(id);
      addToCart(
        { ...data,size:$('size').value, quantity: inputValue ? +inputValue.value : 1 },
        () => {
          toastr.success("Thêm vào giỏ hàng thành công !");
          reRender(Header,"#header");
        }
      );
    });
  },
};

export default DetailProductPage;
