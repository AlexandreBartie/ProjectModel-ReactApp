import { Collection } from "../../library/libCollection"
import { fileTXT } from "../../library/libFile"

export interface iEntity
{
    key: string
    name: string
}

export class Entity implements iEntity
{

    key!: string
    name!: string

    set(data: iEntity) : Entity
    {
        this.key = data.key
        this.name = data.name

        return this
    }

}

export class EntityList extends Collection<Entity>
{
    
    readonly file : EntityListFile

    constructor()
    {
        super()

        this.file = new EntityListFile(this)

    }

    add(text: string) : boolean
    {

        if (this.isValid(text))
        {

            let item = new Entity()

            item.key = this.key_next()
            item.name = text
            
            this.push(item)

            return true

        }

        return false
    }
    
    push(item: Entity)
    {
        super.add(item.key, item)
    }

    find(text: string) : boolean
    {

        for (let item of this.list)
            if (item.name.toLowerCase() === text.toLowerCase())
                return true

        return false

    }

    private isValid(text: string) : boolean
    {
        if (text !== "")
            return !this.find(text)

        return false
    }

    parse(list: iEntity[]) : EntityList
    {
        for (let item of list)
            this.push(new Entity().set(item))

        return this
    }

}

export class EntityListFile
{

    private list : EntityList

    constructor(list : EntityList)
    {
        this.list = list
    }

    parse(list: iEntity[]) : EntityList
    {
        return this.list.parse(list)
    }

    import(name: string, folder: string) : EntityList
    {
        
        let path = __dirname + folder + "/"

        console.log(path)

        // let txt = new fileTXT(path)

        // if (txt.load(name))
        //     return this.list.parse(txt.data(true))

        return this.list
    }

}