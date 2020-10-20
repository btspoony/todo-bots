<template>
  <div>
    <el-row
      v-if="currentQuestSet"
      gutter="12"
    >
      <el-col
        span="12"
        class="mb-1 pb-1 quest-item"
        v-for="(quest, i) of currentQuests"
        :key="currentQuestSet.name + '_quest_' + i"
      >
        <el-row>
          <el-col span="4" offset="2">
            <h2>{{ quest.getParameter(0) }}</h2>
          </el-col>
          <el-col span="4">
            +
          </el-col>
          <el-col span="4">
            <h2>{{ quest.getParameter(1) }}</h2>
          </el-col>
          <el-col span="4">
            =
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row gutter="12">
      <el-col span="20" offset="2">
        <el-form :inline="true" :model="formData">
          <el-form-item label="题目数量">
            <el-input-number v-model="formData.amount" placeholder="题目数量" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onGenerate">生成</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { QuestSet, QuestStrategy, QuestOneHundredAddAndSub } from '~/types'

@Component
export default class QuestOneHundredPageComponent extends Vue {
  formData = { amount: 100 }
  // ---- Computed --
  get currentQuestSet () {
    return this.$store.getters['math/currentQuestSet'] as QuestSet
  }
  get currentQuests () {
    return !this.currentQuestSet ? [] : this.currentQuestSet.quests as QuestOneHundredAddAndSub[]
  }
  // NOTHING
  // ---- Hooks --
  async mounted () {
    // NOTHING
  }
  // ------ Methods ---
  async onGenerate () {
    const amount = this.formData.amount
    this.$store.dispatch('math/buildQuests', { strategy: QuestStrategy.ONE_HUNDRED_ADD_AND_SUB, amount })
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/mixins';

.quest-item {
  @include horizontal-line;
}
</style>
