const getData=(key)=>{
    const stored= localStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
};

const saveData=(key,ideas)=>{
    localStorage.setItem(key,JSON.stringify(ideas));
};

export const getWantedData=()=> getData("App Data");

export const isWantedData=(id)=> getWantedData().includes(id);

export const addWantedData=(id)=>{
    const data= getWantedData();
    if(!isWantedData(id)){
        data.push(id);
        saveData("App Data",data);
    }
};


export const removeWantedData = (id) => {
    const data = getWantedData();
    const updated = data.filter(item => item !== id);
    saveData("App Data", updated);
};