import React, { Component } from "react"
import { CLOUD_NAME, UPLOAD_PRESET, API_KEY } from "./config"
require('dotenv').config()

class UploadWidget extends Component {

    componentDidMount() {
        var myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: 'yuanashl',
                uploadPreset: 'upfkmaur',

                multiple: true,
                showCompletedButton: true,
                thumbnails:true,

                styles: {
                    palette: {
                        window: "#FFFFFF",
                        windowBorder: "#90A0B3",
                        tabIcon: "#0078FF",
                        menuIcons: "#5A616A",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                        link: "#0078FF",
                        action: "#FF620C",
                        inactiveTabIcon: "#0E2F5A",
                        error: "#F44235",
                        inProgress: "#0078FF",
                        complete: "#20B832",
                        sourceBg: "#E4EBF1"
                    },
                    fonts: {
                        default: {
                            active: true
                        }
                    }
                }
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    console.log("Done! Here is the image info: ", result.info);
                }
            }
        );
        document.getElementById("upload_widget").addEventListener(
            "click",
            function () {
                myWidget.open();
            },
            false
        );
    }

    render() {
        return (
            <button id="upload_widget" className="cloudinary-button">
                Upload
            </button>
        );
    }
}
export default UploadWidget;