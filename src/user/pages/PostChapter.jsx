import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../../appwrite/config";
import { Button, Container } from '../components/index';
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [mangaChapter, setMangaChapter] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    // const isAuthor = manga && userData ? manga.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getMangaChapters(slug).then((mangaChapter) => {
                if (mangaChapter) setMangaChapter(mangaChapter);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deleteChapter = () => {
        appwriteService.deleteChapter(mangaChapter.$id).then((status) => {
            if (status) {
                appwriteService.deleteChapter(mangaChapter.coverImage);
                navigate("/");
            }
        });
    };

    return manga ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getChapterFilePreview(manga.coverImage)}
                        alt={mangaChapter.title}
                        className="rounded-xl"
                    />

                    
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-manga/${mangaChapter.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deleteChapter}>
                                Delete
                            </Button>
                        </div>
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{mangaChapter.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(manga.Chapter)}
                    </div>
            </Container>
        </div>
    ) : null;
}