import express, { json } from 'express'

export function createRouter() {
  const router = express()
  router.use(json())
  return router
}
