export default async function logements(id ? : string) {
    const response = await fetch('/datas/logements.json');

    const data = await response.json();

    if (id) {
        return data.find((logement : {id:string}) => logement.id == id)
    }
    return data;
}