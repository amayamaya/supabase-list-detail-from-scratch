export function findById(id, data) {
    return data.find((item) => item.id === id);
}