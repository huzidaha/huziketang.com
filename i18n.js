let fs = require('fs')

let src = process.argv[2]
let dest = process.argv[3]

fs.writeFileSync(
  dest,
  fs.readFileSync(src, 'utf-8')
    .replace(
      /2017 Code School LLC. Crafted lovingly in Orlando, Florida./ig,
      '深圳市云彦腾科技有限责任公司'
    )
    .replace(
      /Learn more/ig,
      '了解更多'
    )
    .replace(
      /Discover how .NET can[\s\S]+?applications./ig,
      '数据驱动的 web 界面的渐进式框架。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。'
    )
    .replace(
      /ANGULAR_JS_DESCRIPTION/ig,
      'AngularJS 是一款来自 Google 的前端 JavaScript 框架，简化了前端开发的负担，来帮助开发者从事web 开发。'
    )
    .replace(
      /Dig into one of[\s\S]+?web./ig,
      '最流行的 Web 开发语言，很多网站采用 PHP 来进行搭建。掌握 PHP 让你可以建设多样的网站应用。'
    )
    .replace(
      /Explore what[\s\S]+?the[\s\S]+?Python./ig,
      '万能的胶水语言，几乎每个领域都会有 Python 的一席之地。人工智能、机器学习、Web 开发...'
    )
    .replace(
      /Experienced, engaging instructors[\s\S]+?video lessons./ig,
      '提供高质量的视频教程和教学内容。实战经验丰富的讲师带领你一步一步由浅入深地进行学习，打造扎实的基础。'
    )
    .replace(
      /LLC. Crafted lovingly in Orlando, Florida./ig,
      ''
    )
    .replace(
      /teaches web[\s\S]+?We strive to help you learn by doing./ig,
      ''
    )
    .replace(
      /Rack up points in the[\s\S]+?completion badge./ig,
      '每一次编程挑战你都会获得相应的成就和徽章，你可以通过它们来评估自己目前的水平并且做相应的学习和调整。'
    )
    .replace(
      /Build a solid foundation[\s\S]+?GitHub./ig,
      'Git 是一个开源的分布式版本控制系统，可以有效、高速的处理从很小到非常大的项目版本管理。掌握 Git 可以让你学会如何进行多人协作开发。'
    )
    .replace(
      /Code directly [\s\S]+?and code validation./ig,
      '全国首创的 Web 开发在线评测系统，你可以在浏览器中编写代码，获得即时的反馈。大量的测试用例保证你的代码符合实战标准，打造严密开发者思维。'
    )
    .replace(
      /Try building i[\s\S]+?life./ig,
      'RxJS 是一个强大的 Reactive 响应式编程库，提供了强大的数据流组合与控制能力。'
    )
    .replace(
      /href="https:\/\/www.codeschool.com[\s\S]+?"/ig,
      ''
    )
    .replace(
      /Keep track of all [\s\S]+port Card./ig,
      '我们会根据你的学习的内容、获得的成就、徽章来对你进行综合评价和分析。并且据此给你制定更加合适的学习方案。'
    )
    .replace(
      /Beginner[\s\S]+?Development/ig,
      'Web 开发者入门指南'
    )
    .replace(
      /Read the guide/ig,
      '阅读指南'
    )
    .replace(
      /Our guide[\s\S]+your goals./,
      '胡子课堂探索出了一条从初学者到中高级开发者的行之有效的最佳实践，马上阅读 Web 开发者入门指南，给你指明正确的方向。'
    )
    .replace(/for business/ig, '商业合作')
    .replace(/need help/ig, '寻求帮助')
    .replace(/Learn to code by doing/ig, '在实践中学习编程')
    .replace(/How Code School Works/ig, '胡子课堂如何打造专业开发者？')
    .replace(/Join the Crowd/ig, '加入讲师团队')
    .replace(/code school/ig, '胡子课堂')
    .replace(/contact us/ig, '联系我们')
    .replace(/terms of use/ig, '使用须知')
    .replace(/privacy policy/ig, '隐私策略')
    .replace(/knowledge base/ig, '知识库')
    .replace(/forum/ig, '论坛')
    .replace(/support/ig, '支持')
    .replace(/pricing/ig, '价格')
    .replace(/business/ig, '商业合作')
    .replace(/Practice/ig, '大量实战')
    .replace(/Win/ig, '收获成就')
    .replace(/about us/ig, '关于我们')
    .replace(/Track/ig, '成效追踪')
    .replace(/screencasts/ig, '视频')
    .replace(/company/ig, '公司')
    .replace(/press/ig, '媒体报道')
    .replace(/jobs/ig, '招聘')
    .replace(/courses/ig, '课程'),
  'utf-8'
)
