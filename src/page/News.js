import React from "react";
import { View,Text } from "react-native";
import NewsService from "../services/NewsService";

const News = () => {
    const NewsService = new NewsService();
    const news = NewsService.getNews();
    console.l0g(news);
    return (
        <View>
            <Text>Yaha</Text>
        </View>
    )
}

export default News;