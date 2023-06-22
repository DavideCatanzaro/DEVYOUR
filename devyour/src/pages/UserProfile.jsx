import Separator from "../components/atoms/Separator"
import UsersSuggested from "../components/shared/UsersSuggested"
import Post from "../components/shared/Post"
import ProfileCard from "../components/shared/ProfileCard"
import Navbar from "../components/shared/Navbar"
import { useEffect, useState } from "react"
import NewContent from "../components/shared/NewContent"
import SearchModal from "../components/shared/SearchModal"
import { user } from "../pages/Login"

const UserProfile = () => {
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            const response = await fetch("http://localhost:6700/api/posts");
            const postData = await response.json()
            setPosts(postData);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    const [newPost, setNewPost] = useState(false)
    const [showSearchModal, setShowSearchModal] = useState(false)

    const handleCreatePost = () => {
        if (newPost === false) {
            setNewPost(true)
        } else {
            setNewPost(false)
        }
    }

    return (
        <>
            {
                newPost &&
                <NewContent createPost={handleCreatePost} />
            }
            {
                showSearchModal &&
                <SearchModal setShowSearchModal={setShowSearchModal} />
            }
            <div className="flex max-w-7xl mx-auto">
                <main className="flex sm:gap-6 container px-2 mx-auto">
                    <Navbar createPost={handleCreatePost} setShowSearchModal={setShowSearchModal} />

                    <div className="basis-2/3 grow">
                        <div className="sticky top-0 py-4">
                            <div className="sticky top-0 bg-white rounded-xl shadow">
                                <Separator title={"My post"} />
                            </div>
                        </div>

                        {posts.filter((item) => item.username === user.user.username).map((item) => {
                            return (<Post
                                imgProfile={item.imgProfile}
                                username={item.username}
                                imgPost={item.imgPost}
                                descriptionPost={item.descriptionPost}
                            />)
                        })
                        }

                    </div>

                    <aside className="basis-1/6 hidden md:block">
                        <div className="sticky top-4">
                            <ProfileCard />
                            <UsersSuggested />
                        </div>
                    </aside>
                </main>
            </div>
        </>
    )
}

export default UserProfile