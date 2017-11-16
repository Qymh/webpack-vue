import {STORAGE_KEY, mutations} from './mutations'

export const localStoragePlugin=store=>{
  store.subscribe((mutations,{todos})=>{
    window.localStorage.setItems(STORAGE_KEY,JSON.stringify(todos))
  })
}