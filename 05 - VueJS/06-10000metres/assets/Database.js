class Database
{
    static async fetchFile(url) {
        let response = await fetch(url);
        let json = await response.json();
        return json;
    }
}

export { Database }
