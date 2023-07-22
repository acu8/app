import React from 'react'
import Button from './Button'
import { GoBellFill } from "react-icons/go";


export default function App() {
    const handleClick = () => {
        console.log('click');
    };
  return (
  <>
    <div>
        <Button danger onClick={handleClick}><GoBellFill />Click me now!</Button>
    </div>
    <div>
        <Button success>This is button</Button>
    </div>
    <div>
        <Button primary>Hi there!</Button>
    </div>
    <div>
        <Button secondary outline>Hi there!</Button>
    </div>
    <div>
        <Button warning rounded>Hi there!</Button>
    </div>
  </>
  )
};
