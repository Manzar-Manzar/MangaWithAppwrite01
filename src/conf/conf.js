const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteChapterCollectionId:String(import.meta.env.VITE_APPWRITE_MANGA_CHAPTER_COLLECTION),
    appwriteChapterBucketId:String(import.meta.env.VITE_APPWRITE_CHAPTER_BUCKET_ID)
}

export default conf