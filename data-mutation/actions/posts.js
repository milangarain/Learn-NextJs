"use server";
import { uploadImage } from "@/lib/cloudnary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
export async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  let imageUrl;
  try {
     imageUrl = await uploadImage(image);
    
  } catch(e) {
    console.log(e);
    throw new Error('Image upload failed!!')
  }
  
  storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });
  revalidatePath("/feed");
  redirect("/feed");
  
}

export async function togglePostLikeStatus(postId) {
  // console.log(post);
  // post.isLiked = !post.isLiked
  updatePostLikeStatus(postId, 2);
  revalidatePath('/feed');
}
