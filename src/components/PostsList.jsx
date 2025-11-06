import { postsApi } from "../services/postsApi";

function PostsList() {
    const { data: posts, error, isLoading } = postsApi.useGetUsersQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading posts</div>;
    }
    return (
        <div>
            <h2>Posts List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;