import { useContext } from "react";
import Button from "../Button";
import { RadioContext } from "@/context/RadioContext";

const Menu = () => {
    const { radio, setRadio } = useContext(RadioContext);

    const changeRadio = (radio: string) => {
        setRadio(radio);
        console.log(radio);
    }

    return (
        <menu className='flex flex-col gap-2 bg-gray-800 p-2'>

            <h2 className='text-xl text-white m-auto'>Menu</h2>
            <ul className='flex flex-col gap-2'>
                <li>
                    <Button
                        text='Radio 1'
                        onClick={() => { changeRadio('Radio 1') }}
                        intent='primary'
                    />
                </li>
                <li>
                    <Button
                        text='Radio 2'
                        onClick={() => { changeRadio('Radio 2') }}
                        intent='secondary'
                    />
                </li>
                <li>
                    <Button
                        text='Radio 3'
                        onClick={() => { changeRadio('Radio 3') }}
                        intent='warning'
                    />
                </li>
                <li>
                    <Button
                        text='Radio 4'
                        onClick={() => { changeRadio('Radio 4') }}
                        intent='danger'
                    />
                </li>
                <li>
                    <Button
                        text='Radio 5'
                        onClick={() => { changeRadio('Radio 5') }}
                        intent='success'
                    />
                </li>
            </ul>

        </menu>
    )
}

export default Menu