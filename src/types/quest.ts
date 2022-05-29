import _ from 'lodash'

export enum QuestStrategy {
  ADD_AND_SUB = 'add_sub'
}

// -------------- Quest --------------
interface QuestOption {
  withAnswer?: boolean
  [key: string]: any
}
export abstract class Quest {
  // ------- 静态方法
  static create (strategy: QuestStrategy, options?: QuestOption) {
    let quest: Quest
    switch (strategy) {
      case QuestStrategy.ADD_AND_SUB:
        quest = new QuestAddAndSub(options as QuestAddAndSubOption)
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
    // NOTHING
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

interface QuestAddAndSubOption extends QuestOption {
  max: number
  onlyAdd: boolean
}

export class QuestAddAndSub extends Quest {
  private readonly operator: string
  constructor (options?: QuestAddAndSubOption) {
    super(options)

    const onlyAdd = options?.onlyAdd || false
    const max = options?.max || 100
    const total = Math.floor(Math.random() * max)
    const percent = Math.random()
    // 加法还是减法
    const params = [] as string[]
    if (onlyAdd || Math.random() > 0.5) {
      // 加法
      params[0] = `${Math.floor(percent * total)}`
      params[1] = `${Math.ceil((1 - percent) * total)}`
      this.operator = params[2] = '+'
    } else {
      // 减法
      params[0] = `${total}`
      params[1] = `${Math.floor(percent * total)}`
      this.operator = params[2] = '-'
    }
    this.params = params
  }
  validateAnswer (answer: string) {
    const str = _.trim(answer)
    this.cachedAnswer = this.cachedAnswer || this.calculateAnswer()
    return str === this.cachedAnswer
  }
  calculateAnswer (): string {
    const [a, b] = this.params
    switch (this.operator) {
      case '+':
        return `${parseInt(a) + parseInt(b)}`
      case '-':
        return `${parseInt(a) - parseInt(b)}`
      default:
        throw new Error("Unknown operator");
    }
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
