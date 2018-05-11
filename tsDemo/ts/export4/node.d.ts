declare module 'url'{
  export interface Url{
    hostname?:string,
    port?:string
  }

  export function parse (urlStr:string):Url
}

declare module 'path'{
  export function normalize(p:string):string
  export function join(...paths:any[]):string
  export let sep:string
}