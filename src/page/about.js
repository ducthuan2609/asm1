import Header from "../components/header";

const AboutPage = {
    render(){
        return /*html*/ `
        <main>
        <h2 class="text-center font-[700] text-5xl p-8">ABOUT US</h2>
        <ul class="list-decimal p-12">
            <li class="p-3 text-2xl">Đây là một trong những phong cách có nhiều sự ảnh hưởng đặc biệt là giới trẻ. Với các gam màu tiêu biểu xám, trắng và đen kèm theo thiết kế có phần bụi bặm đã giúp cho phong cách này có chỗ đứng nhất định trong làng thời trang cũng như có sức ảnh hưởng nhất định với việc ra đời của các thương hiệu thời trang nổi tiếng, và YG Shop là một trong những thương hiệu đó.</li>
            <li class="p-3 text-2xl">Được thành lập và chính thức đi vào hoạt động từ năm 2014, với các sản phẩm hướng tới các khách hàng trẻ có độ tuổi từ 14-30, có phong cách năng động, cá tính. Thương hiệu này không chỉ phát triển các sản phẩm quần áo mà còn chú trọng vào nhiều phụ kiện đi kèm như quần áo, backpack, nón…</li>
            <li class="p-3 text-2xl">Khi mới ra mắt, YG Shop gây ấn tượng bởi phong cách streetwear đơn giản và phóng khoáng. Các tín đồ thời trang có thể tự do thể hiện cá tính và tạo nên xu hướng mới. Vẻ "ngầu" tự nhiên cùng điểm nhấn trong phong cách streetwear đã giúp cho YG Shop chiếm được tình cảm của nhiều người, đặc biệt là các bạn trẻ. </li>
        </ul>
    </main>
        `;
    },
    afterRender(){
        Header.afterRender();
    }
};

export default AboutPage;