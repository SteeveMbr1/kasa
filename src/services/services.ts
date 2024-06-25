export async function fetchAll() {
    const response = await fetch('/datas/logements.json');

    const data = await response.json();

    return data;
}

export async function fetchById(id : string | undefined) {
    const response = await fetch('/datas/logements.json');

    const data = await response.json();

    return data.find((logement : {id:string}) => logement.id == id)
}