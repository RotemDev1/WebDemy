export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    newEntity,
    deleteStorage,
    getEntity
}

function getEntity(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType));
    return entities
}

function deleteStorage() {
    localStorage.clear();
}

function newEntity(entityType, entityArr) {
    _save(entityType, entityArr)
}

function query(entityType) {
    var entities = JSON.parse(localStorage.getItem(entityType))
    _save(entityType, entities)
    return Promise.resolve(entities)
}


function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => {
            return entity._id == entityId
        }))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            console.log(entities);
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}



function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            console.log('updated entity', updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id == entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}


function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}