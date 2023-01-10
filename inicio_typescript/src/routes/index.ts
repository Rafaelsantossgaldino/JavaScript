import { Router, Request, Response } from "express";

const router =  Router();

router.get('/', (req: Request, res: Response) => {
  let age: number = 15
  let showOld: boolean = false

  if(age > 50) {
    showOld = true
  }
  
  res.render('pages/home', {
    name: 'Rafael',
    lastName: 'Galdino',
    age: 27,
    showOld, 
    products: [
      {  title: 'produto x', price: 10},
      {  title: 'produto y', price: 50},
      {  title: 'produto z', price: 100}
    ],
    frasesDoDia: [
      'Alguma coisa legal',
      'Outra coisa legal'
    ]
  })
})

router.get('/contatos', (req: Request, res: Response) => {
  res.render('pages/contato')
})

router.get('/noticias', (req: Request, res: Response) => {
  res.send('Pagina de noticias')
})

router.get('/sobre', (req: Request, res: Response) => {
  res.render('pages/sobre')
})

export default router