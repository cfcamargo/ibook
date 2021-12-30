import { Action, Module, Mutation, VuexModule,  } from 'vuex-module-decorators'
import { Book } from '@/models'
import { $axios } from '@/utils/nuxt-instance'

interface Show {
  id:Book['id']
}

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  private books = [] as Book[]
  private book = {} as Book


  public get $all(){
    return this.books
  }

  public get $single(){
    return this.book
  }

  @Mutation
  private SET_ALL(book:Book[]){
    this.books = book
  }

  @Mutation
  private SET_SINGLE(book: Book){
    this.book = book
  }

  @Action
  public async index(){
    const books = await $axios.$get('/books')
    console.log(books)
    this.context.commit('SET_ALL', books)
  }

  @Action
  public async show({id}: Show){
    const book = await $axios.$get(`/books/${id}`)
    console.log(book)
    this.context.commit('SET_SINGLE', book)

  }


}



/*
padrão crud utilizado

@Action
public async index(){}
@Action
public async create(){}
@Action
public async show(){}
@Action
public async update(){}
@Action
public async destroy(){}

*/