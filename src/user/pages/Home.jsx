import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../index'
import appwriteService from "../../../appwrite/config";
import MangaCard from "../MangaCard"

function Home() {
    const [mangas, setMangas] = useState([])

    useEffect(() => {
        appwriteService.getMangas().then((mangas) => {
            if (mangas) {
                setMangas(mangas.documents)
            }
        })
    }, [])
  
    if (mangas.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read mangas
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {mangas.map((manga) => (
                        <div key={manga.$id} className='p-2 w-1/4'>
                            <MangaCard {...manga} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home