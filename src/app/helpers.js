export async function getList(page) {
    const response = await fetch(
        `https://taxivoshod.ru/testapi/?w=list&page=${page}`
    );
    return response.json();
}
export async function getItem(id) {
    const response = await fetch(
        `https://taxivoshod.ru/testapi/?w=item&id=${id}`
    );
    return response.json();
}