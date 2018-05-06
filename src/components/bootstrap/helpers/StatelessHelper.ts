export const mergeClassName = (className?: string) => {
    let applyClass = "";
    if (!!className) {
        applyClass =  ` ${className.trim()}`; 
    }
    return applyClass;
}
