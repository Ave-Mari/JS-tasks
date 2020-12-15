const path = "/users/download/index.html";

const isHtml = path => {
    const trueHtml = ".html"; 
    const pathExt = path.slice(-5); 

    if (pathExt == trueHtml) {
        return true;
    } else {
        return false
    }
}

console.log(isHtml(path));