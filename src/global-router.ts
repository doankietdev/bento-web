import { Url } from "next/dist/shared/lib/router/router";
import { NextRouter } from "next/router";

class GlobalRouter {
  private router?: NextRouter

  public setRouter(router: NextRouter) {
    this.router = router
  }

  public push(url: Url) {
    if (this.router) {
      this.router.push(url)
    } else {
      throw new Error('Router not initialized')
    }
  }

  public replace(url: Url) {
    if (this.router) {
      this.router.replace(url)
    } else {
      throw new Error('Router not initialized')
    }
  }
}

const globalRouter = new GlobalRouter()

export default globalRouter
