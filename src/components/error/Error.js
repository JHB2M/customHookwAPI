import React from "react";
import LottieView from 'lottie-react-native'
export default  function Error(){
    return(
        <LottieView source={require('../../assests/error.json')} autoPlay/>
    )
}