// This needs to be edited. This might not be the part.

import React from 'react'
import appwriteService from "../../appwrite/config.js"
import { Link } from 'react-router-dom'

function PostMangaChapter ({$id, chapterNumber, title, content}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getChapterFilePreview(content)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostMangaChapter