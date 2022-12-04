import { FastifyInstance } from 'fastify'
import { KeycloakOptions } from '../src/keycloak'
import { startFastify } from './server'
import { describe, beforeAll, afterAll, it, expect } from 'vitest'

describe('Error behavior', () => {
  let server: FastifyInstance

  beforeAll(async () => {})

  afterAll(async () => {})

  it.fails('should error, when given an invalid appOrigin', async () => {
    const keycloakOptions: KeycloakOptions = {
      appOrigin: 'localhost:8888',
      keycloakSubdomain: `localhost:8080/auth/realms/demo`,
      clientId: 'client01',
      clientSecret: 'client01secret'
    }

    server = await startFastify(8888, keycloakOptions)
    await server.ready()
  })

  it.fails('should error, when given an invalid keycloakSubdomain', async () => {
    const keycloakOptions: KeycloakOptions = {
      appOrigin: 'http://localhost:8888',
      keycloakSubdomain: `localhost:8080/auth/realms/demo/`,
      clientId: 'client01',
      clientSecret: 'client01secret'
    }

    server = await startFastify(8888, keycloakOptions)
    await server.ready()
  })
})