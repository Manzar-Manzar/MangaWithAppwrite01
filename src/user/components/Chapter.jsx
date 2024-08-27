import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import service from '../../appwrite/config';

function ChapterReader() {
  const { mangaSlug, chapterId } = useParams();
  const [chapter, setChapter] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchChapterData() {
      try {
        // Fetch all chapters for the manga
        const { documents } = await service.getChapters(mangaSlug);
        setChapters(documents);
        
        // Find the current chapter
        const currentChapter = documents.find(chap => chap.$id === chapterId);
        setChapter(currentChapter);
      } catch (error) {
        console.error("Failed to fetch chapters", error);
      } finally {
        setLoading(false);
      }
    }

    fetchChapterData();
  }, [mangaSlug, chapterId]);

  const handleNextChapter = () => {
    const currentIndex = chapters.findIndex(chap => chap.$id === chapterId);
    const nextChapter = chapters[currentIndex + 1];
    if (nextChapter) {
      navigate(`/manga/${mangaSlug}/chapter/${nextChapter.$id}`);
    }
  };

  const handlePrevChapter = () => {
    const currentIndex = chapters.findIndex(chap => chap.$id === chapterId);
    const prevChapter = chapters[currentIndex - 1];
    if (prevChapter) {
      navigate(`/manga/${mangaSlug}/chapter/${prevChapter.$id}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!chapter) {
    return <div>Chapter not found</div>;
  }

  return (
    <div className="chapter-reader">
      <h1>{chapter.title}</h1>
      <div className="chapter-content">
        {/* Render chapter content */}
        <p>{chapter.content}</p>
      </div>
      <div className="chapter-navigation">
        <button onClick={handlePrevChapter} disabled={!chapters.find(chap => chap.$id === chapterId - 1)}>Previous Chapter</button>
        <button onClick={handleNextChapter} disabled={!chapters.find(chap => chap.$id === chapterId + 1)}>Next Chapter</button>
      </div>
    </div>
  );
}

export default ChapterReader;
