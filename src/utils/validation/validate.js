export const required = (value) => {
    if (value) return undefined;  // есть value есть значить это true значит возвращаем undefined
    return ('Field is required'); // иначе  возвращаем ('Field is require')
}

export const maxLength = (length)  => (value) => {  // благодаря замыканию мы передаём в функцию length

    if (value && value.length>length) return (`MaxLength ${length}`)
        return undefined

}

export const nothing = (value) =>{
    if (value) return undefined;
    return (' ')
}

