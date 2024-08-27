import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf.js";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Manga Methods
    async createManga({ title, slug, author, coverImage, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMangaCollectionId, // Updated to a more specific collection ID
                slug,
                {
                    title,
                    author,
                    coverImage,
                    userId
                }
            );
        } catch (error) {
            console.log(`Appwrite createManga error: ${error}`);
        }
    }

    async updateManga(slug, { title, author, coverImage }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMangaCollectionId,
                slug,
                {
                    title,
                    author,
                    coverImage
                }
            );
        } catch (error) {
            console.log(`Appwrite updateManga error: ${error}`);
            return false;
        }
    }

    async deleteManga(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMangaCollectionId,
                slug
            );
        } catch (error) {
            console.log(`Appwrite deleteManga error: ${error}`);
        }
    }

    async getManga(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteMangaCollectionId,
                slug
            );
        } catch (error) {
            console.log(`Appwrite getManga error: ${error}`);
            return false;
        }
    }

    async getMangas() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteMangaCollectionId,
                [
                    Query.orderAsc('title')
                ]
            );
        } catch (error) {
            console.log(`Appwrite getMangas error: ${error}`);
        }
    }

    // Chapter Methods
    async createChapter({ mangaId, chapterNumber, title, content }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChapterCollectionId,
                ID.unique(),
                {
                    mangaId,
                    chapterNumber,
                    title,
                    content
                }
            );
        } catch (error) {
            console.log(`Appwrite createChapter error: ${error}`);
        }
    }

    async updateChapter(chapterId, { title, content }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChapterCollectionId,
                chapterId,
                {
                    title,
                    content
                }
            );
        } catch (error) {
            console.log(`Appwrite updateChapter error: ${error}`);
            return false;
        }
    }

    async deleteChapter(chapterId) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChapterCollectionId,
                chapterId
            );
        } catch (error) {
            console.log(`Appwrite deleteChapter error: ${error}`);
        }
    }

    async getChapter(chapterId) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteChapterCollectionId,
                chapterId
            );
        } catch (error) {
            console.log(`Appwrite getChapter error: ${error}`);
            return false;
        }
    }

    async getChapters(mangaId) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteChapterCollectionId,
                [
                    Query.equal('mangaId', mangaId),
                    Query.orderAsc('chapterNumber')
                ]
            );
        } catch (error) {
            console.log(`Appwrite getChapters error: ${error}`);
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(`Appwrite uploadFile error: ${error}`);
            return false;
        }
    }


    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log(`Appwrite deleteFile error: ${error}`);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        );
    }

    async uploadChapter(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteChapterBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log(`Appwrite uploadChapter error: ${error}`);
            return false;
        }
    }

    async deleteChapter(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteChapterBucketId,
                fileId
            );
            return true;
        } catch (error) {
            console.log(`Appwrite deleteChapter error: ${error}`);
            return false;
        }
    }
}

const service = new Service();
export default service;
