import _ from 'lodash'

export enum QuestStrategy {
  ONE_HUNDRED_ADD_AND_SUB = '100_add_sub'
}

// -------------- Quest --------------
type QuestOption = {
  withAnswer?: boolean,
  [key: string]: any
}
export abstract class Quest {
  // ------- 静态方法
  static create (strategy: QuestStrategy, options?: QuestOption) {
    let quest: Quest
    switch (strategy) {
      case QuestStrategy.ONE_HUNDRED_ADD_AND_SUB:
        quest = new QuestOneHundredAddAndSub(options)
        break;
      default:
        throw new Error('Unknown strategy.')
    }
    return quest
  }

  // ------- 实例属性
  protected params: string[] = []
  protected cachedAnswer?: string = undefined
  protected constructor (options?: QuestOption) {
    if (options?.withAnswer) {
      this.cachedAnswer = this.calculateAnswer()
    }
  }
  // ------- 实例方法
  get parameterLength () { return this.params.length }
  getParameter (index: number) {
    if (index < 0 || index >= this.params.length) {
      throw new Error('out of range.')
    }
    return this.params[index]
  }
  abstract calculateAnswer (): string;
  abstract validateAnswer (answer: string): boolean;
}

export class QuestOneHundredAddAndSub extends Quest {
  constructor (options?: QuestOption) {
    super(options)
    const total = Math.floor(Math.random() * 100)
    const percent = Math.random()
    this.params = [
      `${Math.floor(percent * total)}`,
      `${Math.ceil((1 - percent) * total)}`
    ]
  }
  validateAnswer (answer: string) {
    const str = _.trim(answer)
    this.cachedAnswer = this.cachedAnswer || this.calculateAnswer()
    return str === this.cachedAnswer
  }
  calculateAnswer (): string {
    const [a, b] = this.params
    return `${parseInt(a) + parseInt(b)}`
  }
}

// -------------- Quest Set --------------

type QuestStrategyOption = {
  amount: number
  strategy: QuestStrategy
  options?: QuestOption
}

type QuestSetOptions = {
  strategies: QuestStrategyOption[],
  withAnswer?: boolean
}

export class QuestSet {
  // ------- 静态方法
  /**
   * 创建题目的方法
   * @param strategy
   * @param amount
   */
  static create (opts: QuestSetOptions): QuestSet {
    const quests = [] as Quest[]
    opts.strategies.forEach(one => {
      for (let i = 0; i < one.amount; i++) {
        const quest = Quest.create(one.strategy, _.assign({ withAnswer: opts.withAnswer }, one.options))
        quests.push(quest)
      }
    })
    return new QuestSet('Quest', quests)

  }
  // ------- 实例属性
  public readonly quests: Quest[]
  public readonly name: string
  private constructor (name: string, quests: Quest[]) {
    this.name = name
    this.quests = quests
  }
  // ------- 实例方法
  /**
   * 校对答案
   */
  public validateAnswers(answers: string[]): boolean[] {
    return this.quests.map((one, i) => one.validateAnswer(answers[i]))
  }
}
