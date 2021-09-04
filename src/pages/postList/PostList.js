import React from 'react';

import Header from "../../components/header/Header";
import Postcard from "../../components/postcard-blocks/Postcard";
import Footer from "../../components/footer/Footer";


class PostList extends React.Component{
    render() {
        return(
            <>
            <Header />
            <Postcard  creatName="Теста Тест" creatDate="12.02.2021 15:40" title="ИИ соцсети Facebook принял людей на видео за приматов, компании пришлось извиниться"/>
            <Postcard  creatName="Тестова Теста" creatDate="10.02.2021 19:40" title="Facebook открыла код решения CacheLib для кэширования на энергонезависимой памяти"/>
            <Footer />
                </>
        )
    }
}

export default PostList;