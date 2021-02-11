// import { isString } from "util"; 
// isString is deprecated hence used typeof value === "string"

function abbreviateString(str) {
    if (typeof str === 'string') {
        let str1 = str.trim();
        let splitList = str1.split(' ');
        if (splitList.length > 1) {
            return splitList[0] + ' ' + splitList[splitList.length - 1][0].toUpperCase() + ' ';
        } 
    } else {
        return abbreviateString(str).toThrow();
    }
}

export { abbreviateString };
