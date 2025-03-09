<template>
  <v-sheet class="my-2 mx-5">
    <v-text-field
      v-model="formData.title"
      label="タイトル*"
      required
    ></v-text-field>

    <v-textarea v-model="formData.description" label="詳細"></v-textarea>

    <date-picker v-model="formData.dueDate"></date-picker>

    <v-select
      v-model="formData.status"
      :items="statusList"
      label="ステータス*"
      required
    ></v-select>

    <div class="d-flex justify-end my-2">
      <v-btn
        class="mx-2 text-capitalize"
        :color="submitColor"
        @click="emit('submit', formData)"
      >
        {{ submitText }}
      </v-btn>
      <v-btn
        class="mx-2 text-capitalize"
        variant="outlined"
        @click="emit('cancel')"
      >
        キャンセル
      </v-btn>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref } from 'vue';
import DatePicker from '@/components/DatePicker.vue';

const props = defineProps({
  initialData: {
    type: Object,
    required: true,
  },
  statusList: {
    type: Array,
    required: true,
  },
  submitText: {
    type: String,
    default: '作成',
  },
  submitColor: {
    type: String,
    default: 'primary',
  },
});

const emit = defineEmits(['submit', 'cancel']);

const formData = ref({ ...props.initialData });
</script>
