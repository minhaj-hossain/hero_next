export const createATask = async (formData) => {
    'use server'

    const name = formData.get('name')
    const email = formData.get('email')

    console.log('adding a task with name & email: ', { name, email })

}