import { existsSync, readFileSync, writeFileSync } from "fs"

export class fileTXT
{
    readonly path : string

    private encoding!: BufferEncoding

    public name!: string

    private dataRaw!: string

    private json() : any { return JSON.parse(this.dataRaw) }

    private get linesRaw() : string[] { return this.dataRaw.split('\n') } 

    public get fullName() : string { return this.path + "/" + this.name }

    constructor(path: string)
    {
        this.path = path
    }

    exist(file: string) : boolean
    {
        return (existsSync(file))
    }

    load(name: string, encoding: BufferEncoding = 'utf-8') : boolean
    {
        
        this.name = name

        if (encoding != null)
            this.encoding = encoding

        try 
        {
        
            if (!this.exist(this.fullName))
                return false

            this.dataRaw = readFileSync(this.fullName, this.encoding)
            
            return true

        }
        catch (err) 
        {
            return false
        }
    }

    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */

    save(name: string, data: string)  : boolean
    {
        this.name = name
        try 
        {        
            writeFileSync(this.fullName, data, { flag: 'w' })

            return true
        }
        catch (err) 
        {
            return false
        }
    }

    data(json: boolean) : any
    {
        if (json)
            return this.getJSON()
        else
            return this.getTXT()

    }

    private getJSON() : any
    {
        
        let data = this.json()

        if (data.isArray)
        {
            let lines : any[] = []

            for (let line of data) 
                lines.push(line)

            return lines
        }        
        
        return data

    }

    private getTXT() : string[]
    {
        
        let lines : string[] = []

        this.linesRaw.forEach(line => { lines.push(line) })

        lines.splice(-1,1)

        return lines
    }

}