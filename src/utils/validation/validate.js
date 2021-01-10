export const require1 = (value) => {
    if (value) return undefined;
    return ('Field is require');
}

export const maxLength = (length)  => (value) => {
    if (value && value.lenght>length) return (`Max length ${{length}} `);

}


