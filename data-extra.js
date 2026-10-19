// =========================================================
// WordQuest · data-extra.js
// เพิ่มคำศัพท์ระดับละ 12 คำ (38 → 50 คำ) + แก้ประโยคตัวอย่างเดิม
// รูปแบบ: [word, emoji, Thai, English definition, example sentence]
// ต้องโหลดหลัง data.js และก่อน app.js
// =========================================================
const EXTRA_WORDS = {
  "cefr-A1": [
    ["banana","🍌","กล้วย","a long yellow fruit","A banana is long and yellow."],
    ["pen","🖊️","ปากกา","a thing you use to write with ink","Please write your answer with a blue pen, not a pencil."],
    ["bag","🎒","กระเป๋า","a thing you use to carry things","I carry my books in a bag."],
    ["hand","✋","มือ","the part of your body at the end of your arm","Raise your hand if you know the answer."],
    ["eye","👁️","ตา","the part of your body that you see with","I can't see well with my left eye."],
    ["sister","👧","พี่สาว, น้องสาว","a girl who has the same parents as you","My mom has two children: me and my sister."],
    ["blue","🔵","สีน้ำเงิน, สีฟ้า","the colour of the sky on a sunny day","On a sunny day, the sky is blue."],
    ["open","📂","เปิด","to move something so that it is not closed","Please open the window; it's very hot in here."],
    ["cup","☕","ถ้วย","a small container for hot drinks","Would you like a cup of tea?"],
    ["name","📛","ชื่อ","the word that people call you","What is your name?"],
    ["play","🎮","เล่น","to do something for fun","The kids play football after school."],
    ["old","👴","แก่, อายุ","having lived for many years","My grandfather is 80 years old."]
  ],
  "cefr-A2": [
    ["library","📚","ห้องสมุด","a place where you can borrow books","I borrow books from the library."],
    ["passport","🛂","หนังสือเดินทาง","an official document you need to travel abroad","My passport shows my photo, name and nationality."],
    ["breakfast","🥞","อาหารเช้า","the first meal of the day","I usually have toast and eggs for breakfast."],
    ["wallet","👛","กระเป๋าสตางค์","a small case for money and cards","I keep my money and cards in my wallet."],
    ["boring","😐","น่าเบื่อ","not interesting","The film was so boring that I fell asleep."],
    ["early","🐓","แต่เช้า, ก่อนเวลา","before the usual time","I get up early to catch the first train."],
    ["late","⌛","สาย, ช้ากว่ากำหนด","after the expected time","Hurry up or we will be late for class."],
    ["careful","⚠️","ระมัดระวัง","giving attention to avoid danger","Be careful! The floor is wet and you might fall."],
    ["send","📨","ส่ง (ข้อความ, จดหมาย)","to make a message or letter go to someone","I will send you an email tonight."],
    ["lend","🤝","ให้ยืม","to give something to someone for a short time","Could you lend me some money until Friday?"],
    ["uniform","👔","เครื่องแบบ","special clothes that students or workers wear","Students in Thailand wear a uniform to school."],
    ["map","🧭","แผนที่","a drawing that shows roads and places","We got lost, so we looked at the map."]
  ],
  "cefr-B1": [
    ["purpose","🎯","จุดประสงค์, เจตนา","the reason why you do something","He didn't break the glass on purpose; it was an accident."],
    ["volunteer","🙋","อาสาสมัคร","a person who works without being paid","She works as a volunteer at the animal shelter."],
    ["ingredient","🥕","ส่วนผสม (อาหาร)","one of the foods used to make a dish","Flour is the main ingredient in bread."],
    ["afraid","😨","กลัว","feeling fear","My little brother is afraid of the dark."],
    ["guess","❓","เดา","to give an answer without being sure","If you don't know the answer, just guess."],
    ["memory","🧠","ความจำ, ความทรงจำ","the ability to remember things","My grandmother has a poor memory and often forgets names."],
    ["polite","🙇","สุภาพ","behaving in a way that shows respect","It is polite to say thank you."],
    ["schedule","📅","ตารางเวลา","a plan that lists times for activities","According to the schedule, the bus leaves at nine."],
    ["successful","🏆","ประสบความสำเร็จ","achieving what you wanted","The company was so successful that it opened ten new shops."],
    ["mistake","❌","ข้อผิดพลาด","something that is wrong","I made a mistake in my homework, so I corrected it."],
    ["celebrate","🎉","เฉลิมฉลอง","to do something fun for a special event","We celebrate New Year with fireworks."],
    ["entrance","🚪","ทางเข้า","the door or gate where you go in","Let's meet at the main entrance of the mall."]
  ],
  "cefr-B2": [
    ["commitment","📌","ความมุ่งมั่นผูกพัน","a promise or firm decision to do something","Learning a language requires a long-term commitment."],
    ["acknowledge","🙏","ยอมรับ (ว่าเป็นความจริง)","to accept that something is true","He refused to acknowledge that he had made a mistake."],
    ["deadline","⏰","เส้นตาย, กำหนดส่ง","the time by which something must be done","The deadline for the report is Friday at 5 p.m."],
    ["distract","📵","ทำให้เสียสมาธิ","to take someone's attention away","Don't let your phone distract you from your homework."],
    ["enthusiastic","🤩","กระตือรือร้น","showing great interest and excitement","The fans were enthusiastic, cheering loudly all night."],
    ["eventually","🏁","ในที่สุด","in the end, after a long time","After many failures, he eventually passed the driving test."],
    ["generous","🎁","มีน้ำใจ, ชอบให้","happy to give money, time or help","It was generous of you to pay for everyone's dinner."],
    ["impressive","👏","น่าประทับใจ","making people admire it","The view from the top of the mountain was impressive."],
    ["investigate","🕵️","สืบสวน","to try to find out the truth about something","The police will investigate the cause of the fire."],
    ["leisure","🏖️","เวลาว่าง, การพักผ่อน","free time when you are not working","In my leisure time, I enjoy reading novels."],
    ["occupation","👷","อาชีพ","a person's job","Please write your name and occupation on the form."],
    ["postpone","📆","เลื่อน (ออกไป)","to move an event to a later time","We will postpone the meeting until next Monday."]
  ],
  "cefr-C1": [
    ["complacent","😌","นิ่งนอนใจ","too satisfied with yourself, so you stop trying","After winning three games, the team became complacent and lost."],
    ["concise","✂️","กระชับ","short and clear","Keep your answer concise – no more than two sentences."],
    ["disclose","🔓","เปิดเผย","to make secret information known","The company refused to disclose how much it paid the CEO."],
    ["endorse","✅","รับรอง, สนับสนุน","to publicly support someone or something","Many celebrities endorse products on social media."],
    ["formidable","🦍","น่าเกรงขาม","impressive and powerful, often frightening","She is a formidable opponent who rarely loses a match."],
    ["imminent","⏰","ใกล้จะเกิดขึ้น","about to happen very soon","The storm is imminent – it will hit the coast within an hour."],
    ["notorious","🚨","ฉาวโฉ่","famous for something bad","The road is notorious for traffic jams."],
    ["sceptical","🙄","ไม่เชื่อง่าย, กังขา","doubting that something is true","Scientists were sceptical of the new claims."],
    ["volatile","🌋","ผันผวน, ไม่แน่นอน","likely to change suddenly","Oil prices have been volatile this year."],
    ["revenue","💰","รายได้ (ขององค์กร)","money that a company or government receives","The company's revenue rose by 20% last year."],
    ["perceive","👀","รับรู้, มองว่า","to notice or understand something in a certain way","Children often perceive the world very differently from adults."],
    ["prestigious","🎓","มีชื่อเสียงเกียรติยศ","respected and admired as very important","She won a place at a prestigious university."]
  ],
  "cefr-C2": [
    ["ostentatious","🦚","โอ้อวด หรูหราเกินเหตุ","designed to impress people with wealth","He drove an ostentatious gold sports car."],
    ["ineffable","🌌","เกินบรรยาย","too great to be described in words","The beauty of the sunrise was ineffable."],
    ["zeitgeist","🌐","จิตวิญญาณของยุคสมัย","the general mood or ideas of a particular time","The song perfectly captured the zeitgeist of the 1990s."],
    ["inexorable","🚂","ไม่อาจหยุดยั้ง","impossible to stop","The inexorable rise of technology has changed every industry."],
    ["sanguine","🌞","มองโลกในแง่ดี","optimistic, especially in a difficult situation","Despite the losses, the manager remained sanguine about the future."],
    ["tacit","🤫","โดยนัย (ไม่ได้พูดออกมา)","understood without being said","There was a tacit agreement not to discuss work at dinner."],
    ["vacillate","↔️","ลังเลกลับไปกลับมา","to keep changing your opinion","He continued to vacillate between the two job offers."],
    ["ennui","🥀","ความเบื่อหน่าย","a feeling of boredom and lack of interest","A deep sense of ennui settled over the town in winter."],
    ["erudite","📚","คงแก่เรียน","having great knowledge from study","The erudite professor could quote poetry in five languages."],
    ["hubris","👑","ความหยิ่งผยองเกินตัว","too much pride or self-confidence","His hubris led him to ignore every warning."],
    ["schadenfreude","😏","ความสะใจเมื่อเห็นคนอื่นซวย","pleasure from someone else's bad luck","He felt a little schadenfreude when his rival lost."],
    ["visceral","💓","ที่มาจากความรู้สึกลึก ๆ","based on deep feelings rather than reason","The film produced a visceral reaction in the audience."]
  ],
  "ielts-4.0": [
    ["mountain","⛰️","ภูเขา","a very high hill","We climbed a mountain on our trip to Chiang Mai."],
    ["beach","🏖️","ชายหาด","an area of sand next to the sea","We swam and played on the beach all day."],
    ["pet","🐹","สัตว์เลี้ยง","an animal you keep at home","My pet is a small brown rabbit."],
    ["daily","📆","ประจำวัน","happening every day","Drinking water is part of my daily routine."],
    ["meal","🍱","มื้ออาหาร","food eaten at one time, like lunch","Dinner is my favourite meal of the day."],
    ["homework","📝","การบ้าน","school work you do at home","The teacher gave us a lot of maths homework."],
    ["weekday","📅","วันธรรมดา","any day from Monday to Friday","Monday is a weekday, but Saturday is not."],
    ["grandparents","👵","ปู่ย่าตายาย","the parents of your mother or father","My grandparents are my father's parents."],
    ["smartphone","📱","สมาร์ตโฟน","a mobile phone that can use the internet","My smartphone has a great camera."],
    ["dessert","🍰","ของหวาน","sweet food eaten after a meal","For dessert, we had mango sticky rice."],
    ["countryside","🌄","ชนบท","land outside towns and cities","I prefer the peace of the countryside to the noise of Bangkok."],
    ["fashion","👗","แฟชั่น","popular styles of clothes","She loves fashion and reads style magazines."]
  ],
  "ielts-4.5": [
    ["accommodation","🏨","ที่พัก","a place to stay","The hotel offers cheap accommodation for students."],
    ["souvenir","🧸","ของที่ระลึก","something you buy to remember a trip","I bought a small souvenir for my mother in Japan."],
    ["sightseeing","🗽","การเที่ยวชมสถานที่","visiting famous places as a tourist","We spent the day sightseeing in Rome."],
    ["passenger","🚆","ผู้โดยสาร","a person in a vehicle who is not driving","A passenger is someone in a car, bus or plane who is not the driver."],
    ["heritage","🏯","มรดก (ทางวัฒนธรรม)","important history and traditions of a place","Ayutthaya is a World Heritage site."],
    ["crowd","🎪","ฝูงชน","a large group of people in one place","A huge crowd watched the fireworks."],
    ["destination","🏁","จุดหมายปลายทาง","the place you are travelling to","After ten hours on the train, we finally reached our destination."],
    ["affordable","🏷️","ราคาที่จ่ายไหว","cheap enough for most people","The price is affordable, so most students can buy it."],
    ["wildlife","🦓","สัตว์ป่า","wild animals living in nature","The national park is home to a lot of wildlife."],
    ["plastic","🥤","พลาสติก","a light material made from oil","Many plastic bags end up in the sea."],
    ["deforestation","🌲","การตัดไม้ทำลายป่า","cutting down large areas of forest","Deforestation means cutting down too many trees."],
    ["charity","💝","องค์กรการกุศล","an organisation that helps people in need","She gives money to a charity that helps homeless children."]
  ],
  "ielts-5.0": [
    ["approximately","📏","ประมาณ","close to an exact number","The trip takes approximately three hours."],
    ["remain","⏸️","ยังคง, คงอยู่","to stay the same","The number of visitors will remain stable next year."],
    ["majority","🙋","ส่วนใหญ่","more than half of a group","The majority of students walk to school."],
    ["survey","📝","การสำรวจ","a set of questions asked to many people","A survey of 500 people showed that most like coffee."],
    ["healthcare","🏥","การดูแลสุขภาพ","medical services for people","Everyone should have access to free healthcare."],
    ["tax","💸","ภาษี","money people must pay to the government","The government uses tax money to build schools."],
    ["wage","💵","ค่าจ้าง","money paid for work, usually per hour or day","The minimum wage is 350 baht a day."],
    ["violence","🥊","ความรุนแรง","behaviour that hurts people","Some parents worry about violence in video games."],
    ["disease","🤒","โรค","an illness","Malaria is a disease spread by mosquitoes."],
    ["retire","🏖️","เกษียณ","to stop working because of age","My father plans to retire at 60."],
    ["advertising","📢","การโฆษณา","telling people about products to sell them","Advertising on TV is very expensive."],
    ["fuel","⛽","เชื้อเพลิง","a material burned to produce power","The price of fuel at petrol stations went up again."]
  ],
  "ielts-5.5": [
    ["argue","🗣️","โต้แย้ง (ว่า)","to give reasons for an opinion","Some people argue that homework should be banned."],
    ["whereas","↔️","ในขณะที่ (เปรียบเทียบ)","used to compare two different facts","I prefer tea, whereas my sister prefers coffee."],
    ["furthermore","➕","นอกจากนี้","used to add another point","Cycling is cheap; furthermore, it keeps you fit."],
    ["however","↩️","อย่างไรก็ตาม","used to show a contrast","Cars are convenient; however, they cause pollution."],
    ["responsibility","🎒","ความรับผิดชอบ","a duty to do something","Taking care of a pet is a big responsibility."],
    ["independent","🏃","เป็นอิสระ, พึ่งพาตนเอง","not needing help from others","Living alone helps young people become independent."],
    ["employer","🏢","นายจ้าง","a person or company that pays people to work","My employer pays me at the end of every month."],
    ["online","💻","ออนไลน์","using the internet","More people now study online from home."],
    ["unhealthy","🍟","ไม่ดีต่อสุขภาพ","bad for your health","Eating fast food every day is unhealthy."],
    ["solve","🧩","แก้ (ปัญหา)","to find an answer to a problem","Can you solve this maths puzzle?"],
    ["punishment","⛓️","การลงโทษ","what happens to someone who breaks a rule","Prison is a common punishment for serious crimes."],
    ["gap","🕳️","ช่องว่าง (ความต่าง)","a difference between two groups","The gap between rich and poor is growing."]
  ],
  "ielts-6.0": [
    ["indicate","👉","ชี้ให้เห็น, บ่งบอก","to show or suggest something","Recent studies indicate that sleep improves memory."],
    ["evaluate","⚖️","ประเมินคุณค่า","to judge how good something is","We need to evaluate the success of the project."],
    ["overall","🌐","โดยรวม","considering everything","Overall, the figures show a steady increase."],
    ["exceed","🚀","เกิน","to be greater than a number or limit","Spending must not exceed the budget."],
    ["urbanisation","🏙️","การกลายเป็นเมือง","the growth of cities","Rapid urbanisation has caused housing shortages."],
    ["globalisation","🌏","โลกาภิวัตน์","the process of the world becoming more connected","Globalisation allows companies to sell products worldwide."],
    ["innovation","💡","นวัตกรรม","a new idea or method","The smartphone was a major innovation in communication."],
    ["deny","🙅","ปฏิเสธ","to say that something is not true","He continues to deny that he broke the window."],
    ["equivalent","🔁","เทียบเท่า","equal in value or amount","One kilogram is equivalent to 1,000 grams."],
    ["outcome","🏁","ผลลัพธ์","the final result","Nobody could predict the outcome of the final match."],
    ["compensate","💰","ชดเชย","to pay or give something because of a loss","The airline will compensate passengers for the delay."],
    ["moreover","➕","ยิ่งไปกว่านั้น","used to add a stronger point","The plan is cheap; moreover, it is easy to carry out."]
  ],
  "ielts-6.5": [
    ["accumulate","📦","สะสม","to gradually collect more of something","Dust tends to accumulate under the bed."],
    ["affluent","💎","มั่งคั่ง","having a lot of money","Affluent families can afford private schools."],
    ["inadequate","🚱","ไม่เพียงพอ","not good or large enough","Many rural schools have inadequate facilities."],
    ["optimal","🎯","เหมาะสมที่สุด","the best possible","Eight hours of sleep is optimal for most adults."],
    ["prioritise","🥇","จัดลำดับความสำคัญ","to decide what is most important and do it first","Governments must prioritise healthcare over new roads."],
    ["remote","🏝️","ห่างไกล","far away from towns","Doctors are needed in remote villages."],
    ["exposure","☀️","การสัมผัส, การได้รับ","being in contact with something","Too much exposure to the sun can damage your skin."],
    ["refrain","✋","ละเว้น","to stop yourself from doing something","Please refrain from smoking inside the building."],
    ["transition","🔀","การเปลี่ยนผ่าน","a change from one state to another","The transition from school to university can be difficult."],
    ["viable","✔️","เป็นไปได้ (ใช้ได้จริง)","able to work successfully","Solar power is now a viable alternative to coal."],
    ["ageing","👵","ที่สูงวัยขึ้น","growing older","As people live longer, many countries face an ageing population."],
    ["intensive","🔥","เข้มข้น","involving a lot of work in a short time","She took an intensive English course for one month."]
  ],
  "ielts-7.0": [
    ["insurmountable","🧗","ที่ไม่อาจเอาชนะได้","too great to be overcome","The problems seemed insurmountable at first."],
    ["contentious","⚡","เป็นที่ถกเถียง","likely to cause disagreement","Animal testing remains a contentious issue."],
    ["discernible","👁️","สังเกตเห็นได้","able to be noticed","There was no discernible difference between the two samples."],
    ["autonomy","🗽","ความเป็นอิสระในการตัดสินใจ","the freedom to make your own decisions","Teenagers want more autonomy over their lives."],
    ["entail","📎","ทำให้ต้องมี, เกี่ยวข้องกับ","to involve something as a necessary part","The job will entail a lot of travel."],
    ["hamper","🚧","ขัดขวาง ทำให้ล่าช้า","to make progress difficult","Bad weather may hamper rescue efforts."],
    ["inclined","↗️","มีแนวโน้มจะ","likely or wanting to do something","I'm inclined to agree with you."],
    ["manifest","🌋","ปรากฏ, แสดงออก","to show something clearly","Stress can manifest itself as headaches."],
    ["paramount","🏔️","สำคัญที่สุด","more important than anything else","The safety of passengers is of paramount importance."],
    ["rectify","🔧","แก้ไขให้ถูกต้อง","to correct something that is wrong","We must rectify the error before the report is published."],
    ["scarce","🏜️","ขาดแคลน, หายาก","not enough to meet demand","Water becomes scarce during the dry season."],
    ["deviate","↪️","เบี่ยงเบน","to move away from the usual way","Do not deviate from the plan."]
  ],
  "ielts-7.5": [
    ["aggravate","😤","ทำให้รุนแรงขึ้น","to make a bad situation worse","Scratching will only aggravate the rash."],
    ["benchmark","📏","เกณฑ์มาตรฐาน","a standard used to compare things","Our test scores are below the national benchmark."],
    ["contingent","🔗","ขึ้นอยู่กับ","depending on something else","The deal is contingent on government approval."],
    ["dissipate","💨","สลายไป","to gradually disappear","The fog began to dissipate by mid-morning."],
    ["exemplary","🏅","เป็นแบบอย่างที่ดี","excellent; a good example for others","Her behaviour in class is exemplary."],
    ["impede","🚧","ทำให้ล่าช้า, ขัดขวาง","to slow down or block progress","Fallen trees impede the flow of traffic."],
    ["inception","🌱","การเริ่มต้น","the beginning of an organisation or activity","Since its inception in 2010, the charity has helped thousands of families."],
    ["predicament","😰","สถานการณ์ลำบาก","a difficult situation","He found himself in a predicament after losing his passport."],
    ["quantifiable","🔢","วัดเป็นตัวเลขได้","able to be measured","Happiness is not easily quantifiable."],
    ["resurgence","🔄","การกลับมาใหม่","a return of something after a decline","There has been a resurgence of interest in vinyl records."],
    ["unilateral","➡️","ฝ่ายเดียว","done by one side without agreement from others","The company made a unilateral decision to cut salaries."],
    ["adept","🎯","เชี่ยวชาญ","very skilled","She is adept at solving complex problems."]
  ],
  "ielts-8.0": [
    ["anathema","🚫","สิ่งที่น่ารังเกียจอย่างยิ่ง","something strongly disliked","Waste is anathema to the eco-friendly community."],
    ["heterogeneous","🎨","ที่ประกอบด้วยสิ่งที่หลากหลาย","made of very different parts","The class is heterogeneous, with students from many backgrounds."],
    ["impervious","☔","ไม่สะทกสะท้าน, กันได้","not affected by something","He seemed impervious to criticism."],
    ["salubrious","🌿","ดีต่อสุขภาพ (สภาพแวดล้อม)","pleasant and healthy","They moved to a more salubrious neighbourhood."],
    ["acrimonious","😠","ดุเดือด ขมขื่น","angry and bitter","The meeting ended in an acrimonious argument."],
    ["confluence","🌊","การมาบรรจบกัน","a situation where two or more things come together","The success was due to a confluence of factors."],
    ["indelible","🖊️","ลบไม่ออก","impossible to forget or remove","Her first trip abroad left an indelible impression on her."],
    ["surreptitiously","🕵️","อย่างลับ ๆ ล่อ ๆ","in a secret way","He surreptitiously checked his phone during the meeting."],
    ["exculpate","⚖️","พิสูจน์ว่าบริสุทธิ์","to show that someone is not guilty","New evidence may exculpate the accused man."],
    ["sporadic","🌧️","เป็นครั้งคราว","happening irregularly","There were sporadic showers throughout the day."],
    ["disparage","👎","ดูหมิ่น, ด้อยค่า","to speak about someone as having little value","It is unprofessional to disparage your colleagues."],
    ["exacting","🔍","เข้มงวด เรียกร้องสูง","demanding a lot of care and effort","The surgeon works to exacting standards."]
  ]
};

// แก้ประโยคเดิมที่ไวยากรณ์ไม่เป็นธรรมชาติ หรือเว้นช่องแล้วตอบได้มากกว่า 1 คำ
const SENTENCE_FIXES = {
  "cefr-A1|water": "Fish can only live in water.",                       // เดิม "a glass of ___" ตอบ milk ได้ด้วย
  "cefr-A1|shoe": "My foot hurts because this shoe is too tight.",       // เดิม "my left ___" ตอบ hand/eye ได้
  "cefr-A2|cheap": "It's really cheap – only 50 baht!",                  // เดิมตอบ expensive ได้ด้วย
  "cefr-A2|arrive": "We will arrive in Tokyo at 6 p.m.",                 // เดิมตอบ leave ได้ด้วย
  "cefr-C1|vulnerable": "Elderly people are more vulnerable to the flu.", // "Old people" ฟังไม่สุภาพ
  "cefr-C2|acquiesce": "In the end, he had to acquiesce to their demands.", // เดิม "agreed to acquiesce" ซ้ำความ
  "ielts-7.5|repercussion": "Ignoring the warning could have one serious repercussion: a total system failure.",
  "ielts-8.0|myriad": "Students today can choose from myriad online courses." // เลี่ยง "There are a myriad of"
};

(function mergeExtra() {
  ['cefr', 'ielts'].forEach(track => LEVELS[track].forEach(l => {
    const key = track + '-' + l.id;
    (EXTRA_WORDS[key] || []).forEach(w => {
      if (!l.words.some(x => x[0].toLowerCase() === w[0].toLowerCase())) l.words.push(w);
    });
    l.words.forEach(w => { const fix = SENTENCE_FIXES[key + '|' + w[0]]; if (fix) w[4] = fix; });
  }));
})();