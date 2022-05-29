<template>
  <div>
    <el-row v-if="currentQuestSet" :gutter="12">
      <el-col v-for="(quest, i) of currentQuests" :key="currentQuestSet.name + '_quest_' + i" :span="12"
        class="mb-4-1 pb-4-1 quest-item">
        <el-row>
          <el-col :span="4" :offset="2">
            <h3>{{ quest.getParameter(0) }}</h3>
          </el-col>
          <el-col :span="4">
            <h3>{{ quest.getParameter(2) }}</h3>
          </el-col>
          <el-col :span="4">
            <h3>{{ quest.getParameter(1) }}</h3>
          </el-col>
          <el-col :span="4"> = </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="20" :offset="2">
        <el-form :inline="true" :model="formData">
          <el-form-item label="加和上限">
            <el-input-number v-model="formData.max" :min="1" :max="1e8" placeholder="加和上限" />
          </el-form-item>
          <el-form-item label="题目数量">
            <el-input-number v-model="formData.amount" :min="1" :max="1e3" placeholder="题目数量" />
          </el-form-item>
          <el-form-item label="仅加法">
            <el-switch v-model="formData.onlyAdd" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onGenerate">生成</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { QuestSet, QuestStrategy } from "~/types";

const formData = reactive({ amount: 100, max: 100, onlyAdd: false });

const currentQuestSet = useState<QuestSet>("currentQuestSet", () => ref(null));

const currentQuests = computed(() => {
  return currentQuestSet.value.quests;
});

// ------ Methods ---
function onGenerate() {
  // TODO
  // const amount = this.formData.amount;
  // this.$store.dispatch("math/buildQuests", {
  //   strategy: QuestStrategy.ADD_AND_SUB,
  //   amount,
  //   options: { max: this.formData.max, onlyAdd: this.formData.onlyAdd },
  // });
}
</script>
