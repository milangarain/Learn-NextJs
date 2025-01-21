"use client"
import FormActions from '@/components/form-actions';
import { createPost } from '@/actions/posts';

import { useFormState } from 'react-dom';

export default function NewPostPage() {
  const [formState, formAction]= useFormState(createPost, []);
  

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        {formState.errors && <ul>
          {formState.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
          </ul>
        }
        <FormActions />
      </form>
    </>
  );
}
