'use strict';
/* =========================================================
   WordQuest · grammar.js – บทเรียนไวยากรณ์ A1–C1
   ต้องโหลดหลัง app.js (ใช้ฟังก์ชันจาก app.js) · ไม่ต้องแก้ app.js
   รูปแบบข้อ: ["ประโยคที่มี ___", "คำตอบที่ถูก", ["ตัวลวง", ...], "คำอธิบาย"]
   ========================================================= */
const GRAMMAR = [
  { id: "g01", level: "cefr-A1", emoji: "🧱", title: "Verb to be (am / is / are)",
    tips: ["I → <b>am</b>", "He / She / It / คนหรือสิ่งเดียว → <b>is</b>", "You / We / They / หลายคนหรือหลายสิ่ง → <b>are</b>", "ปฏิเสธเติม not: isn't, aren't · คำถามย้าย am/is/are ขึ้นหน้า"],
    examples: ["I am a student.", "My cat is black.", "We are not tired.", "Are you ready?"],
    qs: [
      ["My brother ___ a doctor.", "is", ["am", "are"], "brother = คนเดียว → is"],
      ["I ___ hungry.", "am", ["is", "are"], "I ใช้คู่กับ am เสมอ"],
      ["Tom and Lisa ___ in the garden.", "are", ["is", "am"], "Tom and Lisa = สองคน → are"],
      ["___ you a student?", "Are", ["Is", "Am"], "คำถามกับ you ใช้ Are"],
      ["The apples ___ red.", "are", ["is", "am"], "apples เป็นพหูพจน์ → are"],
      ["It ___ not cold today.", "is", ["are", "am"], "It → is"]
    ] },
  { id: "g02", level: "cefr-A1", emoji: "🔁", title: "Present Simple",
    tips: ["ใช้กับนิสัย กิจวัตร และความจริงทั่วไป", "He / She / It → กริยาเติม <b>s / es</b> (plays, watches, goes)", "ปฏิเสธ/คำถาม: <b>do / does</b> + กริยาช่อง 1 (ไม่เติม s)", "คำบอกเวลา: every day, usually, often, always, never"],
    examples: ["She goes to school by bus.", "They don't eat meat.", "Does he play tennis?"],
    qs: [
      ["She ___ to school every day.", "goes", ["go", "going"], "She → เติม es: goes"],
      ["They ___ football on Sundays.", "play", ["plays", "playing"], "They → กริยาไม่เติม s"],
      ["My father ___ coffee.", "doesn't drink", ["don't drink", "doesn't drinks"], "father = he → doesn't และหลัง doesn't กริยาไม่เติม s"],
      ["___ your sister like pizza?", "Does", ["Do", "Is"], "sister = she → Does"],
      ["The sun ___ in the east.", "rises", ["rise", "rising"], "ความจริงตามธรรมชาติ + The sun (เอกพจน์) → rises"],
      ["He ___ his teeth twice a day.", "brushes", ["brush", "brushs"], "กริยาลงท้าย sh → เติม es"]
    ] },
  { id: "g03", level: "cefr-A1", emoji: "🍎", title: "a / an และคำนามพหูพจน์",
    tips: ["<b>a</b> + เสียงพยัญชนะ: a cat, a university (ออกเสียง 'ยู')", "<b>an</b> + เสียงสระ: an apple, an hour (h ไม่ออกเสียง)", "พหูพจน์: +s (cats), +es (boxes), y → ies (babies)", "พหูพจน์ไม่ปกติ: child → children, man → men, foot → feet, tooth → teeth"],
    examples: ["I eat an egg every day.", "She is a teacher.", "The children are playing."],
    qs: [
      ["I have ___ umbrella.", "an", ["a", "two"], "umbrella ขึ้นต้นด้วยเสียงสระ → an"],
      ["She is ___ honest girl.", "an", ["a", "two"], "honest ไม่ออกเสียง h → ขึ้นต้นด้วยเสียงสระ → an"],
      ["He studies at ___ university in Bangkok.", "a", ["an", "two"], "university ออกเสียง 'ยู' (เสียงพยัญชนะ) → a"],
      ["There are three ___ in the room.", "boxes", ["box", "boxs"], "box ลงท้าย x → เติม es"],
      ["Two ___ are playing in the park.", "children", ["childs", "child"], "child เป็นพหูพจน์แบบไม่ปกติ → children"],
      ["I walked all day, and now my ___ hurt.", "feet", ["foots", "foot"], "foot → feet (กริยา hurt ไม่เติม s แปลว่าประธานเป็นพหูพจน์)"]
    ] },
  { id: "g04", level: "cefr-A1", emoji: "🕗", title: "Prepositions of Time (in / on / at)",
    tips: ["<b>at</b> + เวลาที่ชัดเจน: at 7 o'clock, at noon, at night", "<b>on</b> + วัน/วันที่: on Monday, on 5 May, on my birthday", "<b>in</b> + เดือน/ปี/ฤดู/ช่วงของวัน: in June, in 2025, in summer, in the morning"],
    examples: ["The shop opens at 9 a.m.", "We meet on Fridays.", "I was born in 2010."],
    qs: [
      ["The class starts ___ 8 o'clock.", "at", ["on", "in"], "เวลาที่ชัดเจน → at"],
      ["My birthday is ___ June.", "in", ["on", "at"], "เดือน → in"],
      ["We don't go to school ___ Sunday.", "on", ["in", "at"], "วัน → on"],
      ["I usually read ___ the evening.", "in", ["on", "at"], "ช่วงของวัน (the morning/afternoon/evening) → in"],
      ["Songkran is ___ 13 April.", "on", ["in", "at"], "วันที่ → on"],
      ["Owls hunt ___ night.", "at", ["in", "on"], "at night เป็นสำนวนตายตัว"]
    ] },
  { id: "g05", level: "cefr-A2", emoji: "🏃", title: "Present Continuous vs Present Simple",
    tips: ["Present Continuous = กำลังทำอยู่ตอนนี้: <b>am / is / are + V-ing</b>", "Present Simple = ทำเป็นประจำหรือเป็นความจริง", "คำบอก: now, at the moment, Look! → continuous · every day, usually → simple", "กริยาบอกสภาวะ (know, like, want, need) มักไม่ใช้รูป -ing"],
    examples: ["I am watching TV now.", "I watch TV every evening.", "She knows the answer."],
    qs: [
      ["Look! The baby ___.", "is sleeping", ["sleeps", "sleep"], "Look! = กำลังเกิดขึ้นตอนนี้ → is sleeping"],
      ["I usually ___ the bus to work.", "take", ["am taking", "takes"], "usually = กิจวัตร → Present Simple, I → take"],
      ["Be quiet, please. I ___ on the phone.", "am talking", ["talk", "talks"], "กำลังคุยอยู่ตอนนี้ → am talking"],
      ["Water ___ at 100°C.", "boils", ["is boiling", "boil"], "ความจริงทางวิทยาศาสตร์ → Present Simple"],
      ["She ___ the answer.", "knows", ["is knowing", "know"], "know เป็นกริยาบอกสภาวะ ไม่ใช้ -ing"],
      ["What ___ you doing right now?", "are", ["do", "is"], "right now + doing → are you doing"]
    ] },
  { id: "g06", level: "cefr-A2", emoji: "⏪", title: "Past Simple",
    tips: ["ใช้กับเหตุการณ์ที่จบแล้วในอดีต: yesterday, last week, ago, in 2020", "กริยาปกติเติม -ed: played, studied, stopped", "กริยาไม่ปกติ: go → went, eat → ate, see → saw, buy → bought", "ปฏิเสธ/คำถาม: <b>did / didn't</b> + กริยาช่อง 1"],
    examples: ["We visited Phuket last year.", "I didn't see him.", "Did you finish your work?"],
    qs: [
      ["We ___ to Chiang Mai last year.", "went", ["go", "goed"], "go เป็นกริยาไม่ปกติ → went"],
      ["I ___ a new phone yesterday.", "bought", ["buyed", "buy"], "buy → bought"],
      ["She didn't ___ the film.", "like", ["liked", "likes"], "หลัง didn't ใช้กริยาช่อง 1"],
      ["___ you see Tom at the party?", "Did", ["Do", "Were"], "อดีต + กริยาแท้ see → Did"],
      ["He ___ English for two hours last night.", "studied", ["studyed", "studies"], "study ลงท้าย พยัญชนะ + y → studied"],
      ["They ___ at home last weekend.", "were", ["was", "are"], "They + อดีต → were"]
    ] },
  { id: "g07", level: "cefr-A2", emoji: "📏", title: "Comparatives & Superlatives",
    tips: ["คำสั้น: +er / the +est (tall → taller → the tallest)", "ลงท้าย y: happy → happier → the happiest", "คำยาว: more / the most (more expensive, the most beautiful)", "ไม่ปกติ: good → better → the best · bad → worse → the worst", "การเปรียบเทียบสองสิ่งใช้ <b>than</b>"],
    examples: ["My bag is heavier than yours.", "This is the most interesting book.", "She is the best student in class."],
    qs: [
      ["An elephant is ___ than a horse.", "bigger", ["more big", "biggest"], "big คำสั้น + than → bigger (เพิ่ม g)"],
      ["This is the ___ film I have ever seen.", "best", ["better", "goodest"], "the + ขั้นสูงสุดของ good → best"],
      ["Gold is ___ than silver.", "more expensive", ["expensiver", "most expensive"], "คำยาว + than → more expensive"],
      ["Today is ___ than yesterday.", "hotter", ["hoter", "more hot"], "hot → hotter (สระเดียว + พยัญชนะ ให้เพิ่มตัวสะกด)"],
      ["Mount Everest is the ___ mountain in the world.", "highest", ["higher", "most high"], "the … in the world → ขั้นสูงสุด highest"],
      ["My cold is ___ today than yesterday.", "worse", ["badder", "worst"], "bad → worse (ขั้นกว่า + than)"]
    ] },
  { id: "g08", level: "cefr-A2", emoji: "🔮", title: "Future: will vs be going to",
    tips: ["<b>will</b> + V1 = ตัดสินใจทันที, สัญญา, คาดเดาทั่วไป (I think…)", "<b>be going to</b> + V1 = วางแผนไว้แล้ว หรือเห็นหลักฐานตรงหน้า", "ปฏิเสธของ will = won't"],
    examples: ["I'm thirsty. I'll get some water.", "We are going to move house next month.", "Look at the clouds! It's going to rain."],
    qs: [
      ["Look at those black clouds! It ___ rain.", "is going to", ["going to", "is going"], "เห็นหลักฐาน → is going to (ต้องมีทั้ง is และ to)"],
      ["The phone is ringing. I ___ answer it.", "will", ["am", "going"], "ตัดสินใจทันที → will"],
      ["We ___ visit our grandparents next weekend. We bought the tickets yesterday.", "are going to", ["going to", "are going"], "วางแผนไว้แล้ว (ซื้อตั๋วแล้ว) → are going to"],
      ["I promise I ___ tell anyone.", "won't", ["don't", "am not"], "สัญญา → will / won't"],
      ["She ___ study medicine. She has already applied.", "is going to", ["going to", "will to"], "แผนที่ตั้งใจไว้แล้ว → is going to"],
      ["I think it ___ be sunny tomorrow.", "will", ["is", "going"], "I think + คาดเดา → will"]
    ] },
  { id: "g09", level: "cefr-A2", emoji: "🥛", title: "Countable & Uncountable (much / many / some / any)",
    tips: ["นับได้ (apple, book, student) → <b>many, a few, How many</b>", "นับไม่ได้ (water, money, advice, information) → <b>much, a little, How much</b>", "<b>some</b> ใช้ในประโยคบอกเล่า · <b>any</b> ใช้ในปฏิเสธและคำถาม", "คำนามนับไม่ได้ไม่เติม s และไม่ใช้ a / an"],
    examples: ["How many books do you have?", "There isn't much time.", "Can I have some water?"],
    qs: [
      ["How ___ money do you have?", "much", ["many", "few"], "money นับไม่ได้ → much"],
      ["There aren't ___ eggs in the fridge.", "any", ["some", "much"], "ประโยคปฏิเสธ + นามนับได้ → any"],
      ["I have ___ friends in London.", "a few", ["a little", "much"], "friends นับได้ → a few"],
      ["Can you give me some ___?", "advice", ["advices", "an advice"], "advice นับไม่ได้ ไม่เติม s และไม่ใช้ an"],
      ["We need ___ milk for the cake.", "some", ["many", "a few"], "milk นับไม่ได้ + ประโยคบอกเล่า → some"],
      ["How ___ students are in your class?", "many", ["much", "little"], "students นับได้ → many"]
    ] },
  { id: "g10", level: "cefr-B1", emoji: "🕰️", title: "Present Perfect vs Past Simple",
    tips: ["Present Perfect (<b>have / has + V3</b>) = ประสบการณ์ หรือผลที่ยังเกี่ยวกับปัจจุบัน ไม่ระบุเวลาในอดีต", "คำที่มักใช้: ever, never, already, yet, just, since, for", "Past Simple = มีเวลาในอดีตชัดเจน: yesterday, in 2020, two days ago", "<b>since</b> + จุดเวลา (since 2019) · <b>for</b> + ช่วงเวลา (for three years)"],
    examples: ["I have never been to Japan.", "I went to Japan in 2019.", "She has worked here for five years."],
    qs: [
      ["Have you ever ___ sushi?", "eaten", ["ate", "eat"], "have + V3 → eaten"],
      ["I ___ my keys yesterday.", "lost", ["have lost", "has lost"], "yesterday = เวลาในอดีตชัดเจน → Past Simple"],
      ["She has lived here ___ 2019.", "since", ["for", "from"], "2019 เป็นจุดเวลา → since"],
      ["We have known each other ___ ten years.", "for", ["since", "ago"], "ten years เป็นช่วงเวลา → for"],
      ["I ___ finished my homework yet.", "haven't", ["didn't", "don't"], "finished (V3) + yet → haven't finished"],
      ["He ___ to London in 2015.", "moved", ["has moved", "have moved"], "in 2015 = เวลาในอดีตชัดเจน → Past Simple"]
    ] },
  { id: "g11", level: "cefr-B1", emoji: "🚦", title: "Modal Verbs (must / have to / should / can / might)",
    tips: ["<b>must</b> = ต้อง (กฎ หรือผู้พูดเห็นว่าจำเป็น) · <b>mustn't</b> = ห้าม", "<b>don't have to</b> = ไม่จำเป็นต้อง (ไม่ใช่ห้าม!)", "<b>should</b> = ควร · <b>might</b> = อาจจะ · <b>can / could</b> = สามารถ หรือขออนุญาต", "หลัง modal ใช้กริยาช่อง 1 เสมอ ไม่มี to และไม่เติม s"],
    examples: ["You must wear a seat belt.", "You don't have to come if you're busy.", "It might snow tonight."],
    qs: [
      ["You ___ smoke in the hospital. It's against the rules.", "mustn't", ["don't have to", "shouldn't to"], "ผิดกฎ = ห้าม → mustn't"],
      ["Tomorrow is Sunday, so I ___ get up early.", "don't have to", ["mustn't", "must to"], "วันหยุด = ไม่จำเป็นต้องตื่นเช้า (ไม่ได้ห้าม) → don't have to"],
      ["You look tired. You ___ go to bed.", "should", ["must to", "should to"], "ให้คำแนะนำ → should + V1 (ไม่มี to)"],
      ["She can ___ three languages.", "speak", ["speaks", "to speak"], "หลัง can ใช้กริยาช่อง 1"],
      ["Take an umbrella. It ___ rain later.", "might", ["might to", "mights"], "ความเป็นไปได้ → might + V1"],
      ["___ I open the window?", "Could", ["Am", "Does"], "ขออนุญาตอย่างสุภาพ → Could I…?"]
    ] },
  { id: "g12", level: "cefr-B1", emoji: "🔀", title: "Conditionals (Zero, First, Second)",
    tips: ["Zero: If + present, present → ความจริงเสมอ", "First: If + present simple, <b>will</b> + V1 → เป็นไปได้จริงในอนาคต", "Second: If + past simple, <b>would</b> + V1 → สมมติ ไม่จริงในปัจจุบัน", "If I <b>were</b> you… (ใช้ were ได้กับทุกประธาน)"],
    examples: ["If you heat water, it boils.", "If it rains, I will stay home.", "If I had wings, I would fly."],
    qs: [
      ["If it rains tomorrow, we ___ at home.", "will stay", ["would stayed", "stay will"], "เป็นไปได้จริง → First conditional: will + V1"],
      ["If I ___ rich, I would buy a big house.", "were", ["am", "will be"], "สมมติ + would → Second conditional: were"],
      ["If you heat ice, it ___.", "melts", ["melted", "would melted"], "ความจริงเสมอ → Zero conditional"],
      ["If I were you, I ___ apologise.", "would", ["will", "did"], "If I were you → would + V1"],
      ["If she ___ hard, she will pass the exam.", "studies", ["will study", "studied"], "First conditional: If + present simple (ไม่ใช้ will หลัง if)"],
      ["What would you do if you ___ a million baht?", "won", ["win", "will win"], "would → Second conditional: if + past simple"]
    ] },
  { id: "g13", level: "cefr-B1", emoji: "🏭", title: "Passive Voice",
    tips: ["โครงสร้าง: <b>be + V3</b>", "Present: is / are made · Past: was / were built", "Future: will be done · Present Perfect: has / have been sold", "ใช้เมื่อผู้กระทำไม่สำคัญ หรือไม่รู้ว่าใครทำ (ใช้บ่อยใน IELTS Writing Task 1 แบบ process)"],
    examples: ["Coffee is grown in Brazil.", "The Eiffel Tower was built in 1889.", "The results will be published tomorrow."],
    qs: [
      ["English ___ all over the world.", "is spoken", ["speaks", "is speak"], "ภาษาถูกพูด → is + V3 (spoken)"],
      ["This bridge ___ in 1932.", "was built", ["is built", "built"], "อดีต + ถูกกระทำ → was built"],
      ["The letters ___ yesterday.", "were sent", ["was sent", "sent"], "letters (พหูพจน์) + อดีต → were sent"],
      ["The results ___ announced next week.", "will be", ["will", "will been"], "อนาคต + passive → will be + V3"],
      ["Thousands of cars ___ in this factory every year.", "are produced", ["produce", "are produce"], "รถถูกผลิต → are + V3"],
      ["Rice ___ by farmers in many parts of Asia.", "is grown", ["grows", "is grow"], "by farmers = มีผู้กระทำ → passive: is grown"]
    ] },
  { id: "g14", level: "cefr-B2", emoji: "🔗", title: "Relative Clauses (who / which / whose / where / when)",
    tips: ["<b>who</b> = คน · <b>which</b> = สิ่งของหรือสัตว์ · <b>that</b> = ใช้แทนได้ทั้งคู่ (เฉพาะแบบไม่มี comma)", "<b>whose</b> = ของ… (บอกความเป็นเจ้าของ)", "<b>where</b> = สถานที่ · <b>when</b> = เวลา", "แบบมี comma (non-defining) ห้ามใช้ that"],
    examples: ["The man who called you is my uncle.", "This is the house where I grew up.", "My sister, who lives in Paris, is a chef."],
    qs: [
      ["The woman ___ lives next door is a nurse.", "who", ["which", "whose"], "woman เป็นคน → who"],
      ["This is the book ___ I told you about.", "which", ["who", "where"], "book เป็นสิ่งของ → which"],
      ["That's the man ___ car was stolen.", "whose", ["who", "which"], "รถของผู้ชายคนนั้น → whose"],
      ["This is the restaurant ___ we had our first date.", "where", ["which", "who"], "สถานที่ + ประโยคสมบูรณ์ตามหลัง → where"],
      ["My brother, ___ lives in Canada, is an engineer.", "who", ["that", "which"], "มี comma → ห้ามใช้ that, คน → who"],
      ["I'll never forget the day ___ I met you.", "when", ["where", "who"], "the day = เวลา → when"]
    ] },
  { id: "g15", level: "cefr-B2", emoji: "🗨️", title: "Reported Speech",
    tips: ["ถอยกาลหนึ่งขั้น: am/is → was · will → would · can → could · present → past", "เปลี่ยนคำบอกเวลา: today → that day · tomorrow → the next day", "<b>said</b> (that)… · <b>told</b> + คน + (that)…", "คำถาม: asked if / whether… และเรียง <b>ประธาน + กริยา</b> (ไม่สลับแบบคำถาม)"],
    examples: ["He said that he was busy.", "She told me that she could drive.", "They asked where I lived."],
    qs: [
      ["Yesterday she said, 'I am tired.' → Yesterday she said that she ___ tired.", "was", ["is", "were"], "ถอยกาล am → was"],
      ["He said, 'I will call you tomorrow.' → He said he ___ call me the next day.", "would", ["will", "can"], "ถอยกาล will → would"],
      ["Tom ___ me that he was busy.", "told", ["said", "spoke"], "มีผู้ฟัง (me) ตามหลัง → told"],
      ["She asked me where ___.", "I lived", ["did I live", "do I live"], "คำถามในประโยครายงาน → ประธาน + กริยา"],
      ["He asked ___ I liked coffee.", "if", ["that", "what"], "คำถาม Yes/No → asked if"],
      ["She said, 'I can swim.' → She said that she ___ swim.", "could", ["can to", "could to"], "ถอยกาล can → could + V1"]
    ] },
  { id: "g16", level: "cefr-B2", emoji: "😔", title: "Third Conditional & wish",
    tips: ["Third: If + <b>had + V3</b>, <b>would have + V3</b> → สมมติเรื่องในอดีตที่ไม่ได้เกิดขึ้นจริง", "wish + past simple → อยากให้ตอนนี้ต่างไปจากที่เป็น", "wish + past perfect → เสียดายเรื่องที่เกิดขึ้นแล้วในอดีต", "wish + could → อยากทำได้"],
    examples: ["If I had known, I would have helped.", "I wish I had more time.", "I wish I hadn't said that."],
    qs: [
      ["If I had studied harder, I ___ the exam.", "would have passed", ["would pass", "will pass"], "Third conditional → would have + V3"],
      ["If she ___ the bus, she wouldn't have been late.", "hadn't missed", ["didn't miss", "hasn't missed"], "Third conditional: If + had + V3"],
      ["I wish I ___ taller.", "were", ["am", "will be"], "wish + ปัจจุบัน → past simple (were)"],
      ["I wish I ___ to the party last night. It sounds like it was fun.", "had gone", ["went", "have gone"], "เสียดายเรื่องเมื่อคืน → wish + past perfect"],
      ["If we had left earlier, we ___ the train.", "would have caught", ["would catch", "had caught"], "Third conditional → would have + V3"],
      ["I wish I ___ speak French.", "could", ["can", "will"], "wish + ความสามารถ → could"]
    ] },
  { id: "g17", level: "cefr-C1", emoji: "🧷", title: "Linking Words (สำคัญมากสำหรับ IELTS Writing)",
    tips: ["ขัดแย้ง: <b>although / though</b> + ประโยค · <b>despite / in spite of</b> + คำนาม หรือ V-ing", "<b>However,</b> ขึ้นต้นประโยคใหม่ และตามด้วย comma", "<b>whereas</b> = ในขณะที่ (เปรียบเทียบสองฝั่ง)", "เหตุผล: because + ประโยค · because of / due to + คำนาม", "ผลลัพธ์: therefore, as a result, consequently"],
    examples: ["Although it was late, we kept working.", "Despite the cost, the plan was approved.", "Prices rose. As a result, demand fell."],
    qs: [
      ["___ it was raining, we went for a walk.", "Although", ["Despite", "However"], "ตามด้วยประโยค (it was raining) → Although"],
      ["___ the rain, we went for a walk.", "Despite", ["Although", "However"], "ตามด้วยคำนาม (the rain) → Despite"],
      ["The flight was cancelled ___ bad weather.", "due to", ["because", "although"], "ตามด้วยคำนาม → due to"],
      ["Prices rose sharply. ___, sales fell.", "As a result", ["Although", "Despite"], "บอกผลลัพธ์ + comma → As a result"],
      ["She is rich. ___, she is not happy.", "However", ["Although", "Despite"], "ขัดแย้ง + ขึ้นประโยคใหม่ + comma → However"],
      ["Some people prefer cities, ___ others prefer the countryside.", "whereas", ["despite", "therefore"], "เปรียบเทียบสองกลุ่ม → whereas"]
    ] },
  { id: "g18", level: "cefr-C1", emoji: "🔃", title: "Inversion (การสลับประธานเพื่อเน้น)",
    tips: ["Never / Rarely / Seldom + <b>กริยาช่วย + ประธาน</b>", "Not only + กริยาช่วย + ประธาน …, but … also …", "No sooner had … <b>than</b> … · Hardly had … <b>when</b> …", "Only when / Only then + กริยาช่วย + ประธาน", "Should you… = If you should… (ทางการ)"],
    examples: ["Never have I seen such a mess.", "Not only is she smart, but she is also kind.", "Should you have any questions, please ask."],
    qs: [
      ["Never ___ such a beautiful sunset.", "have I seen", ["I have seen", "I saw"], "Never ขึ้นต้น → กริยาช่วยมาก่อนประธาน"],
      ["Not only ___ late, but he also forgot his books.", "was he", ["he was", "he is"], "Not only ขึ้นต้น → สลับ: was he"],
      ["No sooner had we arrived ___ it started to rain.", "than", ["when", "that"], "No sooner … than (คู่ตายตัว)"],
      ["Rarely ___ to the cinema these days.", "do we go", ["we go", "we do go"], "Rarely ขึ้นต้น → do + ประธาน + V1"],
      ["___ you need any help, please call me.", "Should", ["If should", "Would"], "Should you… = If you need…"],
      ["Only when I got home ___ that I had lost my wallet.", "did I realise", ["I realised", "I did realise"], "Only when … → สลับในประโยคหลัก: did I realise"]
    ] }
];

(function () {
  let G = null;
  document.head.insertAdjacentHTML('beforeend', `<style>
.g-blank{display:inline-block;min-width:80px;border-bottom:3px dashed var(--p);color:transparent}
.g-tips{list-style:none;text-align:left;margin:10px 0}
.g-tips li{background:#f5f3ff;border-radius:12px;padding:8px 12px;margin-bottom:8px;line-height:1.6}
.g-ex{list-style:none;text-align:left;margin-bottom:6px}
.g-ex li{font-family:Georgia,'Times New Roman',serif;font-style:italic;padding:6px 0;border-bottom:1px dashed #e5e0ff}
</style>`);

  const okNum = v => typeof v === 'number' && isFinite(v);
  const best = () => {
    if (!S.grammarBest || typeof S.grammarBest !== 'object' || Array.isArray(S.grammarBest)) S.grammarBest = {};
    return S.grammarBest;
  };
  const blank = s => s.replace('___', '<span class="g-blank">_____</span>');
  const getG = id => GRAMMAR.find(t => t.id === id);
  const lvl = t => getLevel(t.level) || { id: '', name: t.level, color: '#6a5cff' };

  /* ---------- ปุ่มบนหน้าแรก ---------- */
  function banner() {
    const rb = $('#reviewBtn');
    if (!rb || $('#grammarBtn')) return;
    const b = best(), done = GRAMMAR.filter(t => okNum(b[t.id])).length;
    rb.insertAdjacentHTML('afterend', `<button class="review-banner" id="grammarBtn">
      <span class="rb-emoji">📘</span>
      <span><b>ไวยากรณ์ (Grammar)</b><br><small class="muted">${GRAMMAR.length} บท A1–C1 · ทำแล้ว ${done} บท</small></span>
    </button>`);
    $('#grammarBtn').onclick = renderList;
  }

  /* ---------- รายการบท ---------- */
  function renderList() {
    view = 'glist'; cleanup(); G = null;
    const b = best(), levels = [];
    GRAMMAR.forEach(t => { if (!levels.includes(t.level)) levels.push(t.level); });
    app.innerHTML = `
      <button class="back" id="gHome">← หน้าหลัก</button>
      <div class="card center"><div class="big-emoji">📘</div><h2>ไวยากรณ์ (Grammar)</h2>
        <p class="muted">อ่านสรุปสั้น ๆ แล้วทำแบบฝึกหัด · ตอบถูกข้อละ +10 XP · ได้เต็มรับโบนัส +20 XP</p></div>
      ${levels.map(k => {
        const L = getLevel(k);
        return `<h3 class="section-title">${L ? L.name : k}</h3><div class="grid">${GRAMMAR.filter(t => t.level === k).map(t => `
          <button class="level-card" data-gid="${t.id}" style="--c:${lvl(t).color}">
            <span class="lv-top"><span class="lv-id">${t.emoji}</span><span class="lv-tier">${okNum(b[t.id]) ? '🏅 ' + b[t.id] + '%' : '🆕 ใหม่'}</span></span>
            <span class="lv-name">${t.title}</span>
            <span class="lv-desc">${t.qs.length} ข้อ</span>
          </button>`).join('')}</div>`;
      }).join('')}`;
    $('#gHome').onclick = () => renderHome();
    on('.level-card[data-gid]', e => renderLesson(e.currentTarget.dataset.gid));
  }

  /* ---------- หน้าสรุปบทเรียน ---------- */
  function renderLesson(id) {
    const t = getG(id);
    if (!t) return renderList();
    view = 'glesson'; cleanup(); G = null;
    app.innerHTML = `
      <button class="back" id="gBack">← ไวยากรณ์</button>
      <div class="card">
        <div class="center"><div class="big-emoji">${t.emoji}</div><h2>${t.title}</h2><p class="muted">ระดับ ${lvl(t).id}</p></div>
        <h3 style="margin-top:14px">📌 สรุปกฎ</h3>
        <ul class="g-tips">${t.tips.map(x => `<li>${x}</li>`).join('')}</ul>
        <h3 style="margin-top:14px">💬 ตัวอย่าง</h3>
        <ul class="g-ex">${t.examples.map(x => `<li>${x}</li>`).join('')}</ul>
        <button class="btn primary next" id="gStart">✏️ เริ่มทำแบบฝึกหัด ${t.qs.length} ข้อ</button>
      </div>`;
    $('#gBack').onclick = renderList;
    $('#gStart').onclick = () => start(id);
  }

  /* ---------- แบบฝึกหัด ---------- */
  function start(id) {
    const t = getG(id);
    if (!t) return renderList();
    view = 'gquiz'; cleanup();
    G = { t, i: 0, correct: 0, locked: false, answers: [], maxCombo: 0,
      list: shuffle(t.qs).map(q => ({ q: q[0], ans: q[1], opts: shuffle([q[1]].concat(q[2])), ex: q[3] })) };
    renderQ();
  }
  function renderQ() {
    const q = G.list[G.i];
    app.innerHTML = `
      <div class="quiz-head">
        <button class="back" id="gQuit">✖</button>
        <div class="bar quiz-bar"><div class="fill" style="width:${G.i / G.list.length * 100}%"></div></div>
        <span class="q-count">${G.i + 1}/${G.list.length}</span>
      </div>
      <div class="card q-card">
        <div class="q-label">✏️ ${G.t.title} · เลือกคำที่ถูกต้อง</div>
        <div class="q-prompt"><div class="q-sentence">${blank(q.q)}</div></div>
        <div class="options">${q.opts.map((o, i) => `<button class="opt" data-o="${i}"><span class="opt-key">${i + 1}</span>${o}</button>`).join('')}</div>
        <div class="feedback" id="feedback"></div>
      </div>`;
    $('#gQuit').onclick = () => renderLesson(G.t.id);
    on('.opt', e => answer(+e.currentTarget.dataset.o, e));
  }
  function answer(i, evt) {
    if (!G || G.locked) return;
    G.locked = true;
    const q = G.list[G.i], ok = q.opts[i] === q.ans;
    G.answers[G.i] = { chosen: q.opts[i], ok };
    const btns = [...app.querySelectorAll('.opt')];
    btns.forEach((b, j) => { b.disabled = true; if (q.opts[j] === q.ans) b.classList.add('correct'); });
    const fb = $('#feedback');
    const x = (evt && evt.clientX) || innerWidth / 2, y = (evt && evt.clientY) || innerHeight / 2;
    if (ok) {
      G.correct++; combo++; G.maxCombo = Math.max(G.maxCombo, combo);
      if (combo >= 3 && combo % 3 === 0) { sfx('combo'); confetti(120, x, y); } else { sfx('good'); confetti(45, x, y); }
      addXP(G.t.level, 10, evt);
      unlock('first'); if (combo >= 5) unlock('combo5'); if (combo >= 10) unlock('combo10');
      fb.innerHTML = `<span class="good">${pick(PRAISE)}</span>${combo >= 3 ? `<span class="combo-tag">🔥 คอมโบ x${combo}</span>` : ''}`;
    } else {
      combo = 0; updateHeader();
      btns[i].classList.add('wrong'); sfx('bad');
      const card = $('.q-card'); card.classList.remove('shake'); void card.offsetWidth; card.classList.add('shake');
      fb.innerHTML = `<span class="bad">${pick(OOPS)}</span>`;
    }
    fb.insertAdjacentHTML('beforeend', `<div class="explain">✅ <b>${q.ans}</b> · ${q.ex}</div>
      <button class="btn primary next" id="gNext">${G.i + 1 < G.list.length ? 'ข้อต่อไป ➜ (Enter)' : 'ดูผลลัพธ์ 🎉'}</button>`);
    $('#gNext').onclick = next;
  }
  function next() {
    if (!G || !G.locked) return;
    G.locked = false; G.i++;
    if (G.i >= G.list.length) finish(); else renderQ();
  }
  function finish() {
    const R = G; G = null; view = 'result';
    const total = R.list.length, pct = Math.round(R.correct / total * 100), b = best();
    let gained = R.correct * 10;
    if (pct === 100) { addXP(R.t.level, 20); gained += 20; }
    b[R.t.id] = Math.max(okNum(b[R.t.id]) ? b[R.t.id] : 0, pct); save();
    if (pct >= 60) { confetti(220); sfx('level'); }
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0;
    const face = pct >= 90 ? '🏆' : pct >= 70 ? '🤩' : pct >= 40 ? '🙂' : '💪';
    app.innerHTML = `<div class="card result">
      <div class="big-emoji">${face}</div>
      <div class="stars">${'⭐'.repeat(stars)}<span class="dim">${'⭐'.repeat(3 - stars)}</span></div>
      <div class="score">${R.correct}/${total} <small>(${pct}%)</small></div>
      <p>ได้รับ <b>+${gained} XP</b>${pct === 100 ? ' (รวมโบนัส Perfect +20)' : ''} · คอมโบสูงสุด ${R.maxCombo} 🔥</p>
      <p class="verdict">${pct === 100 ? '🌟 เข้าใจบทนี้ครบแล้ว!' : pct >= 70 ? '💪 เกือบครบ! ลองอ่านสรุปกฎอีกรอบ' : '📚 กลับไปอ่านสรุปกฎ แล้วลองใหม่นะ'}</p>
      <div class="result-btns">
        <button class="btn primary" id="gAgain">🔁 ทำอีกครั้ง</button>
        <button class="btn ghost" id="gList">📘 บทอื่น</button>
      </div>
      <div class="review"><h3>📋 ทบทวนคำตอบ</h3>${R.list.map((q, i) => {
        const a = R.answers[i], ok = !!(a && a.ok);
        return `<div class="review-item ${ok ? '' : 'no'}">${ok ? '✅' : '❌'} ${blank(q.q).replace('_____', q.ans)}${a && !a.ok ? ` <small>(คุณตอบ: ${a.chosen})</small>` : ''}<div class="ans-line">${q.ex}</div></div>`;
      }).join('')}</div>
    </div>`;
    window.scrollTo(0, 0);
    $('#gAgain').onclick = () => start(R.t.id);
    $('#gList').onclick = renderList;
  }

  /* ---------- คีย์บอร์ด: 1–4 เลือกคำตอบ, Enter ข้อต่อไป ---------- */
  document.addEventListener('keydown', e => {
    if (view !== 'gquiz' || !G) return;
    if (!G.locked && /^[1-4]$/.test(e.key)) {
      const b = app.querySelector(`.opt[data-o="${+e.key - 1}"]`);
      if (b) b.click();
    } else if (G.locked && e.key === 'Enter') { e.preventDefault(); next(); }
  });

  /* ---------- เพิ่มปุ่ม Grammar ในหน้าแรก (ไม่ต้องแก้ app.js) ---------- */
  const baseHome = renderHome;
  renderHome = function () { G = null; baseHome(); banner(); };
  if (view === 'home') banner();

  /* ---------- ตรวจข้อมูล (ดูใน Console / F12) ---------- */
  const bad = [], ids = new Set();
  GRAMMAR.forEach(t => {
    if (ids.has(t.id)) bad.push(`${t.id}: id ซ้ำ`); ids.add(t.id);
    if (!getLevel(t.level)) bad.push(`${t.id}: ไม่มีระดับ ${t.level}`);
    t.qs.forEach((q, i) => {
      if (q[0].split('___').length !== 2) bad.push(`${t.id} ข้อ ${i + 1}: ต้องมี ___ หนึ่งจุด`);
      if (!Array.isArray(q[2]) || q[2].length < 1 || q[2].length > 3 || q[2].includes(q[1])) bad.push(`${t.id} ข้อ ${i + 1}: ตัวเลือกผิดรูปแบบ`);
    });
  });
  const nQ = GRAMMAR.reduce((a, t) => a + t.qs.length, 0);
  if (bad.length) console.warn('⚠️ Grammar พบปัญหา:\n' + bad.join('\n'));
  else console.log(`✅ Grammar: ${GRAMMAR.length} บท · ${nQ} ข้อ ผ่านการตรวจ`);
})();