const Footer = {
    render() {
        return /* html*/ `
                </main>
                <!-- footer================================================ -->

                <hr class="bg-[#03778e]">
                <footer class="px-12 bg-black">
                    <div class="grid grid-cols-4 gap-16 py-12 outline-none">
                        <div class="cols">
                            <h5 class="font-[500] text-white mb-2">Về chúng tôi</h5>
                            <p class="text-white">Young Green là thương hiệu thuộc YG SHOP. Hình ảnh được thiết kế và phát triển bởi YG Studio</p>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-white mb-2">CHÍNH SÁCH</h5>
                            <ul class="list-disc">
                                <li class="my-2"><a href="#" class="text-white">Chính sách đổi hàng</a></li>
                                <li class="my-2"><a href="#" class="text-white">Chính sách bảo hành</a></li>
                                <li class="my-2"><a href="#" class="text-white">Chính sách hội viên</a></li>
                                <li class="my-2"><a href="#" class="text-white">Chính sách giao nhận</a></li>
                                <li class="my-2"><a href="#" class="text-white">Hướng dẫn mua hàng</a></li>
                                <li class="my-2"><a href="#" class="text-white">Hướng dẫn thanh toán</a></li>
                            </ul>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-white mb-2">THÔNG TIN</h5>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.367731310915!2d105.82498916415723!3d21.017967243524325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0250769a7f%3A0x2bc0fd66cc7bc3a4!2zWUcgU0hPUCBIw6AgTuG7mWk!5e0!3m2!1svi!2s!4v1645465514377!5m2!1svi!2s" width="250" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="cols">
                            <h5 class="font-[500] text-white mb-2">Hỗ trợ</h5>
                            <p class="text-white">Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Facebook và Instagram<br>
                                <i class="fab fa-facebook my-6 mr-4 text-3xl text-white"></i>
                                <i class="fab fa-instagram-square text-3xl text-white"></i>
                            </p>
                        </div>
                    </div>
                    
                </footer>
            </div>
        </body>
        
        </html>
        `
    }
}
export default Footer;