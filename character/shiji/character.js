const characters = {
	liuba: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["duanbi", "tongduo"],
	},
	sp_zhujun: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["xinyangjie", "xinjuxiang", "houfeng"],
	},
	sp_huangfusong: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spzhengjun", "spshiji", "sptaoluan"],
		names: "皇甫|嵩",
	},
	sp_lvfan: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["mbdiaodu", "mbdiancai", "spyanji"],
	},
	sp_jiangqing: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["spjianyi", "spshangyi"],
	},
	sp_jiangwan: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["spzhenting", "spjincui"],
	},
	sp_zhangchangpu: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["spdifei", "spyanjiao"],
	},
	sp_cuiyan: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["spyajun", "spzundi"],
	},
	sp_huaman: {
		sex: "female",
		group: "shu",
		hp: 4,
		skills: ["spxiangzhen", "spfangzong", "spxizhan"],
		names: "孟|null",
	},
	sp_gaolan: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spjungong", "spdengli"],
	},
	sunyi: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["zaoli"],
	},
	sp_wangshuang: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["yiyong", "shanxie"],
	},
	sp_zongyu: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["zhibian", "yuyan"],
	},
	yuanhuan: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["qingjue", "fengjie"],
	},
	sp_chendong: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["spyilie", "spfenming"],
		names: "陈|武-董|袭",
	},
	db_wenyang: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["dbquedi", "dbzhuifeng", "dbchongjian", "dbchoujue"],
		doubleGroup: ["wei", "wu"],
	},
	sp_yanghu: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["mingfa", "rongbei"],
		groupBorder: "jin",
	},
	qiaogong: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["yizhu", "luanchou"],
		names: "桥|null",
	},
	liuzhang: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jutu", "yaohu", "rehuaibi"],
		isZhugong: true,
	},
	sp_zhangwen: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["gebo", "spsongshu"],
	},
	zhangzhongjing: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["jishi", "xinliaoyi", "binglun"],
	},
	sp_xujing: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["boming", "ejian"],
	},
	sp_huaxin: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["yuanqing", "shuchen"],
	},
	xiangchong: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["guying", "muzhen"],
	},
	caizhenji: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["sheyi", "tianyin"],
		names: "蔡|null",
	},
	sp_kongrong: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["xinlirang", "xinmingshi"],
	},
	zhouchu: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["xianghai", "rechuhai"],
	},
	wangfuzhaolei: {
		sex: "male",
		group: "shu",
		hp: 4,
		skills: ["xunyi"],
		names: "王|甫-赵|累",
	},
	wangling: {
		sex: "male",
		group: "wei",
		hp: 4,
		skills: ["xingqi", "xinzifu", "mibei"],
		clans: ["太原王氏"],
	},
	wujing: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["heji", "liubing"],
	},
	sp_mifuren: {
		sex: "female",
		group: "shu",
		hp: 3,
		skills: ["xinguixiu", "qingyu"],
		names: "糜|null",
	},
	sp_xinpi: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["spyinju", "spchijie"],
	},
	feiyi: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["mjshengxi", "fyjianyu"],
	},
	sp_bianfuren: {
		sex: "female",
		group: "wei",
		hp: 3,
		skills: ["spwanwei", "spyuejian"],
		names: "卞|null",
	},
	sp_duyu: {
		sex: "male",
		group: "qun",
		hp: 4,
		skills: ["spwuku", "spsanchen"],
		groupBorder: "jin",
	},
	luotong: {
		sex: "male",
		group: "wu",
		hp: 4,
		skills: ["qinzheng"],
	},
	sp_wangcan: {
		sex: "male",
		group: "wei",
		hp: 3,
		skills: ["spqiai", "spshanxi"],
	},
	sp_chenzhen: {
		sex: "male",
		group: "shu",
		hp: 3,
		skills: ["shameng"],
	},
	sp_sunshao: {
		sex: "male",
		group: "wu",
		hp: 3,
		skills: ["mjdingyi", "mjzuici", "mjfubi"],
	},
	sp_xunchen: {
		sex: "male",
		group: "qun",
		hp: 3,
		skills: ["mjweipo", "mjchenshi", "mjmouzhi"],
		clans: ["颍川荀氏"],
	},
};

export default characters;
