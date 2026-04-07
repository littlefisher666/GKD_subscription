// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'com.github.android', // GitHub
  'org.telegram.messenger', // Telegram
  'com.twitter.android', // X(推特)
  'moe.shizuku.privileged.api', // Shizuku
  'com.alibaba.aliyun', // 阿里云
  'com.alicloud.databox', // 阿里云盘
  'com.android.chrome', // Chrome
  'com.google.android.youtube', // YouTube
  'com.xunmeng.pinduoduo', // 拼多多

  // 系统自带非系统应用
  'com.google.android.contactkeys', // Android System Key Verifier
  'com.google.android.safetycore', // Android System SafetyCore
];

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.sankuai.meituan', // 美团 误触 https://i.gkd.li/i/17827264
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,

  // 全局规则默认不匹配系统应用，但有的用户喜欢无脑开启规则，容易造成误触，故在此手动禁用
  'com.android.packageinstaller', // 软件包安装程序
  'com.google.android.packageinstaller', // 软件包安装程序
  'com.oplus.appdetail', // 应用安装器
  'com.samsung.android.packageinstaller', // 软件包安装程序

  //-----------------------------------------------------

  'com.jingdong.app.mall', // 京东
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.netease.cloudmusic', // 网易云音乐 全局规则在 https://i.gkd.li/i/14931708 误触
  'com.zhihu.android', // 知乎 全局规则在 https://i.gkd.li/i/14964990 误触
  'com.baidu.tieba', // 百度贴吧
  'com.autonavi.minimap', // 高德地图
  'com.baidu.netdisk', // 百度网盘
  'com.jingdong.app.mall', // 京东
  'com.max.xiaoheihe', // 小黑盒
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sdu.didi.psnger', // 滴滴出行
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.alibaba.android.rimet', // 钉钉
  'com.taobao.taobao', // 淘宝
  'com.xingin.xhs', // 小红书
  'com.ct.client', // 中国电信
  'me.ele', // 饿了么
  'com.tencent.qqmusic', // QQ音乐
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
