import { Router, Request, Response } from "express";

const router =  Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Home do painel')
})

router.get('/contatos', (req: Request, res: Response) => {
  res.send('Pagina de contatos do painel')
})

router.get('/noticias', (req: Request, res: Response) => {
  res.send('Pagina de noticias do painel')
})

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Pagina de sobre do painel')
})

export default router