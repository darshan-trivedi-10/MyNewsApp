import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export default class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string
    }

    capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articals: [],
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - My News App`;
    }


    async updateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=15`
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articals: parsedData.articles,
            totalArticles: parsedData.totalResults
        })
        this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevious = async () => {
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }

    handleNext = async () => {
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    render() {
        return (
            <div className='container my-3 box' >
                <center><h2>My News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2></center>
                <div className='row'>
                    {
                        this.state.articals.map((element) => (
                            <div className='col-md-4'>
                                <NewsItem title={element?.title} description={element.description?.slice(0, 88)} imgUrl={element.urlToImage} url={element.url} date={element.publishedAt} />
                            </div>
                        ))
                    }
                </div>
                <div className='container d-flex justify-content-between'>

                    <button type='button' className='btn btn-dark' onClick={this.handlePrevious}> &larr; Previous</button>
                    <button type='button' className='btn btn-dark' onClick={this.handleNext}>Next &rarr;</button>

                </div>
            </div >
        )
    }
}
