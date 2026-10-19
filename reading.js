// ข้อสอบ Reading แบบ IELTS · t: tfng | mcq | para | gap
// tfng: a = 'TRUE' | 'FALSE' | 'NOT GIVEN' · mcq: a = index ของ o · para: a = 'A'..'E' · gap: a = [คำตอบที่ยอมรับ]
// ⚠️ เรียงคำถามตามชนิด (tfng → mcq → para → gap) เพื่อให้หัวคำสั่งแสดงถูกต้อง
const READINGS = [
  { id: "r1", level: "ielts-5.0", band: "4.5–5.0", emoji: "🌱", minutes: 15, title: "The Rise of Urban Gardens",
    paras: [
      `In many cities around the world, people are growing food in unusual places. Vegetables now grow on rooftops, balconies and even in old car parks. These spaces are called urban gardens, and their number has increased quickly over the last twenty years.`,
      `There are several reasons for this trend. First, food prices in cities are often high, so growing vegetables at home can save money. Second, many people want to know where their food comes from. When you grow your own tomatoes, you know that no harmful chemicals were used. Third, gardening is a relaxing hobby. Doctors say that spending time with plants can reduce stress.`,
      `Urban gardens also help the environment. Plants take in carbon dioxide and make the air cleaner. Rooftop gardens can keep buildings cool in summer, so people use less electricity for air conditioning. In addition, food that is grown locally does not need to be transported long distances by truck.`,
      `However, urban gardening is not always easy. Space is limited, and some city soil contains pollution from old factories. For this reason, many gardeners grow plants in boxes filled with clean soil brought from outside the city. Water can also be a problem, especially in hot, dry months.`,
      `Some city governments now support urban gardens. In some cities, the government gives free seeds to residents who want to start a garden. Other cities offer classes where people can learn basic gardening skills. Experts believe that in the future, urban gardens will become a normal part of city life.`
    ],
    questions: [
      { t: "tfng", q: "The number of urban gardens has grown over the last twenty years.", a: "TRUE", ex: "ย่อหน้า A: “their number has increased quickly over the last twenty years”" },
      { t: "tfng", q: "Most urban gardeners are retired people.", a: "NOT GIVEN", ex: "บทความไม่ได้พูดถึงอายุหรืออาชีพของคนปลูกผักเลย" },
      { t: "tfng", q: "Rooftop gardens make buildings warmer in summer.", a: "FALSE", ex: "ย่อหน้า C: rooftop gardens “keep buildings cool” แปลว่าทำให้เย็นลง ไม่ใช่ร้อนขึ้น" },
      { t: "mcq", q: "According to paragraph B, why do many people want to grow their own food?", o: ["to sell it at local markets", "to know how their food was grown", "to win gardening competitions", "because shops do not sell vegetables"], a: 1, ex: "ย่อหน้า B: “many people want to know where their food comes from”" },
      { t: "mcq", q: "What problem with city soil does the writer mention?", o: ["It is too wet.", "It is too expensive.", "It may contain pollution.", "It is too hard to dig."], a: 2, ex: "ย่อหน้า D: “some city soil contains pollution from old factories”" },
      { t: "para", q: "help that city governments give to gardeners", a: "E", ex: "ย่อหน้า E: “Some city governments now support urban gardens…”" },
      { t: "gap", q: "Many gardeners use boxes filled with clean ______ from outside the city.", a: ["soil"], ex: "ย่อหน้า D: “boxes filled with clean soil brought from outside the city”" },
      { t: "gap", q: "Doctors say that spending time with plants can reduce ______.", a: ["stress"], ex: "ย่อหน้า B: “can reduce stress”" }
    ]
  },
  { id: "r2", level: "ielts-5.5", band: "5.5", emoji: "😴", minutes: 20, title: "Why Teenagers Need More Sleep",
    paras: [
      `Most adults need about seven to nine hours of sleep each night, but teenagers need even more – around eight to ten hours. Yet surveys in many countries show that a large proportion of teenagers sleep far less than this, especially on school nights.`,
      `One reason is biological. During adolescence, the body releases melatonin, the hormone that makes us feel sleepy, later in the evening than it does in children or adults. As a result, many teenagers do not feel tired until eleven o’clock or later. However, they still have to wake up early for school.`,
      `Technology also plays a role. Many young people use phones or computers in bed. The light from screens can delay sleep, and messages or videos keep the brain active. Some researchers suggest that teenagers should stop using screens at least one hour before bedtime.`,
      `A lack of sleep can have serious effects. Tired students find it harder to concentrate and remember new information, so their grades may fall. Poor sleep is also linked to bad moods, and teenage drivers who are tired are more likely to have accidents.`,
      `Some schools have tried a simple solution: starting the school day later. In several schools that moved their start time from around 7:30 to after 8:30, students slept longer and attendance improved. Critics argue that a later start creates problems for working parents and for after-school sports. Still, many sleep experts believe the benefits are worth the cost.`
    ],
    questions: [
      { t: "tfng", q: "Teenagers need more sleep than adults.", a: "TRUE", ex: "ย่อหน้า A: ผู้ใหญ่ต้องการ 7–9 ชั่วโมง ส่วนวัยรุ่นต้องการ “even more” คือ 8–10 ชั่วโมง" },
      { t: "tfng", q: "Teenagers’ bodies release melatonin earlier in the evening than children’s bodies do.", a: "FALSE", ex: "ย่อหน้า B: บอกว่าหลั่ง “later” (ช้ากว่า) ไม่ใช่เร็วกว่า" },
      { t: "tfng", q: "Girls usually need more sleep than boys.", a: "NOT GIVEN", ex: "บทความไม่ได้เปรียบเทียบเพศชายกับหญิงเลย" },
      { t: "mcq", q: "What do some researchers suggest?", o: ["Teenagers should sleep with the lights on.", "Teenagers should go to bed at eleven o’clock.", "Teenagers should stop using screens an hour before bed.", "Teenagers should only use phones for messages."], a: 2, ex: "ย่อหน้า C: “stop using screens at least one hour before bedtime”" },
      { t: "mcq", q: "Which effect of poor sleep is NOT mentioned?", o: ["lower grades", "bad moods", "weight gain", "road accidents"], a: 2, ex: "ย่อหน้า D พูดถึงเกรด อารมณ์ และอุบัติเหตุ แต่ไม่ได้พูดเรื่องน้ำหนัก" },
      { t: "para", q: "a change that some schools have made", a: "E", ex: "ย่อหน้า E: บางโรงเรียนเปลี่ยนให้เข้าเรียนสายขึ้น" },
      { t: "para", q: "a natural reason why teenagers go to sleep late", a: "B", ex: "ย่อหน้า B: “One reason is biological…” (ฮอร์โมนเมลาโทนิน)" },
      { t: "gap", q: "When some schools started later, students slept longer and ______ improved.", a: ["attendance"], ex: "ย่อหน้า E: “students slept longer and attendance improved”" }
    ]
  },
  { id: "r3", level: "ielts-6.0", band: "6.0", emoji: "🚲", minutes: 20, title: "The Return of the Bicycle",
    paras: [
      `In the 1950s and 1960s, many cities around the world redesigned their streets for cars. Bicycles, once a common way to travel, were increasingly seen as old-fashioned. In recent decades, however, the bicycle has made a remarkable comeback in urban areas.`,
      `Copenhagen and Amsterdam are often cited as models. In both cities, a substantial proportion of residents cycle to work or school. This did not happen by chance. During the 1970s, a combination of rising oil prices and public concern about road safety encouraged both cities to invest in separate cycle lanes, bicycle parking and traffic lights designed for cyclists.`,
      `The benefits of cycling are well documented. Cyclists get regular exercise, which reduces the risk of heart disease. Bicycles produce no emissions and take up far less space than cars, so a city with more cyclists tends to have less congestion. For local governments, building a cycle lane is also considerably cheaper than building a new road.`,
      `Nevertheless, persuading people to cycle is not straightforward. Surveys consistently show that the main reason people avoid cycling is fear of traffic, not distance or weather. For this reason, experts emphasise that painted lines on a busy road are not sufficient; cyclists need lanes that are physically separated from cars.`,
      `Bike-sharing schemes have also contributed to the trend. Users can unlock a bicycle with a smartphone app, ride it across the city and leave it at another station. Some schemes now offer electric bicycles, which make hills and longer journeys easier. Critics point out, though, that poorly managed schemes can leave broken bicycles scattered on pavements.`
    ],
    questions: [
      { t: "tfng", q: "In the 1950s and 1960s, many people considered bicycles to be outdated.", a: "TRUE", ex: "ย่อหน้า A: “were increasingly seen as old-fashioned” (old-fashioned = outdated)" },
      { t: "tfng", q: "Copenhagen began investing in cycling before Amsterdam did.", a: "NOT GIVEN", ex: "ย่อหน้า B บอกแค่ว่าทั้งสองเมืองเริ่มในช่วงทศวรรษ 1970 ไม่ได้บอกว่าเมืองไหนเริ่มก่อน" },
      { t: "tfng", q: "Surveys show that bad weather is the main reason people do not cycle.", a: "FALSE", ex: "ย่อหน้า D: เหตุผลหลักคือ “fear of traffic, not distance or weather”" },
      { t: "mcq", q: "What encouraged both cities to invest in cycling in the 1970s?", o: ["a new national law", "rising oil prices and concern about road safety", "a fall in the number of cars", "pressure from bicycle companies"], a: 1, ex: "ย่อหน้า B: “rising oil prices and public concern about road safety”" },
      { t: "mcq", q: "What do experts say about lanes that are only painted on busy roads?", o: ["They are the cheapest option.", "They cause more congestion.", "They do not give cyclists enough protection.", "They work well in bad weather."], a: 2, ex: "ย่อหน้า D: เส้นทาสีบนถนน “are not sufficient” ผู้ปั่นต้องการเลนที่แยกจากรถจริง ๆ" },
      { t: "para", q: "a way in which cycling saves money for local governments", a: "C", ex: "ย่อหน้า C: “building a cycle lane is also considerably cheaper than building a new road”" },
      { t: "gap", q: "Some bike-sharing schemes now offer ______, which make hills easier.", a: ["electric bicycles"], ex: "ย่อหน้า E: “Some schemes now offer electric bicycles”" },
      { t: "gap", q: "Badly managed schemes can leave broken bicycles scattered on ______.", a: ["pavements"], ex: "ย่อหน้า E: “scattered on pavements”" }
    ]
  },
  { id: "r4", level: "ielts-6.5", band: "6.5", emoji: "🧠", minutes: 20, title: "Why We Forget – and How to Remember",
    paras: [
      `In the 1880s, the German psychologist Hermann Ebbinghaus carried out a series of experiments on himself. He memorised lists of meaningless syllables, such as “WID” and “ZOF”, and then tested how many he could recall after different periods of time. His results produced what is now known as the “forgetting curve”.`,
      `The curve shows that memory loss is most rapid immediately after learning. Ebbinghaus found that a large share of new information was forgotten within the first day, after which the rate of forgetting slowed considerably. Although later researchers have questioned some of his methods – he was, after all, his only participant – the general shape of the curve has been confirmed many times.`,
      `Ebbinghaus also discovered a way to slow forgetting. Each time he reviewed a list, he needed less time to relearn it, and the information stayed in his memory for longer. This principle forms the basis of a technique called spaced repetition, in which learners review material at gradually increasing intervals: for example, after one day, then three days, then a week.`,
      `Modern applications have made spaced repetition widely accessible. Many language-learning apps track which words a user finds difficult and schedule them to reappear just before they are likely to be forgotten. Words that are answered correctly are shown less often, allowing learners to focus their limited time on the vocabulary that needs it most.`,
      `Another powerful strategy is known as retrieval practice. Rather than simply rereading notes, learners test themselves by trying to recall information from memory. Studies suggest that the effort involved in retrieval strengthens memory more effectively than passive review, even when learners feel that rereading is more productive.`
    ],
    questions: [
      { t: "tfng", q: "Ebbinghaus used meaningful words in his experiments.", a: "FALSE", ex: "ย่อหน้า A: เขาใช้ “meaningless syllables” (พยางค์ไร้ความหมาย)" },
      { t: "tfng", q: "Forgetting happens fastest soon after learning.", a: "TRUE", ex: "ย่อหน้า B: “memory loss is most rapid immediately after learning”" },
      { t: "tfng", q: "Ebbinghaus’s experiments were paid for by a German university.", a: "NOT GIVEN", ex: "บทความไม่ได้พูดถึงทุนวิจัยหรือมหาวิทยาลัยเลย" },
      { t: "mcq", q: "What criticism of Ebbinghaus’s research is mentioned?", o: ["His word lists were too long.", "He was the only participant.", "He never wrote down his results.", "His tests were too short."], a: 1, ex: "ย่อหน้า B: “he was, after all, his only participant”" },
      { t: "mcq", q: "In spaced repetition, the time between reviews…", o: ["stays the same.", "gets shorter.", "gets longer.", "depends on the time of day."], a: 2, ex: "ย่อหน้า C: “at gradually increasing intervals” (1 วัน → 3 วัน → 1 สัปดาห์)" },
      { t: "mcq", q: "According to paragraph E, learners often feel that…", o: ["rereading is more productive than testing themselves.", "testing is too difficult.", "retrieval practice saves time.", "notes are unnecessary."], a: 0, ex: "ย่อหน้า E: “even when learners feel that rereading is more productive”" },
      { t: "para", q: "how modern technology uses Ebbinghaus’s findings", a: "D", ex: "ย่อหน้า D: “Many language-learning apps track which words…”" },
      { t: "gap", q: "The pattern that Ebbinghaus discovered is known as the forgetting ______.", a: ["curve"], ex: "ย่อหน้า A: “the forgetting curve”" }
    ]
  },
  { id: "r5", level: "ielts-7.0", band: "7.0", emoji: "👗", minutes: 20, title: "The Hidden Cost of Fast Fashion",
    paras: [
      `Over the past three decades, the clothing industry has undergone a profound transformation. Retailers that once released two or four collections a year now introduce new designs every few weeks, a business model commonly referred to as “fast fashion”. By relying on low-cost manufacturing and highly efficient supply chains, these companies can move a garment from design sketch to shop floor in a matter of weeks.`,
      `For consumers, the appeal is obvious: fashionable clothing at prices that make frequent purchases affordable. Some estimates suggest that the average consumer now buys considerably more clothing than in the past, yet keeps each item for a shorter time. Garments are increasingly regarded as disposable – worn a handful of times before being discarded.`,
      `The environmental repercussions are considerable. Textile production consumes vast quantities of water, and the dyeing process can release chemicals into rivers. Many inexpensive garments are made from synthetic fibres such as polyester, which is derived from oil and can shed tiny plastic particles when washed. Moreover, only a small fraction of discarded clothing is recycled into new garments; the majority ends up in landfill or is burned.`,
      `Critics also raise ethical concerns. To keep prices low, production is frequently outsourced to countries where wages are low and labour regulations may be poorly enforced. Following several widely reported factory accidents, some brands have pledged to improve transparency by publishing lists of the factories they use.`,
      `Whether consumers will change their habits remains uncertain. Second-hand clothing platforms and rental services have grown rapidly, particularly among younger shoppers, and some governments are considering legislation that would make producers responsible for the disposal of the clothes they sell. Sceptics argue, however, that such measures merely mitigate the problem without challenging the underlying business model.`
    ],
    questions: [
      { t: "tfng", q: "Fast fashion retailers release new designs more often than retailers did in the past.", a: "TRUE", ex: "ย่อหน้า A: เดิมออกคอลเลกชันปีละ 2–4 ครั้ง ตอนนี้ออกแบบใหม่ “every few weeks”" },
      { t: "tfng", q: "Consumers today keep their clothes for longer than in the past.", a: "FALSE", ex: "ย่อหน้า B: “keeps each item for a shorter time”" },
      { t: "tfng", q: "Polyester clothes are more expensive to produce than cotton clothes.", a: "NOT GIVEN", ex: "บทความไม่ได้พูดถึงฝ้ายหรือเปรียบเทียบต้นทุนผลิตเลย" },
      { t: "mcq", q: "What happens to most clothing that people throw away?", o: ["It goes to landfill or is burned.", "It is recycled into new clothes.", "It is sold again online.", "It is returned to the shops."], a: 0, ex: "ย่อหน้า C: “the majority ends up in landfill or is burned”" },
      { t: "mcq", q: "Why have some brands started publishing lists of their factories?", o: ["to reduce production costs", "because a new law requires it", "in response to concerns after factory accidents", "to attract more workers"], a: 2, ex: "ย่อหน้า D: “Following several widely reported factory accidents…” บทความไม่ได้บอกว่ามีกฎหมายบังคับ" },
      { t: "mcq", q: "What do sceptics think about the new measures?", o: ["They will be too expensive.", "They do not address the real cause of the problem.", "They will end fast fashion completely.", "They only help younger shoppers."], a: 1, ex: "ย่อหน้า E: “merely mitigate the problem without challenging the underlying business model”" },
      { t: "para", q: "how quickly new clothes can reach the shops", a: "A", ex: "ย่อหน้า A: “from design sketch to shop floor in a matter of weeks”" },
      { t: "gap", q: "Polyester, a synthetic fibre, is derived from ______.", a: ["oil"], ex: "ย่อหน้า C: “polyester, which is derived from oil”" }
    ]
  },
  { id: "r6", level: "ielts-8.0", band: "7.5–8.0", emoji: "🗣️", minutes: 20, title: "Does Language Shape Thought?",
    paras: [
      `The proposition that the language we speak shapes the way we think has fascinated scholars for over a century. Commonly associated with the American linguists Edward Sapir and Benjamin Lee Whorf, the hypothesis of linguistic relativity was, in its strongest form, taken to imply that speakers of different languages inhabit fundamentally different conceptual worlds.`,
      `This “strong” version fell out of favour in the latter half of the twentieth century. Critics contended that Whorf’s evidence – notably his claims about how the Hopi language expresses time – rested on questionable analysis, and the rise of theories emphasising universal features of human language further eroded its credibility. If thought were entirely constrained by language, sceptics asked, how could translation between languages be possible at all?`,
      `Since the 1990s, however, a more nuanced version has gained empirical support. Rather than determining thought, language is now thought to influence certain cognitive habits. Research on colour perception, for instance, has found that Russian speakers, whose language obligatorily distinguishes between lighter blue (goluboy) and darker blue (siniy), are marginally faster at discriminating between such shades than English speakers.`,
      `Spatial orientation offers perhaps the most striking evidence. Speakers of Guugu Yimithirr, an Aboriginal language of Australia, describe locations using cardinal directions rather than terms such as “left” and “right”; one might refer to an object on “the north side” of a table. Studies indicate that these speakers maintain a remarkably accurate sense of direction, even in unfamiliar surroundings.`,
      `Nevertheless, researchers caution against overstating such findings. The effects observed are typically modest, and it is often difficult to disentangle the influence of language from that of culture and environment. The current consensus, therefore, is not that language imprisons thought, but that it subtly directs attention towards certain distinctions rather than others.`
    ],
    questions: [
      { t: "tfng", q: "Supporters of the strong version believed that language had only a small effect on thought.", a: "FALSE", ex: "ย่อหน้า A: แบบ strong เชื่อว่าคนพูดต่างภาษาอยู่ใน “fundamentally different conceptual worlds” คือผลมาก ไม่ใช่ผลน้อย" },
      { t: "tfng", q: "Whorf’s analysis of the Hopi language has been criticised.", a: "TRUE", ex: "ย่อหน้า B: “rested on questionable analysis”" },
      { t: "tfng", q: "Sapir and Whorf worked together at the same university.", a: "NOT GIVEN", ex: "บทความบอกแค่ว่าทั้งสองเป็นนักภาษาศาสตร์อเมริกัน ไม่ได้บอกเรื่องที่ทำงาน" },
      { t: "mcq", q: "What argument did sceptics use against the strong version?", o: ["Languages change too quickly to study.", "If it were true, translation would be impossible.", "Most languages have no words for time.", "It had never been tested."], a: 1, ex: "ย่อหน้า B: “how could translation between languages be possible at all?”" },
      { t: "mcq", q: "The research on Russian speakers found that they…", o: ["could see more colours than English speakers.", "had only one word for blue.", "were slightly faster at telling shades of blue apart.", "preferred lighter shades of blue."], a: 2, ex: "ย่อหน้า C: “marginally faster at discriminating between such shades” (marginally = slightly)" },
      { t: "mcq", q: "What is the current view among researchers?", o: ["Language completely controls thought.", "Language has no effect on thought.", "Culture matters more than language.", "Language guides attention towards certain distinctions."], a: 3, ex: "ย่อหน้า E: “it subtly directs attention towards certain distinctions”" },
      { t: "para", q: "the difficulty of separating the effects of language and culture", a: "E", ex: "ย่อหน้า E: “difficult to disentangle the influence of language from that of culture”" },
      { t: "gap", q: "Guugu Yimithirr speakers describe locations using ______ instead of left and right.", a: ["cardinal directions"], ex: "ย่อหน้า D: “using cardinal directions rather than terms such as left and right”" }
    ]
  }
];