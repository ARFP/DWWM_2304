class JsonDb {

     static async fetchJson(url) {
        let response = await fetch(url);
        let objectsJS = await response.json();
        return objectsJS;
    }

}

export{ JsonDb };