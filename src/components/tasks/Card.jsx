import React from 'react';
import { Card } from "@heroui/react";


const CardCom = ({ task }) => {


    return (
        <Card className="border border-primary" variant="primary">
            <Card.Header>
                <Card.Title>{task.title}</Card.Title>
                <Card.Description>{task.description}</Card.Description>
            </Card.Header>
            <Card.Content>
                <p>{task.assigned_to}</p>
            </Card.Content>
        </Card>
    );
};

export default CardCom;