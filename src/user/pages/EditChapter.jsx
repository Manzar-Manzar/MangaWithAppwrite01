import React, {useEffect, useState} from 'react'
import appwriteService from "../../appwrite/config"
import { Container, ChapterPostForm } from "../components"
import { useNavigate,  useParams } from 'react-router-dom';

function EditChapter() {
    const [mangaChapter, setMangaChapters] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getMangaChapters(slug).then((mangaChapter) => {
                if (mangaChapter) {
                    setMangaChapters(mangaChapter)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <ChapterPostForm mangaChapter={mangaChapter} />
        </Container>
    </div>
  ) : null
}

export default EditChapter