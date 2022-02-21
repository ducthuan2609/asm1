import Header from "../components/header";
import ListPost from "../components/listPost";

const PostPage = {
    async render() {
        return `
        <h1 class="text-center p-8 text-4xl font-medium">Bài viết mới nhất</h1>
            ${await ListPost.render()}
        `
    },
    afterRender(){
        Header.afterRender();
    }
}
export default PostPage;