import uuid from 'uuid';
const db = [
    { id: uuid(), title: 'Matrix', description: 'Muito bom!' },
    { id: uuid(), title: 'Clube da Luta', description: 'Excelente!' },
    { id: uuid(), title: 'O Poderoso Chefão', description: 'Obra-prima!' }
]
export default {
    addReview: (review) => {
        const { title, description, imageUri, deviceName } = review;
        const entity = { id: uuid(), title, description, imageUri, deviceName };
        db.push(entity);
        return entity
    },
    loadReviews: () => {
        const slice = db.slice(0);
        console.log('loading reviews', slice);
        return slice;
    }
}

updateReview: (review, newValues) => {
    const filter = db.filter(r => r.id === review.id);
    if (filter[0]) {
        Object.assign(filter[0], newValues);
    }
}