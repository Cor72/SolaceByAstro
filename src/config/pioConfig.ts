import type { Live2DWidgetConfig } from "../types/pioConfig";

// Live2D 看板娘配置 (使用 pixi-live2d-display)
export const live2dWidgetConfig: Live2DWidgetConfig = {
	// Live2D 看板娘开关
	enable: true,
	// 模型文件路径（model3.json）
	modelPath: "/HeiJiao/yachiyo.model3.json",
	// 可用表情列表（对应 model3.json 中的 Expressions）
	expressions: ["smile", "squint", "tears", "teardrop"],
	// 显示位置：bottom-left 或 bottom-right
	position: "bottom-right" as const,
	// 画布尺寸（px）
	size: { width: 600, height: 800 },
	// 点击触发表情后恢复默认的延迟（ms）
	expressionResetDelay: 2000,
	// 响应式配置
	responsive: {
		// 在移动端隐藏
		hideOnMobile: false,
		// 移动端断点
		mobileBreakpoint: 768,
	},
};
