import React from 'react';
import styles from './Footer.module.css';


const styles1 = {textAlign: "center", color: "red"};
const styles2 = {textAlign: "center", color: "blue"};
const isUser = false;

class Footer extends React.Component{
    constructor(props) {
            super(props);

            this.state ={
                title: 'Footer ew'
        }
    }

    render() {
        return(
            <div onClick={ () => this.setState({title:'Теперь не футтер'})} className={styles.footerBlock}>
            <h3 style={isUser ? styles1 : styles2}>{this.state.title}</h3>
            </div>
        )
    }
}


export default Footer;