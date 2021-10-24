import React, { Component } from 'react';
import { CloudinaryContext, Image } from 'cloudinary-react';
import axios from 'axios';

class DisplayImages extends Component {

    state = { images: [] }

    getImages() {
        axios.get('http://res.cloudinary.com/yuanashl/image/list/memory.json')
             .then(res => {
                 console.log(res.data.resources);
                 this.setState({ images: res.data.resources});
             });
    }

    componentDidMount() {
        this.getImages();
    }

    render() {
        const { images } = this.state


        return (
            <div>
                <CloudinaryContext cloudName='yuanashl'>
                    { images.map(
                        (data, index) => (
                    <div className="col" key={index}>
                        <div className="embed-responsive">
                            <Image images={images} publicId = {data.public_id} width="300" height= "300"></Image>
                        </div>
                    </div>
                    ))}
                </CloudinaryContext>
            </div>
        );
    }
}

export default DisplayImages

/* References: https://cloudinary.gitbook.io/build-a-mini-netflix/build-a-mini-netflix-with-cloudinary/upload-videos */