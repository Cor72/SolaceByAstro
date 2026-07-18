<template>
  <div class="live2d-wrapper" v-show="visible">
    <canvas ref="liveCanvas"></canvas>
  </div>
  <!-- 切换按钮：始终可见 -->
  <div class="live2d-toggle" @click="toggle">
    <span>{{ visible ? '隐藏' : '显示' }}</span>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import * as PIXI from 'pixi.js'
import { Live2DModel } from 'pixi-live2d-display/cubism4'

window.PIXI = PIXI

const liveCanvas = ref(null)
const visible = ref(true)
let app = null
let model = null

// 可用表情列表（对应 model3.json 中的 Expressions）
const expressions = ['smile', 'squint', 'tears', 'teardrop']
let expressionTimer = null

/**
 * 绑定模型交互：拖拽 + 点击触发表情
 */
function bindInteraction(m) {
  m.buttonMode = true

  // 记录 pointerdown 位置，用于区分点击和拖拽
  let startX = 0
  let startY = 0
  let isDragging = false

  m.on('pointerdown', (e) => {
    isDragging = false
    startX = e.data.global.x
    startY = e.data.global.y
    m.dragging = true
    m._pointerX = e.data.global.x - m.x
    m._pointerY = e.data.global.y - m.y
  })

  m.on('pointermove', (e) => {
    if (m.dragging) {
      const dx = e.data.global.x - startX
      const dy = e.data.global.y - startY
      // 移动超过 5px 视为拖拽
      if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        isDragging = false
      }
      m.position.x = e.data.global.x - m._pointerX
      m.position.y = e.data.global.y - m._pointerY
    }
  })

  m.on('pointerup', () => {
    m.dragging = false
    // 没有明显拖拽 → 视为点击 → 触发随机表情
    if (!isDragging) {
      triggerRandomExpression(m)
    }
  })

  m.on('pointerupoutside', () => {
    m.dragging = false
  })
}

/**
 * 触发随机表情，3秒后恢复默认
 */
function triggerRandomExpression(m) {
  // 清除上一次的定时器
  if (expressionTimer) clearTimeout(expressionTimer)

  const name = expressions[Math.floor(Math.random() * expressions.length)]
  m.expression(name)

  // 2秒后恢复默认表情
  expressionTimer = setTimeout(() => {
    m.expression()
  }, 2000)
}

/**
 * 加载模型到 canvas
 */
async function loadModel() {
  const canvas = liveCanvas.value
  if (!canvas) return

  const width = canvas.parentElement.offsetWidth
  const height = canvas.parentElement.offsetHeight

  if (model) {
    app.stage.removeChild(model)
    model.destroy()
    model = null
  }

  try {
    model = await Live2DModel.from('/HeiJiao/yachiyo.model3.json')

    const scale = Math.min(width / model.width, height / model.height) * 0.8
    model.scale.set(scale)
    model.x = (width - model.width * scale) / 2
    model.y = (height - model.height * scale) / 2

    app.stage.addChild(model)
    bindInteraction(model)
  } catch (error) {
    console.error('模型加载失败:', error)
  }
}

/**
 * 切换显隐：隐藏时销毁模型，显示时重新加载
 */
async function toggle() {
  visible.value = !visible.value
  if (visible.value) {
    await nextTick()
    await loadModel()
  } else {
    if (model) {
      app.stage.removeChild(model)
      model.destroy()
      model = null
    }
  }
}

onMounted(async () => {
  const canvas = liveCanvas.value
  if (!canvas) return

  const width = canvas.parentElement.offsetWidth
  const height = canvas.parentElement.offsetHeight

  app = new PIXI.Application({
    view: canvas,
    width: width,
    height: height,
    autoStart: true,
    backgroundAlpha: 0,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
  })

  await loadModel()
})

onUnmounted(() => {
  if (expressionTimer) clearTimeout(expressionTimer)
  model?.destroy()
  app?.destroy(true, { children: true })
})

// const mouthFn = () => {
//   setInterval(() => {
//     let n = Math.random();
//     console.log("随机数0~1控制嘴巴Y轴高度-->", n);
//     model.internalModel.coreModel.setParameterValueById("ParamMouthOpenY", n);
//   }, 100);
// };

</script>

<style scoped>
/* 默认样式：PC 端显示 */
.live2d-wrapper {
  position: fixed;
  bottom: 120px;
  right: 120px;
  width: 600px;
  height: 800px;
  pointer-events: none;
  z-index: 9998;
}

.live2d-wrapper canvas {
  pointer-events: auto;
}

/* 切换按钮 */
.live2d-toggle {
  position: fixed;
  bottom: 45px;
  right: 45px;
  padding: 6px 14px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 182, 193, 0.3);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 9999;
  font-size: 0.85rem;
  color: #ff6b9d;
  transition: all 0.3s;
}

.live2d-toggle:hover {
  background: rgba(255, 182, 193, 0.3);
}

/* 手机端适配 */
@media screen and (max-width: 768px) {
  .live2d-wrapper {
    width: 200px;
    height: 280px;
    bottom: 70px;
    transform: translate(-50%, -50%);
  }

  .live2d-toggle {
    bottom: 20px;
    right: 20px;
    padding: 4px 10px;
    font-size: 0.8rem;
  }
}
</style>
