import React, { useState, useEffect} from 'react'
import appwriteService from "../../appwrite/config"
import { Container, PostManga } from "../components"

function AllMangas() {
    const [mangas, setMangas] = useState([])
    useEffect(() => {
        appwriteService.getMangas([]).then((mangas) => {
            if (mangas) {
                setMangas(mangas.documents)
            }
        })
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {mangas.map((manga) => (
                    <div key={manga.$id} className='p-2 w-1/4'>
                        <PostManga {...manga} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllMangas