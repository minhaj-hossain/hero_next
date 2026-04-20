import { getTasks } from '@/lib/tasks';
import { Card } from '@heroui/react';
import React from 'react';
import CardCom from './Card';

const TasksCard = async () => {

    const tasks = await getTasks()

    return (
        <div className='grid grid-cols-3 gap-3'>
            {
                tasks.map(task => <CardCom key={task.id} task={task} />)
            }
        </div>
    );
};

export default TasksCard;