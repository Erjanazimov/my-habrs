import React from 'react';
import Postcard_form from './Postcard.module.css';


class Postcard extends React.Component{

    constructor(props) {
        super(props);
    }


    render(){
      return (
          <>
        <div className={Postcard_form.postcard_blocks}>
    <div className={Postcard_form.postcard}>
        <div className={Postcard_form.postcard_authors}>
            <span className={Postcard_form.create_name}>{this.props.creatName}</span>
            <span className={Postcard_form.create_date}>{this.props.creatDate}</span>
        </div>
        <div className={Postcard_form.postcard_img}>
            <img className={Postcard_form.postcard_img} src="https://picsum.photos/1200/200" alt=""/>
        </div>
        <div className={Postcard_form.postcard_title}>
            <a className={Postcard_form.postcard_title_href} href="#">{this.props.title}</a>
        </div>
    </div>
</div>



</>
      )
    }
  }

  export default Postcard;