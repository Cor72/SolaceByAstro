// Live2D 看板娘配置 (使用 pixi-live2d-display)
export type Live2DWidgetConfig = {
	enable: true; // 是否启用 Live2D 看板娘
	// 模型文件路径（model3.json）
	modelPath: string;
	// 可用表情列表（对应 model3.json 中的 Expressions）
	expressions?: string[];
	// 显示位置
	position?: "bottom-left" | "bottom-right";
	// 画布尺寸（px）
	size?: { width: number; height: number };
	// 点击触发表情后恢复默认的延迟（ms）
	expressionResetDelay?: number;
	// 响应式配置
	responsive?: {
		hideOnMobile?: false; // 是否在移动端隐藏
		mobileBreakpoint?: number; // 移动端断点，默认 768
	};
};
