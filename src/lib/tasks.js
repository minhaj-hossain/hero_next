import tasks from '@/data/tasks.json'


export const getTasks = async () => {
    return tasks;
}

export const postTasks = async(newTasks) => {

    newTasks.id = tasks.length + 1;
    tasks.unshift(newTasks)

    return {"ok": true, "message": "newtask successfully added" }

}