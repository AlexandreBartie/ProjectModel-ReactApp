export class Collection<T> extends Map<string, T>
{

    private data : Array<T>

    get count() : number { return this.size}

    // get first() : V { return this.item(1) }

    // get last() : V { return this.item(this.count)}

    // get isFill() : boolean { return (this.count != 0) }
    
    get list() : Array<T> { return this.data  }

    get map() : any { return this.list.map }

    constructor()
    {
      super()

      this.data = new Array<T>()
    }
  
    // item(index : number) : V { return this.data[index-1] }

    exist(key : string) : boolean  { return (this.get(key) !== undefined) }

    add(key : string, value : T)
    {       
        
        if (!this.exist(key))
          {
            super.set(key, value)

            this.data.push(value)
          }

    }

    protected key_next() : string
    { return (this.count + 1).toString() }

}