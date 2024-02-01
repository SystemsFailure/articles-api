import { defineConfig } from '@adonisjs/cors'

// interface DomensListType {
//   [key: string]: string,
// }
const domensList: Array<string> = [
  "http://localhost:8000"
]
/**
 * Configuration options to tweak the CORS policy. The following
 * options are documented on the official documentation website.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
const corsConfig = defineConfig({
  enabled: true,
  // Через этот параметр можно указать список доменов, которые мы проверяем через функцию
  origin: (requestOrigin, _) => {
    let result: boolean = false
    domensList.forEach((domens: string) => {
      if (requestOrigin.includes(domens)) {
        result = true
      }
    })
    return result
  },
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: (headers, _) => {
    return true
  },
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig
