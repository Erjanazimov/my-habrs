import React from 'react';

import Header from "../../components/header/Header";
import Postcard from "../../components/postcard-blocks/Postcard";
import Footer from "../../components/footer/Footer";


class PostList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            postList:[]
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(response => {
                if (response.ok){
                    return response.json();
                } else {
                    alert("Ошибочка вышла" + response.status)
                }
            })
            .then(data => this.setState({
                postList: data
            }))
    }

    render() {
        return(
            <>
            <Header />
                {

                }
                {
                    this.state.postList.map(data => (
                        <Postcard creatName={data.createdUser}
                                   creatDate={data.createdData}
                                   title={data.desc} />
                    ))
                }
            <Footer />
                </>
        )
    }
}

Postcard.defaultProps = {
    creatName: "Автор неизвестен",
    creatDate: "Дата не известно",
    title: "........................."
}

export default PostList;