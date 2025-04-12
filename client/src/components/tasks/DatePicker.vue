<template>
  <v-text-field
    v-model="formattedDate"
    label="期日"
    readonly
    @click="showDatePicker = true"
  ></v-text-field>

  <v-dialog v-model="showDatePicker">
    <v-date-picker
      v-model="selectedDate"
      @update:model-value="updateDate"
    ></v-date-picker>
  </v-dialog>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Date],
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);

const showDatePicker = ref(false);
const selectedDate = ref(null);

// 日本時間に合わせて日付を調整する関数
const adjustToJST = (date) => {
  if (!date) return null;
  const d = new Date(date);
  // 日本時間に合わせるために9時間を加算
  d.setHours(d.getHours() + 9);
  return d;
};

// 初期値をpropsから設定
if (props.modelValue) {
  selectedDate.value = adjustToJST(props.modelValue);
}

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return selectedDate.value.toLocaleDateString('ja-JP');
});

const updateDate = (date) => {
  if (!date) {
    selectedDate.value = null;
    emit('update:modelValue', null);
  } else {
    const adjustedDate = adjustToJST(date);
    selectedDate.value = adjustedDate;
    emit('update:modelValue', adjustedDate);
  }
  showDatePicker.value = false;
};

watch(
  () => props.modelValue,
  (newValue) => {
    selectedDate.value = adjustToJST(newValue);
  },
);
</script>
