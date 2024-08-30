import React, { useState, useEffect} from 'react'
import appwriteService from "../../appwrite/config"
import { Container, PostManga } from "../components"

function AllChapters() {
    const [mangaChapters, setMangaChapters] = useState([])
    useEffect(() => {
        appwriteService.getMangaChapters([]).then((mangaChapters) => {
            if (mangaChapters) {
                setMangaChapters(mangaChapters.documents)
            }
        })
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {mangaChapters.map((mangaChapter) => (
                    <div key={mangaChapter.$id} className='p-2 w-1/4'>
                        <PostCard {...mangaChapter} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllChapters