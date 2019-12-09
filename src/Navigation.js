import React, { Component } from 'react';
import './Navigation.css';


class Navigation extends Component {
    render() {
        const items = ['HOME', 'Services', 'Reach us', 'Contact']
        const navlinks = items.map((item) => {
            return(

                <li><a href={"#" +item}> {item} </a></li>

            )
        });
        return (
            <nav>
                <h2 className="title"> { this.props.title } </h2>

                <ul>
                    { navlinks }
                </ul>
            </nav>

        );
    }
}

export default Navigation;
