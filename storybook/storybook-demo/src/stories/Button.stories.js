import React from "react";
import Button from "../Components/Button";

export default{
    title: 'Button',
    component: Button
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Primary</Button>
export const Danger = () => <Button variant="danger">Primary</Button>