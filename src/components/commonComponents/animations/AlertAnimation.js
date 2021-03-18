import React, {Component} from "react"
import lottie from "lottie-web";
import alert from "./alert.json";
export default class AlertAnimation extends Component{
    constructor(props) {
        super(props);
        this.loadAnimation = this.loadAnimation.bind(this);
    }

    componentDidMount() {
        this.loadAnimation();
    }

    /**
     * This method loads the animation. lottie library is used to render the animation.
     */
    loadAnimation() {
        // Setting the animation properties.
        let animation = lottie.loadAnimation({
            container: document.querySelector("#alert-animation"),
            animationData: alert,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
        })
        // Controlling the animation play back speed.
        animation.setSpeed(1)
    }
    render() {
        return (
            <div style={{height:'500%',width:'50%',marginLeft:'auto',marginRight:'auto'}}>
                <div id="alert-animation"/>
            </div>
        );
    }
}
