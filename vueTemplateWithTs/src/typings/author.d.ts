declare namespace author {
  export interface author {
    name: string,
    age: number,
    sex: string
  }

  export interface state {
    _author:author
  }
}