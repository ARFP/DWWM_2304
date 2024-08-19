class Db 
{
    static async fetchJson(_url) {
        let response = await fetch(_url);
        let json = await response.json();
        return json;
    }
}

//let result = await Db.fetchJson('http://....');

export { Db }