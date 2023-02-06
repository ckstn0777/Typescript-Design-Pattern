// 1. Component (추상구성요소)
export default abstract class Beverage {
  description: string

  getDescription(): string {
    return this.description
  }

  abstract cost(): number
}
