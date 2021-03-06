import React from 'react'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import {useEffect} from "react"
import {useAnimation} from "framer-motion"
import CustomSection1 from "./F24/CustomSection1"
import CustomSection2 from "./F24/CustomSection2"
import CustomSection3 from "./F24/CustomSection3"
import CustomSection4 from "./F24/CustomSection4"
import CustomSection5 from "./F24/CustomSection5"
import CustomSection6 from "./F24/CustomSection6"
import Astra1 from "./Astra/Astra1"
import Astra2 from "./Astra/Astra2"
import Astra3 from "./Astra/Astra3"
import Astra4 from "./Astra/Astra4"
import Astra5 from "./Astra/Astra5"
import Playo1 from "./playometric/Playo1"
import Playo2 from "./playometric/Playo2"
import Playo3 from "./playometric/Playo3"
import Playo4 from "./playometric/Playo4"
import Playo5 from "./playometric/Playo5"
import Playo6 from "./playometric/Playo6"




const CaseSection = ({item}) => {
    const components = [
        CustomSection1,
        CustomSection2,
        CustomSection3,
        CustomSection4,
        CustomSection5,
        CustomSection6,
        Astra1,
        Astra2,
        Astra3,
        Astra4,
        Astra5,
        Playo1, 
        Playo2, 
        Playo3, 
        Playo4, 
        Playo5, 
        Playo6, 
    ];
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce:true
    });
    const animation =useAnimation();

    useEffect(() => {
        if(inView){
        animation.start({
           x:0,
           opacity:1,
           transition: {
               type:"spring", duration:1,
           } 
        })   
        }
        if(!inView){
            animation.start({x:-20, opacity:0.5})
        }
        
    },[inView, animation])

    const CurrentComponent = components[item.id]
        return (
        <motion.div ref={ref}  animate={animation}  className="w-10/12 md:w-9/12 lg:w-7/12  mx-auto py-3 mb-2 xs:mb-4 sm:mb-2 md:mb-8 mt-2 xs:mt-4 sm:mt-4 md:mt-8 leading-loose">
        <h4 className={inView ? "text-xs text-white py-1 px-2 rounded bg-yellow-500 inline uppercase":"text-xs text-white py-1 px-2 rounded bg-gray-500 inline uppercase"}>{item.tag}</h4>
        <h2 className="text-4xl mb-4 mt-4 font-bold">{item.name}</h2>
        <CurrentComponent />
        </motion.div>
       
    )
}

export default CaseSection
