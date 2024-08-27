import React, {useEffect, useState} from 'react'
import appwriteService from "../../appwrite/config"
import { Container, PostManga } from "../components"
import { useNavigate,  useParams } from 'react-router-dom';

function EditMangas() {
    const [manga, setMangas] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getManga(slug).then((post) => {
                if (manga) {
                    setMangas(manga)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm manga={manga} />
        </Container>
    </div>
  ) : null
}

export default EditMangas