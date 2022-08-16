import React, { Component } from 'react'

export default class News extends Component {

    render() {

        let { title, description, imgUrl, url, date } = this.props;

        return (
            <div className='my-3' >
                <div className="card" >
                    <img src={imgUrl ? imgUrl : "https://w7.pngwing.com/pngs/982/544/png-transparent-news-graphy-logo-icon-news-logo-text-photography-computer-wallpaper.png"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>
                            {new Date(date).toGMTString()}
                        </small></p>
                        <a href={url} target='_blank' rel="noreferrer" className="btn btn-dark btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
