import React, { Component } from 'react';
import './Services.css';

class Services extends Component {

    render() {
        return(
            <div className="services">
                <h3> services </h3>
                <h2> Services We Offer </h2>

                <div className="icons">
                  <Icons myIcon = { iconObj[0].icon } mytitle = { iconObj[0].title } myDesc={ iconObj[0].description } /> 
                  <Icons myIcon = { iconObj[1].icon } mytitle = { iconObj[1].title } myDesc = { iconObj[1].description} />
                  <Icons myIcon = { iconObj[2].icon } mytitle = { iconObj[2].title } myDesc = { iconObj[2].description} />
                  <Icons myIcon = { iconObj[3].icon } mytitle = { iconObj[3].title } myDesc = { iconObj[3].description} />
                    
                </div>
            </div>
                
        );
    }

}

const iconObj = [
    {
        icon : <ion-icon name="alarm"></ion-icon>,
        title : 'Enquiries',
        description :  'Any Queries contact us'
    },
    {
        icon : <ion-icon name="help"></ion-icon>,
        title : 'Question',
        description: 'For Question Contact us'

    },
    {
        icon : <ion-icon name="mail"></ion-icon>,
        title : 'Email us',
        description : 'For EMail contact us'
    },
    {
        icon: <ion-icon name="settings"></ion-icon>,
        title : 'Settins',
        description : 'For Settings and Queries'
    }
]

class Icons extends Component {
    render() {
        return(
            <div>
                <span> {this.props.myIcon } </span>
                <h4> { this.props.mytitle } </h4>
                <p> { this.props.myDesc } </p>
            </div>
        )
    }
}

export default Services;















