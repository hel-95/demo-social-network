
export const required = value => {
    // if(value)
    // return 'error message';
    // return undefined;
    return value ? undefined : 'Field is required';
}



export const maxLengthCreator = (maxLength) => (value) => {
  if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
   return undefined;
    //return (value && value.length > 30) ? 'Max length is 30 symbols' : undefined;
}