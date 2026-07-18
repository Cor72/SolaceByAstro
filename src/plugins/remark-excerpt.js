/**
 * 递归提取 AST 节点的纯文本，跳过图片的 alt text
 * toString() 会把图片 alt text 也带上，导致显示 "image-xxx" 这种内容
 */
function nodeToText(node) {
	if (node.type === "text") return node.value;
	if (node.type === "image" || node.type === "imageReference") return "";
	if (node.value && !node.children) return node.value;
	if (!node.children) return "";
	return node.children.map(nodeToText).join("");
}

export function remarkExcerpt() {
	return (tree, { data }) => {
		const MAX_LENGTH = 250;
		let excerpt = "";

		for (const node of tree.children) {
			let nodeText = "";

			if (node.type === "paragraph" || node.type === "heading" || node.type === "list") {
				nodeText = nodeToText(node).trim();
			} else if (node.type === "code") {
				nodeText = (node.value || "").trim().replace(/\s+/g, " ");
			}

			if (nodeText) {
				excerpt += (excerpt ? " " : "") + nodeText;
			}

			if (excerpt.length >= MAX_LENGTH) break;
		}

		data.astro.frontmatter.excerpt = excerpt;
	};
}