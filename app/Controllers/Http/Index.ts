import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PersonInfProvider from 'App/Utils/PersonInfProvider'

export default class Index {
  public async index(ctx: HttpContextContract) {
    var personData = new PersonInfProvider()
    return ctx.view.render('layout', {
      person: personData.get()
    })
  }
}