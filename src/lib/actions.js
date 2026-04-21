import { revalidatePath } from "next/cache";
import { postTasks } from "./tasks";

export const createATask = async (formData) => {
    'use server'

    const newTasks = Object.fromEntries(formData.entries());
    const res = await postTasks(newTasks);

    if (res.ok) {
        revalidatePath('/')
    }



}