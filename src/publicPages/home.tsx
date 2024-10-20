
import Posts from "../reusableComponents/posts";
import { useSelector } from "react-redux";
import ViewImageBox from "../reusableComponents/viewImageBox";
import { RootState } from "../Statemanagement/store";
import { Post } from "../Statemanagement/interfaces";
function home() {
  const post: Post | null = useSelector((state: RootState) => state.viewImageSliceState);
  return (
    <>
      <main className=" w-full">
        <Posts />
      </main>
      <section className="fixed z-[51] m-auto rounded-lg z-100 border top-[50%]  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white">{post && <ViewImageBox post={post} />} </section>
    </>
  )
}

export default home