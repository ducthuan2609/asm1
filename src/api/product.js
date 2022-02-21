import instance from "./instance";

export const getAll = () =>{
    const url ="/pro";
    return instance.get(url);
}

export const get = (id) =>{
    const url =`/pro/${id}`;
    return instance.get(url);
}

export const add = (pro) =>{
    const url ="/pro";
    return instance.post(url,pro);
}
export const remove = (id) =>{
    const url =`/pro/${id}`;
    return instance.delete(url);
}

export const update = (pro) => {
    const url = `/pro/${pro.id}`;
    return instance.put(url, pro);
}

