import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import PersonInfProvider from 'App/Utils/PersonInfProvider'

export default class Index {
  public async index(ctx: HttpContextContract) {
    var personData = new PersonInfProvider()

    return View.render('layout', {
      person: personData.get()
    })
  }
}