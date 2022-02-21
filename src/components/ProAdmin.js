// import { listPost } from "../data";

import { getAll,remove } from "../api/product";
import { reRender } from "../utils/reRender";

const ProAdmin = {
  async render() {
    const { data } = await getAll();
    return /*html*/ `
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
            Danh sách sản phẩm
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="py-6 sm:px-0">
            <div class=" border-gray-200 rounded-lg h-96">
                <div class="flex flex-col">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                          <thead class="bg-gray-50">
                            <tr>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                STT
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ảnh sản phẩm
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tên
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sửa
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Xóa
                              </th>
                          </thead>
                          <tbody class="bg-white divide-y divide-gray-200">
                            ${data
                              .map((pro, index) => {
                                return /*html */ `
                                <tr>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                      ${index + 1}
                                    </div>
                                  </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                      <img class="h-10 w-10 rounded-full" src="${
                                        pro.img
                                      }" alt="">
                                    </div>
                                  </div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <div class="text-sm text-gray-900">${pro.name}</div>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <a href="/admin/editproduct/${pro.id}">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg></a>
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap">
                                  <button data-id=${pro.id} class="btns">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
                                    </svg>
                                  </button>
                                </td>
                              </tr>
                                `;
                              })
                              .join("")}
                          </tbody>
                        </table>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <a href="/admin/addproduct">
                              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Thêm
                              </button></a>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </main>
    </div>
        `;
  },
  afterRender() {
    const btns = document.querySelectorAll('.btns');
    btns.forEach(btn =>{
      const id = btn.dataset.id;
      btn.addEventListener('click',()=>{
        const confirm = window.confirm('bạn chắc chắn xóa k ?');
        if(confirm){
          remove(id).then(()=>{
            reRender(ProAdmin,"#app")
          })
        }
      })
    })
  }
};

export default ProAdmin;
