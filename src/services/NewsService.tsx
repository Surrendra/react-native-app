import { NewsModel } from "../models/news";
import axios from 'axios';

export default class NewsService{
    newsList: Array<NewsModel> = [];
    async getNews(token: string): Promise<Array<NewsModel>> {
        try {
            const res = axios.create({
                baseURL: 'https://bmc.baliprov.go.id/api/news/get-all',
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000,
                validateStatus: (status) => status >= 200 && status <= 500,
            });
            return this.newsList;
        } catch (error) {
            return error;
        }
    }
}