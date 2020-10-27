export function idbPromise(resourceName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open('teach-me-to', 1);
        let db, tx, store;
        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore('resources', { keyPath: '_id' });
        };

        request.onerror = function(e) {
            console.log('There was an error');
        };

        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(resourceName, 'readwrite');
            store = tx.objectStore(resourceName);

            db.onerror = function(e) {
                console.log('error', e);
            };

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                    case 'get':
                        const all = store.getAll();
                        all.onsucces = function() {
                            resolve(all.result);
                        };
                        break;
                        case 'delete':
                            store.delete(object._id);
                            break;
                            default:
                                console.log('No valid method');
                                break;
            }

            tx.oncomplete = function() {
                db.close();
            };
        };
    }) ;
}