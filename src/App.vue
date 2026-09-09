<template>
  <div>
    <ElementContainer>
      <ElementText>
        TESZT
      </ElementText>

      <ElementButton>
        <ElementText>CLICK HERE TO ENTER</ElementText>
      </ElementButton>


      <ElementSegmented :segments="2" :percentage="50" />

      <ElementInput placeholder="Please enter your name." v-model="text" />

      <ElementChip>
        <ElementText>
          ELEMENT_CHIP
        </ElementText>
      </ElementChip>
      <ElementChip>
        <ElementText>
          $2,000
        </ElementText>
      </ElementChip>
    </ElementContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ElementButton from './components/ElementButton.vue';
import ElementContainer from './components/ElementContainer.vue';
import ElementInput from './components/ElementInput.vue';
import ElementSegmented from './components/ElementSegmented.vue';
import ElementText from './components/ElementText.vue';
import ElementChip from './components/ElementChip.vue';


const text = ref("")
</script>
