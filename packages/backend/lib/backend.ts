import express from 'express'
import http from 'http'
import { createRouter } from './api';

const port = 80

export function backend() {
  return 'Hello from backend';
}

async function startServer() {
  const router = createRouter()
  addStaticFileRouting(router)
  const server = http.createServer(router)
  server.listen(port, () => {
    console.log(`Server started. Listening on port ${port}`)
  })
}

function addStaticFileRouting(router: express.Express) {
  // Routing is handled by the frontend.
  // This allows React to handle route changes correctly.
  router.use(express.static('public'))
  router.use('*', express.static('public'))
}

void startServer()
