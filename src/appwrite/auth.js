import conf from '../conf/conf.js';
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(`Appwrite createAccount Error: ${error}`);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(`Appwrite login error: ${error}`);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`Appwrite getCurrentUser error: ${error}`);
        }
        return null;
    }

    async logout() {
        try {
            await this.account.deleteSessions('');
        } catch (error) {
            console.log(`Appwrite logout error: ${error}`);
        }
    }

    async admin(userData) {
  try {
    if (userData.labels.includes('admin')) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(`Admin check error: ${err}`);
    return false;
  }
}

}

const authService = new AuthService();

export default authService;
