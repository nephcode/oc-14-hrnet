//============================================= HR NET ===============//
// IndexedDB =========================================================//
//==================================== By NEPHELIM ============ 2024 =//
export const openDB = () => {
    return new Promise((resolve, reject) => {

        // création de la base et la version 
        const request = indexedDB.open("hrnetDBZ", 1);

        // Si false création de la base
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            db.createObjectStore("formData", { keyPath: "id", autoIncrement: true });
        };


        request.onsuccess = (event) => {
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

export const saveData = async (data) => {
    try {
        const db = await openDB();
        const transaction = db.transaction("formData", "readwrite");
        const store = transaction.objectStore("formData");
        store.add(data);

        transaction.oncomplete = () => {
            console.log("Données enregistrées avec succès !");
        };

        transaction.onerror = (event) => {
            console.error("Erreur lors de l'enregistrement :", event.target.error);
        };
    } catch (error) {
        console.error("Erreur d'ouverture de la base de données :", error);
    }
};
