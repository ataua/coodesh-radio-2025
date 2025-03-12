import { RadioContext } from "@/context/RadioContext";
import { useContext } from "react";

const Content = () => {
    const { radio } = useContext(RadioContext);

    return (<>
        <p className='text-2xl text-white'>{radio}</p>

    </>)
}

export default Content