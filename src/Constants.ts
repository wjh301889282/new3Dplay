/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/scene_desk_obj.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/显微镜.jpg", import.meta.url).href,
	new URL("./assets/boards/心脏.jpg", import.meta.url).href,
	new URL("./assets/boards/动物细胞.jpg", import.meta.url).href,
	new URL("./assets/boards/植物细胞.jpg", import.meta.url).href,
	new URL("./assets/boards/玉米种子.jpg", import.meta.url).href,
	new URL("./assets/boards/细菌.jpg", import.meta.url).href,
	new URL("./assets/boards/蝗虫.jpg", import.meta.url).href,
	new URL("./assets/boards/血液.jpg", import.meta.url).href,
	new URL("./assets/boards/鸡蛋.jpg", import.meta.url).href,
	new URL("./assets/boards/鸽子.jpg", import.meta.url).href
];

/*
* Audio Resources
* */
export const AUDIO_URL = new URL("./assets/audio/1.m4a", import.meta.url).href;

/*
* Intro
* */
export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string, htp: string}> = {
	1: {
		title: "显微镜的使用",
		author: "实验1",
		describe: `
		目的要求：<br>
		1、识别显微镜各部分名称和作用<br>
		2、初步学会规范操作显微镜<br>
		3、尝试使用显微镜观察生物玻片标本。<br>
		材料用具：显微镜、擦镜纸、纱布、载玻片、盖玻片<br>
		`,
		htp:"http://127.0.0.1:5173/html/sy7.html"
	},
	2: {
		title: "观察心脏的结构",
		author: "  ",
		describe: `
		目的要求:<br>
		认识心脏的结构，了解心脏的功能。<br>
		材料用具:<br>
		解剖刀，解剖盘，猪或羊的新鲜心脏等。
		`,
		htp:"http://127.0.0.1:5173/html/sy2.html"
	},
	3: {
		title: "观察动植物细胞的结构",
		author: "  ",
		describe: `
		目的要求:<br>
		1、学会制作临时装片,认识细胞的结构。<br>
		2、初步学会画细胞的结构。<br>
		材料用具:<br>
		显微镜、稀碘液、生理盐水、清水、消毒牙签，镊子、滴管、纱布、吸水纸、载玻片、盖玻片、洋葱
		`,
		htp:"https://www.bilibili.com"
	},
	4: {
		title: "观察动植物细胞的结构",
		author: "  ",
		describe: `
		目的要求:<br>
		1、学会制作临时装片,认识细胞的结构。<br>
		2、初步学会画细胞的结构。<br>
		材料用具:<br>
		显微镜、稀碘液、生理盐水、清水、消毒牙签，镊子、滴管、纱布、吸水纸、载玻片、盖玻片、洋葱
		`,
		htp:"https://www.bilibili.com"
	},
	5: {
		title: "观察种子的结构",
		author: "  ",
		describe: `
		目的要求:<br>
		1、学会解剖和观察种子的方法。<br>
		2、认识种子的结构。<br>
		材料用具:<br>
		菜豆、玉米等植物的种子，解剖刀，镊子，放大镜，培养皿等。
		`,
		htp:"https://www.bilibili.com"
	},
	6: {
		title: "观察细菌的形态",
		author: "  ",
		describe: `
		目的要求:<br>
		1、 初步学会使用高倍显微镜。<br>
		2、 通过观察细菌的永久装片，知道细菌的形态特点。<br>
		材料用具:<br>
		显微镜，细菌的永久装片。
		`,
		htp:"http://127.0.0.1:5173/html/sy3.html"
	},
	7: {
		title: "观察蝗虫",
		author: "  ",
		describe: `
		目的要求:<br>
		了解蝗虫的形态特点。<br>
		材料用具:<br>
		蝗虫，放大镜，镊子，解剖盘等。<br>
		`,
		htp:"http://127.0.0.1:5173/html/sy4.html"
	},
	8: {
		title: "观察人血的永久涂片",
		author: "  ",
		describe: `
		目的要求:<br>
		认识红细胞和白细胞。<br>
		材料用具:<br>
		显微镜，人血的永久涂片
		`,
		htp:"http://127.0.0.1:5173/html/sy3.html"
	},
	9: {
		title: "观察鸡蛋的结构",
		author: "  ",
		describe: `
		目的要求:<br>
		认识鸡蛋的结构，知道各部分的组成部分的功能。<br>
		材料用具:<br>
		新鲜鸡蛋，培养皿，镊子。
		`,
		htp:"http://127.0.0.1:5173/html/sy2.html"
	},
	10: {
		title: "观察家鸽",
		author: "  ",
		describe: `
		目的要求:<br>
		了解家鸽与飞行生活适应的形态、结构特点。<br>
		材料用具:<br>
		家鸽、家鸽的骨骼标本等。
		`,
		htp:"http://127.0.0.1:5173/html/sy5.html"
	}
};

/*
* Computer Iframe SRC
* */
export const IFRAME_SRC = new URL("/universe/lab1.html", import.meta.url).href;

/*
* Events
* */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
