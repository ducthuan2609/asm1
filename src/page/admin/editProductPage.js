import HeaderAdmin from "../../components/headerAdmin";
import { get, update } from "../../api/product";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const EditProPage = {
  async render(id) {
    const { data } = await get(id);
    // const result = await response.json();
    return /* html */ `
        ${await HeaderAdmin.render()}
        <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-gray-900">
        Chỉnh sửa sản phẩm
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <!-- Replace with your content -->
          <div class="px-4 py-6 sm:px-0">
            <div class="border-2 border-gray-200 rounded-lg ">
              <div class=" mt-5 md:mt-0 md:col-span-2">
                  <form action="#"  id="form-edit">
                    <div class="shadow overflow-hidden sm:rounded-md">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6 ">
                            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                            <input type="text"  id="title"  value="${
                              data.name
                            }" autocomplete="given-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
                          </div>
                          <div class="col-span-6 ">
                            <label for="img" class="block text-sm font-medium text-gray-700">Img(url)</label>
                            <img src="${
                              data.img
                                ? data.img
                                : `https://res.cloudinary.com/dkiw9eaeh/image/upload/v1645279177/gyoa74gjszhwmstchttd.jpg`
                            }" id="img_preview" width="200"  />
                            <input type="file"  id="img"   autocomplete="given-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
                          </div>
                          <div class="col-span-6 ">
                            <label for="img" class="block text-sm font-medium text-gray-700">Price</label>
                            <input type="text"  id="price"   value="${
                              data.Price
                            }" autocomplete="family-name" class="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md">
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
            </div>
          </div>        
          <!-- /End replace -->
        </div>
      </main>
        `;
  },
  afterRender(id) {
    const formEdit = document.querySelector("#form-edit");
    const img_pro = document.querySelector("#img");
    const img_preview = document.querySelector("#img_preview");

    const CLOUDINARY_API =
      "https://api.cloudinary.com/v1_1/ducthuan/image/upload";
    const COLUDINARY_PRESET = "xs2re3mb";

    let link_img = "";

    // console.log(img_preview.URL);
    img_pro.addEventListener("change", (e) => {
      img_preview.src = URL.createObjectURL(e.target.files[0]);
    });

    formEdit.addEventListener("submit", async (e) => {
      e.preventDefault();

      const file = img_pro.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", COLUDINARY_PRESET);

        const { data } = await axios.post(CLOUDINARY_API, formData, {
          url: "https://api.cloudinary.com/v1_1/dkiw9eaeh/image/upload",
          method: "POST",
          headers: {
            "Content-Type": "application/form-data",
          },
          data: formData
        });
        link_img = data.url;
      }

      update({
        id,
        name: document.querySelector("#title").value,
        img: link_img ? link_img : img_preview.src,
        Price: document.querySelector("#price").value,
      })
        .then(() => {
          toastr.success("Cập nhật thành công");
          setTimeout((document.location.href = "/admin/listproducts"), 2000);
        })
        .catch((error) => console.log(error));
    });
  },
};

export default EditProPage;
