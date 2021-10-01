export default class GotService{
    constructor(){
        this._apiBase = "https://fakestoreapi.com/products"
    }

    getResource = async(url) => {
        //const result = await fetch(`${this._apiBase}{url}`)
        const result = await fetch(url)
        if(!result.ok){
            //throw new Error(`Could not fetch url: ${url} status: ${result.status}`)
            throw new Error(`Could not fetch url: ${url} status: ${result.status}`)
        }
        return await result.json()
    }

    getPng = async(png) => {
        const res = await this.getResource(png)
        return await res        
    }

}