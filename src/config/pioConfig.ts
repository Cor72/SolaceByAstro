import type { Live2DWidgetConfig } from "../types/pioConfig";

// Live2D 看板娘配置 (使用 pixi-live2d-display)
export const live2dWidgetConfig: Live2DWidgetConfig = {
	// Live2D 看板娘开关
	enable: true,
	// 模型文件路径（model3.json）
	modelPath: "/HeiJiao/yachiyo.model3.json",
	// 可用表情列表（对应 model3.json 中的 Expressions）
};
