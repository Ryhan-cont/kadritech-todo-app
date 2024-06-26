export const cloneDeep = (data) => {
    if(data == null || data == undefined) return data;

    if (Array.isArray(data)) {
        let newArr = [];
        for (let i = 0; i < data.length; i++) {
            let newArrVal = cloneDeep(data[i]);
            newArr.push(newArrVal);
        }
        return newArr;
    } else if (typeof data === 'object') {
        let newObj = {};
        for (let key in data) {
            let newObjVal = cloneDeep(data[key]);
            newObj[key] = newObjVal;
        }
        return newObj;
    } else {
        return data;
    }
};

export const scrollbarHW = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

    document.body.removeChild(outer);

    return scrollbarWidth;
};

export const screenSize = () => {
    const body = document.body;
    const html = document.documentElement;
    const windowHeight = window.innerHeight || html.clientHeight || body.clientHeight;
    const windowWidth = window.innerWidth || html.clientWidth || body.clientWidth;
    const docHeight = Math.max(body.offsetHeight, html.clientHeight, html.offsetHeight);
    const docWidth = Math.max(body.offsetWidth, html.clientWidth, html.offsetWidth);

    let screenX = windowWidth;
    let screenY = windowHeight;

    const scrollHeight = document.documentElement.scrollHeight;
    const scrollWidth = document.documentElement.scrollWidth;

    if (scrollHeight > docHeight || scrollWidth > docWidth) {
        const scrollbarSize = scrollbarHW();
        if (scrollHeight > docHeight) {
            screenX -= scrollbarSize;
        }
        if (scrollWidth > docWidth) {
            screenY -= scrollbarSize;
        }
    }

    return { screenX, screenY };
};