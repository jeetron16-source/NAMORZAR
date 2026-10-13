/* =========================================================
   PREPTRON — NEET BOOKS
   Only edit THIS file to add / change / remove NEET books.
   Copy one { ... } book block, paste it inside books:[ ], change the
   fields, keep a comma between books. Keep every id unique.
   ========================================================= */
window.EBOOKS_PARTS.neet = {
  title:"NEET",
  icon:"ph-heartbeat",
  subtitle:"Medical entrance preparation",
  types:{
    module:{ title:"Module", icon:"ph-stack", subtitle:"Complete study modules", books:[] },
    standard:{
      title:"Standard Book",
      icon:"ph-book-open-text",
      subtitle:"Reference textbooks",
      books:[
        {
          id:"dcpandey",
          title:"Objective Physics (Vol. 1 & 2) for NEET 2027",
          author:"DC Pandey (Arihant)",
          image:"dcpandey.jpg",
          description:"Medico Achiever's Series with PYQs synced modular theory and 3000+ MCQs for practice, with free online support.",
          tags:["NEET","Physics","Vol. 1 & 2","MCQs"],
          telegramLink:"https://t.me/PREPtRON123_bot?start=BQADAQADuwwAAkZtcUYJsnvHXVJNQhYE"
        },
        {
          id:"seep360",
          title:"360 NCERT Biology for NEET (UG) — Class XI & XII",
          author:"Seep Pahuja (Disha)",
          image:"seep360.jpg",
          description:"5700+ chapterwise and topicwise questions, topic-wise PYQs (2022–2013), simplified NCERT line-by-line MCQs and concept mind maps for quick revision.",
          tags:["NEET","Biology","NCERT","MCQs"],
          telegramLink:"https://t.me/PREPtRON123_bot?start=BQADAQADtQwAAkZtcUbPe1Dak77QRBYE"
        }
      ]
    },
    pyq:{
      title:"PYQ",
      icon:"ph-clipboard-text",
      subtitle:"Previous year questions",
      books:[
        {
          id:"rakshita37",
          title:"37 Years NEET PYQ — Physics, Chemistry & Biology",
          author:"Rakshita Singh (Educart)",
          image:"rakshita37.jpg",
          description:"37 years of NEET previous year questions (2024–1988) with detailed explanations and NCERT-based theory for Physics, Chemistry and Biology.",
          tags:["NEET","PYQ","PCB","37 Years"],
          telegramLink:"https://t.me/PREPtRON123_bot?start=BQADAQADuAwAAkZtcUYjoDtb7Lkt4BYE"
        }
      ]
    },
    medeasy:{ title:"MedEasy", icon:"ph-first-aid-kit", subtitle:"MedEasy notes", books:[] },
    pwbook:{ title:"PW Book", icon:"ph-graduation-cap", subtitle:"Physics Wallah material", books:[] }
  }
};
