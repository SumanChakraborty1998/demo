export const getDataFromLocalStorage = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
};

export const setDataToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};
