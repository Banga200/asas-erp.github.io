<script setup>
import { ref } from "vue";
import ToolTip from "./ToolTip.vue";
import CheckBox from "../Inputs/CheckBox.vue";
import CheckMark from "~/components/Icons/Inputs/CheckMark.vue";
const { text, rightIcon, color, leftIcon, leftInnerIcon, multi, underline, value, disabled, selected, rightText, leftIconToolTip,leftIconToolTipPosition,leftInnerIconToolTip,leftInnerIconToolTipPosition } =
  defineProps([
    "text",
    "rightIcon",
    "leftIcon",
    'color',
    "leftInnerIcon",
    "rightText",
    "multi",
    "underline",
    "value",
    'disabled',
    'selected',
    "leftIconToolTip",
    "leftIconToolTipPosition",
    "leftInnerIconToolTip",
    "leftInnerIconToolTipPosition",
  ]);
</script>
<template>
  <ul class="item-container" :class="[color,{ underline: !underline  }, { 'disabled': disabled }, {'selected': selected}]">
    <div class="icon" v-if="rightIcon">
        <component :is="rightIcon" />
    </div>
    
    <!-- Text  -->
    <li class="text">{{rightText}}  {{ text }} </li>

    <div class="value" v-if="value">{{ value }}</div>
    <!-- Icons  -->
    <div class="icons">
      <ToolTip :text="leftInnerIconToolTip" :position="leftInnerIconToolTipPosition" v-if="leftInnerIcon">
        <div class="icon">
          <component :is="leftInnerIcon" />
        </div>
      </ToolTip>
      <ToolTip :text="leftIconToolTip" :position="leftIconToolTipPosition" v-if="selected">
        <div class="icon">
          <component :is="selected  ? leftIcon ? leftIcon : CheckMark : undefined" />
        </div> 
      </ToolTip>
      <div class="icon" v-if="multi"> 
        <CheckBox :color="'primary'" :disabled="disabled" />
      </div>
    </div>
  </ul>
</template>
