// ai.js - PROFESSIONAL AI REMINDER ENGINE
// Handles ANY task users throw at it!
// UPGRADED: Now sounds like a real friend (Yamf style)

const AI = {
    ready: true,
    users: {},
    
    // ===========================================
    // COMPLETE TASK CATEGORIES (KEPT YOURS)
    // ===========================================
    categories: {
        // EDUCATION
        exam: ['exam', 'test', 'quiz', 'midterm', 'final', 'sat', 'act', 'gre', 'certification', 'assessment'],
        homework: ['homework', 'assignment', 'problem set', 'worksheet', 'exercises'],
        study: ['study', 'review', 'memorize', 'flashcards', 'read chapter', 'textbook'],
        essay: ['essay', 'paper', 'thesis', 'dissertation', 'research paper', 'write up'],
        project: ['project', 'capstone', 'portfolio', 'presentation', 'slides', 'demo'],
        lab: ['lab', 'experiment', 'report', 'scientific', 'research'],
        
        // SUBJECTS
        math: ['math', 'mathematics', 'algebra', 'calculus', 'geometry', 'trigonometry', 'arithmetic'],
        science: ['science', 'biology', 'chemistry', 'physics', 'astronomy', 'earth science'],
        filipino: ['filipino', 'tagalog', 'philippine', 'wikang', 'panitikan'],
        english: ['english', 'grammar', 'literature', 'writing', 'reading', 'vocabulary'],
        history: ['history', 'social studies', 'geography', 'politics', 'government', 'civics', 'rizal', 'jose rizal', 'dr. rizal', 'noli', 'fili', 'el filibusterismo', 'noli me tangere'],
        computer: ['it', 'programming', 'coding', 'web', 'software', 'developer', 'computer', 'html', 'css', 'javascript', 'react', 'app', 'mobile', 'database', 'backend', 'frontend', 'fullstack', 'api', 'algorithm'],
        
        // WORK
        meeting: ['meeting', 'call', 'sync', 'standup', 'conference', 'webinar', 'zoom'],
        deadline: ['deadline', 'due', 'deliver', 'submit', 'milestone', 'release'],
        presentation: ['presentation', 'pitch', 'deck', 'talk', 'speak', 'present'],
        client: ['client', 'customer', 'stakeholder', 'vendor'],
        email: ['email', 'inbox', 'outreach', 'follow-up', 'respond'],
        interview: ['interview', 'job', 'hiring', 'recruiter', 'application'],
        
        // HEALTH
        workout: ['workout', 'gym', 'exercise', 'run', 'jog', 'cardio', 'lift', 'fitness'],
        yoga: ['yoga', 'pilates', 'stretch', 'flexibility', 'meditation', 'breathe'],
        doctor: ['doctor', 'dentist', 'appointment', 'checkup', 'physical', 'therapy'],
        medication: ['medication', 'pill', 'medicine', 'prescription', 'vitamin', 'supplement'],
        water: ['water', 'hydrate', 'drink'],
        sleep: ['sleep', 'bed', 'nap', 'rest', 'asleep'],
        
        // PERSONAL CARE
        shower: ['shower', 'bath', 'wash', 'clean up'],
        skincare: ['skincare', 'moisturizer', 'face wash', 'sunscreen'],
        haircut: ['haircut', 'barber', 'salon', 'hair appointment'],
        
        // HOUSEHOLD
        groceries: ['grocery', 'food shopping', 'supermarket', 'store'],
        cook: ['cook', 'meal prep', 'dinner', 'lunch', 'breakfast', 'bake'],
        clean: ['clean', 'tidy', 'organize', 'declutter', 'laundry', 'dishes', 'vacuum'],
        trash: ['trash', 'garbage', 'recycle', 'take out'],
        yard: ['yard', 'garden', 'lawn', 'plants', 'water plants', 'mow'],
        repair: ['fix', 'repair', 'maintenance', 'plumbing', 'electrical', 'broken'],
        
        // FINANCE
        bills: ['bill', 'pay', 'rent', 'mortgage', 'utilities', 'subscription'],
        budget: ['budget', 'finance', 'money', 'saving', 'expenses'],
        bank: ['bank', 'transfer', 'deposit', 'withdraw', 'atm'],
        tax: ['tax', 'irs', 'return', 'filing'],
        
        // SOCIAL
        call: ['call', 'phone', 'facetime', 'skype', 'zoom call'],
        message: ['text', 'message', 'whatsapp', 'reply'],
        birthday: ['birthday', 'bday', 'birth anniversary'],
        anniversary: ['anniversary', 'wedding'],
        gift: ['gift', 'present', 'buy for'],
        party: ['party', 'celebration', 'gathering', 'get together'],
        date: ['date night', 'romantic', 'girlfriend', 'boyfriend', 'partner'],
        
        // PETS
        pet_feed: ['feed pet', 'dog food', 'cat food', 'pet care'],
        pet_walk: ['walk dog', 'dog walk', 'walk the dog'],
        pet_vet: ['vet', 'veterinarian', 'pet appointment'],
        
        // IMPORTANT MILESTONES
        birthday_18: ['18th birthday', '18 birthday', 'turn 18'],
        birthday_21: ['21st birthday', '21 birthday', 'turn 21'],
        birthday_30: ['30th birthday', '30 birthday', 'turn 30'],
        birthday_40: ['40th birthday', '40 birthday', 'turn 40'],
        birthday_50: ['50th birthday', '50 birthday', 'turn 50'],
        birthday_60: ['60th birthday', '60 birthday', 'turn 60'],
        graduation: ['graduation', 'graduate'],
        wedding: ['wedding', 'get married', 'marriage'],
        
        // TRAVEL
        flight: ['flight', 'airplane', 'airport', 'boarding', 'travel'],
        hotel: ['hotel', 'booking', 'accommodation', 'check in'],
        pack: ['pack', 'luggage', 'suitcase', 'bag'],
        passport: ['passport', 'visa', 'travel documents'],
        
        // HOBBIES
        read: ['read', 'book', 'chapter', 'pages'],
        write: ['write', 'journal', 'blog', 'story'],
        art: ['draw', 'paint', 'sketch', 'art', 'creative'],
        music: ['practice guitar', 'practice piano', 'music lesson', 'instrument'],
        game: ['game', 'gaming', 'play'],
        
        // FORGOTTEN BASICS
        charge: ['charge', 'battery', 'plug in'],
        backup: ['backup', 'save', 'cloud'],
        update: ['update', 'upgrade', 'software'],
        password: ['password', 'change password', 'reset password'],
        
        // DEFAULT
        default: []
    },
    
    // ===========================================
    // COMPLETE MOTIVATION TEMPLATES (KEPT YOURS)
    // ===========================================
    templates: {
        // EDUCATION
        exam: [
            "📚 You've prepared for this! Trust your preparation",
            "🧘 Stay calm and focused. You know this material!",
            "⏰ This exam is just a moment in time",
            "💪 Give it your best and keep moving forward!",
            "🌬️ Breathe deep. You know more than you think",
            "🧠 Your brain has got this. Trust yourself!",
            "🎯 One question at a time. Stay focused",
            "✨ You've got this! Victory is within reach!",
            "🌟 Future you will be so proud",
            "🙌 Of how you handled this challenge!"
        ],
        
        homework: [
            "📝 Progress > perfection. Just get started now",
            "⚡ Every problem solved builds your brain power!",
            "🧠 Every exercise makes you smarter",
            "💪 Keep pushing forward, you're growing!",
            "✅ Done is better than perfect. Start now",
            "🎨 You can always refine and improve later!",
            "⏱️ 30 minutes of focus now",
            "😌 Equals relief and peace of mind later!"
        ],
        
        study: [
            "💪 Your brain is like a muscle",
            "📖 This study session is your workout!",
            "📚 Every page you read makes you smarter",
            "📈 Than yesterday. Keep that momentum!",
            "🌟 Future you will thank you",
            "🙏 For this dedicated study session!",
            "🧩 Small study sessions add up",
            "🎓 To big knowledge. Keep stacking!"
        ],
        
        essay: [
            "🗣️ Your voice matters. Let it flow",
            "📝 Onto the page without fear!",
            "✍️ First draft = just get ideas down",
            "🔄 Editing comes later. Write now!",
            "📄 Every great writer started blank",
            "🚀 Start typing. Your story awaits!",
            "💫 Your perspective is unique",
            "🌟 Share it with the world!"
        ],
        
        project: [
            "🏗️ This project shows your capability",
            "⭐ Make yourself proud with this one!",
            "🧩 Break it into small pieces",
            "⚔️ Then conquer each piece one by one!",
            "🤝 Your future self is counting",
            "⏰ On you to finish this strong!",
            "🎨 This is going to be amazing",
            "✨ When it's done. Keep creating!"
        ],
        
        portfolio: [
            "💼 Your portfolio = your future",
            "🎯 Make every piece count toward it!",
            "🚀 This isn't just a task",
            "🏆 This is your career taking shape!",
            "👀 Show them what you've got",
            "💪 Your skills deserve the spotlight!",
            "⭐ Quality work right now",
            "🔓 Equals opportunities coming later!"
        ],
        
        lab: [
            "🔬 Science happens step by step",
            "🧪 Follow the process and trust it!",
            "💡 Every experiment teaches something",
            "🎓 Even the 'failures' teach lessons!",
            "🤔 You're literally discovering",
            "🌍 How things work. That's awesome!"
        ],
        
        // ===== SUBJECT TEMPLATES =====
        math: [
            "🧮 Numbers are your friends!",
            "🔢 Solve one problem at a time - you'll get there!",
            "📐 Math is like a puzzle",
            "🧩 Every step brings you closer to the solution!",
            "✖️ You've got the formula for success",
            "➗ Divide and conquer each problem!",
            "📊 Math builds your brain muscles",
            "💪 Every equation makes you stronger!",
            "🔢 The answer is waiting for you",
            "🧠 Trust your calculations - you know this!",
            "📏 Think logically, solve systematically",
            "🎯 You're training your problem-solving superpower!",
            "➕ One plus one equals progress",
            "✨ Every problem solved is a victory!",
            "📐 Angles, equations, and solutions",
            "🌟 You've got everything you need to succeed!"
        ],
        
        science: [
            "🔬 Science is discovery in action",
            "🧪 Every experiment teaches you something new!",
            "🌍 You're learning how the world works",
            "✨ That's the coolest thing ever!",
            "🧬 Science is curiosity in motion",
            "🔭 Keep asking 'why' and you'll find answers!",
            "⚛️ Atoms to galaxies, you're exploring it all",
            "🚀 What an amazing journey!",
            "🧫 The scientific method works",
            "📝 Hypothesis, test, learn, repeat - you've got this!",
            "🌡️ Science isn't just facts",
            "💡 It's understanding the magic of our world!",
            "🔬 Every great scientist started here",
            "🌟 You're on your way to discoveries!",
            "🧪 Stay curious, stay questioning",
            "🔍 The answers are waiting for you!"
        ],
        
        filipino: [
            "🇵🇭 Ang wika ay kayamanan",
            "📖 Mahalin ang sariling atin!",
            "📚 Ang Filipino ay puso ng kultura",
            "💖 Ipagmalaki ang ating wika!",
            "✍️ Bawat salita ay may saysay",
            "🌟 Isulat ang iyong mga kwento!",
            "🇵🇭 Ang pag-aaral ng Filipino",
            "🎓 Ay pagmamahal sa bayan!",
            "📖 Ang literatura ay buhay",
            "✨ Damhin ang bawat kwento!",
            "💬 Ang wika ay tulay",
            "🌉 Tulay tungo sa ating pagkakakilanlan!",
            "🎭 Ang kultura natin ay mayaman",
            "🌟 Ipagmalaki sa bawat salita!",
            "📝 Maging matatas sa Filipino",
            "💪 Ikaw ay kayang-kaya!"
        ],
        
        english: [
            "📖 Words are your superpower",
            "✍️ Every sentence builds your voice!",
            "🗣️ Speak with confidence",
            "💬 Your thoughts deserve to be heard!",
            "📚 Reading opens new worlds",
            "🌍 Every page is an adventure!",
            "✍️ Your words have power",
            "💪 Use them to express, inspire, and create!",
            "📝 Grammar is your foundation",
            "🏗️ Build strong sentences, build strong ideas!",
            "📖 Stories shape our world",
            "🎭 Your voice matters in every story!",
            "🗣️ Communication is key",
            "🔑 You're unlocking doors with every word!",
            "📚 From Shakespeare to now",
            "✨ Language connects us all!"
        ],
        
        history: [
            "📜 History is our teacher",
            "🏛️ Learn from the past, shape the future!",
            "🌍 You're learning how we got here",
            "🗺️ Every event connects to today!",
            "📚 History is stories of people",
            "👥 Their struggles, triumphs, and lessons!",
            "🏛️ The past has wisdom for you",
            "💡 Learn it, understand it, grow from it!",
            "📖 Dates and events tell a story",
            "🎭 You're reading the greatest story ever told!",
            "🌄 Yesterday shapes tomorrow",
            "🔮 You're part of history too!",
            "📜 Remember, reflect, learn",
            "🌟 History gives us perspective!",
            "🏛️ Great leaders learned from history",
            "👑 You're following in their footsteps!",
            "🇵🇭 Dr. Jose Rizal showed us",
            "💡 That one person CAN change the world!",
            "📖 Noli Me Tangere and El Fili",
            "✨ Are more than books - they're our heritage!",
            "🕯️ Rizal's legacy lives on",
            "🌟 Be inspired by his love for country!",
            "🇵🇭 The pen is mightier than the sword",
            "✍️ Rizal proved this. Your voice matters too!"
        ],
        
        computer: [
            "💻 Code is creativity in action",
            "✨ Every line builds something amazing!",
            "🐛 Bugs are just puzzles to solve",
            "🔧 Debug, learn, and grow stronger!",
            "🚀 You're building the future",
            "💡 Every function, every feature matters!",
            "⌨️ Programming is problem-solving",
            "🧠 You're training your logic superpower!",
            "💾 Keep coding, keep creating",
            "🌟 Your skills will take you far!",
            "🌐 You're learning the language of the future",
            "📱 Every website, every app needs you!",
            "🔨 Break big problems into small pieces",
            "🧩 That's what great developers do!",
            "⚡ Your code has power",
            "✨ Make something amazing today!"
        ],
        
        // WORK (keeping your existing ones)
        meeting: [
            "🗣️ Your voice matters in this meeting",
            "📢 Speak up and share your ideas!",
            "📋 Come prepared, leave impactful",
            "✨ Make your presence count today!",
            "⭐ This is your time to shine",
            "💡 Share your brilliance with them!",
            "👂 Listen actively, contribute thoughtfully",
            "🤝 Great meetings build great teams!"
        ],
        
        deadline: [
            "🏁 Deadlines are finish lines in disguise",
            "🙌 You're almost there! Keep going!",
            "📣 Future you is cheering loudly",
            "🎉 For you to meet this deadline!",
            "💎 Pressure makes diamonds. You've got this",
            "✨ Shine bright under the pressure!",
            "😌 The satisfaction of finishing early",
            "🔥 Is real and it feels amazing!"
        ],
        
        presentation: [
            "🎤 You know your stuff inside out",
            "👏 Now show them what you've got!",
            "🙏 They're rooting for your success",
            "🌬️ Breathe deep and deliver strongly!",
            "⭐ This is your moment to share",
            "💡 Your knowledge and expertise matters!",
            "⚡ Confidence comes from preparation",
            "✅ And you are fully prepared!"
        ],
        
        client: [
            "😊 Happy clients = happy career growth",
            "🤝 Make a great impression always!",
            "👔 You're the expert they hired",
            "💼 Own it with confidence today!",
            "🏗️ Build that relationship one interaction",
            "🌟 One great conversation at a time!"
        ],
        
        email: [
            "📧 Clear communication = fewer problems",
            "🔮 Later on. Write clearly now!",
            "✍️ That email won't write itself",
            "⚡ You've got this. Start typing!",
            "📥 Inbox zero feels absolutely amazing",
            "🔥 Take the first step toward it!"
        ],
        
        interview: [
            "👍 They already like you on paper",
            "✨ Now show them the real you!",
            "💫 Be yourself. True confidence",
            "🌟 Comes from being authentic!",
            "🚪 You belong in that room",
            "🏆 Show them exactly why!",
            "🦋 This could be THE opportunity",
            "🌠 That changes everything. Go get it!"
        ],
        
        // HEALTH
        workout: [
            "🙏 Your future self thanks you",
            "💪 For today's workout session!",
            "💧 Sweat now, shine brighter later",
            "🔥 You're building a better you!",
            "😤 The workout you don't want",
            "💯 Is the one you need most!",
            "🦵 Your body can do hard things",
            "🔨 Prove it to yourself today!",
            "🎯 Every rep brings you closer",
            "⭐ To your goals. Keep pushing!"
        ],
        
        yoga: [
            "🌬️ Breathe in peace and calm",
            "😮‍💨 Breathe out all your stress",
            "🧘 Your mind and body deserve",
            "✨ This moment of reset and care!",
            "🌈 Flexibility isn't just physical",
            "🌱 You're growing in every way!",
            "🎯 Find your inner center",
            "⚔️ Then go conquer your day!"
        ],
        
        doctor: [
            "❤️ Your health is your true wealth",
            "🙌 Show up for yourself today!",
            "🩺 Taking care now prevents problems",
            "🚫 Later on. Future you thanks you!",
            "🌟 Future you will be grateful",
            "🙏 That you went. Do it!"
        ],
        
        medication: [
            "💊 Take care of your body",
            "🏠 It's the only place you live!",
            "📅 Consistency is absolutely key",
            "🙏 Future you thanks you sincerely!",
            "✨ This is self-care in action",
            "💖 You deserve to feel your best!"
        ],
        
        water: [
            "💧 Your body is thirsty now",
            "🧠 Hydrate for better brain focus!",
            "🌊 Water = life. Drink up",
            "💪 Every cell is waiting for this!",
            "🥤 Every cell is calling",
            "💙 For hydration. Answer the call!"
        ],
        
        sleep: [
            "😴 Rest is truly productive too",
            "🧠 Your brain needs this recovery!",
            "🌟 Tomorrow's success depends on",
            "😌 Tonight's quality sleep. Rest well!",
            "💭 Dream big and rest deeply",
            "🌅 Then wake up and achieve!"
        ],
        
        // PERSONAL CARE
        shower: [
            "🚿 Fresh start begins with you",
            "✨ Clean body brings a clear mind!",
            "🧼 You deserve to feel so",
            "💫 Clean and completely refreshed today!"
        ],
        
        skincare: [
            "✨ Your skin works hard daily",
            "💆 Return the favor with care!",
            "🌟 Future you will have glow",
            "✨ Thanks to today's skincare routine!",
            "💖 Self-care isn't ever selfish",
            "💫 It's absolutely necessary. Do it!"
        ],
        
        haircut: [
            "💇 New haircut = new confidence boost",
            "✨ You absolutely deserve this treat!",
            "👀 Look good, feel even better",
            "💪 Then go out and do good!",
            "✂️ Treat yourself to a fresh",
            "🔥 Amazing new look today!"
        ],
        
        // HOUSEHOLD
        groceries: [
            "🛒 A full fridge = happy future you",
            "😋 No more hungry stressful moments!",
            "🥗 Feed your body, fuel your dreams",
            "💪 Healthy food starts with buying it!",
            "🍎 Healthy food starts here",
            "🛍️ With buying it. Shop now!"
        ],
        
        cook: [
            "👨‍🍳 You're nourishing your body AND",
            "💰 Saving money. Total win-win!",
            "❤️ Home cooking = love in every bite",
            "🍽️ Every meal you make matters!",
            "🙏 Future you will be happy",
            "🍱 There's food ready. Cook now!"
        ],
        
        clean: [
            "🧹 A clean space = clear mind",
            "🧠 Ready to focus and conquer!",
            "😊 Future you will walk in",
            "🏠 And smile. Clean it now!",
            "💖 You deserve to live in",
            "✨ A space you truly love!"
        ],
        
        trash: [
            "🗑️ Out with the old stuff",
            "✨ In with the fresh and clean!",
            "👃 Small task right now",
            "🚫 = No bad smells later!",
            "♻️ One bag out the door",
            "🏠 = One step to cleaner home!"
        ],
        
        yard: [
            "🌿 Nature needs your caring touch",
            "🌱 Your plants are patiently waiting!",
            "🌸 A little green care gives",
            "🌺 So much beauty in return!",
            "🌻 Watch amazing things grow",
            "🙌 Because of you. Amazing!"
        ],
        
        repair: [
            "🔧 Fix it right now",
            "😌 Enjoy it working later!",
            "💪 You're handy and capable",
            "🔨 Prove it to yourself today!",
            "🔄 Broken becomes beautiful again",
            "🚀 Let's get it done now!"
        ],
        
        // FINANCE
        bills: [
            "💰 Paid bills = priceless peace",
            "😌 Of mind. Just get it done!",
            "😮‍💨 Future you breathes easier knowing",
            "✅ This is handled. Pay now!",
            "📉 One less thing to worry",
            "📈 About. Pay and move forward!"
        ],
        
        budget: [
            "💵 Your money follows your rules",
            "👑 Take full control starting today!",
            "📊 Every dollar has a job",
            "🎯 Give them their assignments now!",
            "🔓 Financial freedom starts with",
            "📝 Knowing where your money goes!"
        ],
        
        bank: [
            "🏦 Future you thanks you sincerely",
            "🙏 For handling this money matter!",
            "💸 Money moves = life improvements",
            "📈 Stay on top of finances!",
            "📱 Stay on top of finances",
            "💪 You've absolutely got this now!"
        ],
        
        tax: [
            "📋 Taxes are due. Remember",
            "⏰ Future you says just do it!",
            "🏃 The sooner that you file",
            "✅ The sooner it's all over!",
            "👔 Adulting means handling taxes",
            "🌟 You're an adult. Let's go!"
        ],
        
        // SOCIAL
        call: [
            "📞 They miss your wonderful voice",
            "😊 Make their day better today!",
            "⏱️ 5 minutes on the phone now",
            "❤️ = Connection that lasts forever!",
            "💬 Real talk beats text messages",
            "📲 Call them. They're waiting!",
            "🗺️ Distance means absolutely nothing",
            "📱 When you pick up the phone!"
        ],
        
        message: [
            "💬 They're waiting to hear from you",
            "📱 Don't leave them on read now!",
            "⚡ Quick text = big smile",
            "😁 On their face. Send it!",
            "🤝 Stay connected with people",
            "❤️ It truly matters. Reach out!"
        ],
        
        birthday: [
            "🎂 They brought cake into this world",
            "🥳 Celebrate them in a big way!",
            "🎈 Birthdays are precious milestones",
            "🎁 Make theirs extra special today!",
            "🌟 Another year of them being awesome",
            "👏 Let them know you noticed!"
        ],
        
        anniversary: [
            "💕 Love deserves celebration always",
            "🎉 Today is that perfect day!",
            "📅 Another year together means",
            "💪 Another year growing stronger!",
            "🥰 Remember why you fell in love",
            "💖 Celebrate it fully today!"
        ],
        
        gift: [
            "🎁 Finding the perfect gift shows",
            "❤️ Just how much you truly care!",
            "💭 It's not price, it's thought",
            "✨ You've got this. Find it!",
            "😲 Their face when they open",
            "🫶 = Priceless. Make it happen!"
        ],
        
        party: [
            "🥳 Time to celebrate with joy",
            "✨ Good vibes only coming through!",
            "⏳ Life is way too short",
            "🎊 Party hard but stay responsible!",
            "📸 Make amazing memories that'll",
            "😊 Make you smile later. Go!"
        ],
        
        date: [
            "💘 Romance isn't ever dead",
            "❤️ You're keeping it alive today!",
            "⏰ Quality time = quality relationship",
            "💑 Invest in each other now!",
            "📵 Put down the phone and",
            "💞 Focus on each other fully!"
        ],
        
        // PETS
        pet_feed: [
            "🐕 Your fur baby is hungry",
            "⏰ Don't keep them waiting longer!",
            "🦴 That tail wag is worth",
            "❤️ Every single meal. Feed them!",
            "😊 Happy pet = happy life always",
            "🍗 Feed them with extra love!"
        ],
        
        pet_walk: [
            "🦮 They need this walk as much",
            "💪 As you do. Let's go!",
            "🐾 Sniffing all the smells =",
            "🐶 Best day ever for them!",
            "🤝 Walk time = quality bonding time",
            "❤️ With your very best friend!"
        ],
        
        pet_vet: [
            "🏥 Taking care of them means",
            "📅 They'll be with you longer!",
            "🗣️ Your pet can't speak words",
            "🩺 Be their voice at the vet!",
            "🏡 Healthy pet = happy home",
            "❤️ Full of love and joy!"
        ],
        
        // IMPORTANT MILESTONES
        birthday_18: [
            "🎂 18! Adulting officially starts TODAY",
            "🥳 This milestone only happens once!",
            "🎉 Welcome to true adulthood now",
            "🌟 Make this birthday unforgettable!",
            "✨ 18 looks absolutely amazing on you",
            "🌍 The whole world is yours now!",
            "⚖️ Legal adult! Make good choices",
            "🎮 But have lots of fun too!"
        ],
        
        birthday_21: [
            "🍻 21! The big one is here",
            "🎊 Make memories and stay safe!",
            "🔓 Legal age fully unlocked now",
            "🌟 This is YOUR year to shine!",
            "🎂 21 years young and thriving",
            "🎉 Time to celebrate like never before!",
            "⏳ You waited 21 long years",
            "💫 For this. Make every moment count!"
        ],
        
        birthday_30: [
            "🎉 30! Flirty and absolutely thriving",
            "🔥 The best decade yet starts now!",
            "✨ Thirty and thriving beautifully",
            "🚀 You're just getting started now!",
            "💫 30 looks damn good on you",
            "👑 Own it with confidence today!",
            "🎯 Welcome to your 30s where",
            "💪 You know yourself and go for it!"
        ],
        
        birthday_40: [
            "🎊 40! Fabulous and completely fearless",
            "💫 Living your best life now!",
            "✨ 40 and absolutely fine",
            "📈 Life gets better every year!",
            "⚡ Midlife? More like PRIME life",
            "🚀 Let's go make it happen!",
            "🎂 40 years of being awesome",
            "🥳 Celebrate YOU today and always!"
        ],
        
        birthday_50: [
            "🎈 50! Golden years? More like PLATINUM",
            "💎 You're absolutely precious and rare!",
            "🌟 Half a century of YOU",
            "🌍 Making the world so much better!",
            "🎯 50 and still absolutely killing it",
            "🙌 Mad respect for you today!",
            "📅 Age is just a number really",
            "✨ You're completely timeless and amazing!"
        ],
        
        birthday_60: [
            "🎂 60! Legend status fully unlocked now",
            "🏆 You've earned all the celebrations!",
            "🎓 60 years of wisdom and strength",
            "💪 And pure awesomeness. Respect!",
            "🎊 You've earned every celebration",
            "🥳 Let's go all out today!",
            "🎉 60 and still the life",
            "🎈 Of the party. Keep shining!"
        ],
        
        graduation: [
            "🎓 YOU DID IT! All that hard work",
            "📚 Paid off in the best way!",
            "🏅 The tassel was worth the hassle",
            "🎉 Congratulations on this huge achievement!",
            "🚀 This is just the beginning of",
            "📖 Your amazing success story. Go forth!",
            "🌟 Future you is so incredibly proud",
            "🎓 Of graduating you. Well done!"
        ],
        
        wedding: [
            "💍 You're marrying your perfect person",
            "🥂 Best day ever starts right now!",
            "💕 Today, love wins completely and fully",
            "🎊 Enjoy every precious single moment!",
            "🌅 The beginning of your forever starts",
            "💫 Today. Breathe it all in deeply!",
            "❤️ You found your one true person",
            "🥳 Now go celebrate that beautifully!"
        ],
        
        // TRAVEL
        flight: [
            "✈️ Adventure is waiting for you",
            "🌟 Don't miss that important flight!",
            "🛫 The journey finally begins now",
            "📱 Airplane mode on, excitement level max!",
            "🛬 Wheels up to new places",
            "✨ New memories waiting to be made!",
            "🚪 Gate's calling your name now",
            "⏰ Time to fly away and explore!"
        ],
        
        hotel: [
            "🕒 Check-in time = relaxation time",
            "😌 Finally time to unwind and rest!",
            "🏨 Your home away from home",
            "❤️ Is waiting warmly for you!",
            "😴 Rest extremely well tonight",
            "🌅 Then explore even more tomorrow!"
        ],
        
        pack: [
            "🧳 Pack right now, stress later",
            "😮‍💨 So much less to worry about!",
            "👕 Roll, don't fold! You'll thank",
            "🙏 Yourself later. Trust this hack!",
            "⏩ Future you wants everything important",
            "🔋 Don't forget the charger. Pack now!"
        ],
        
        passport: [
            "🛂 Can't go anywhere exciting without it",
            "✅ Don't forget your passport today!",
            "🎫 Your ticket to exploring the world",
            "🔒 Keep it extra safe and secure!",
            "🚫 No passport = absolutely no travel",
            "🔍 Double check you have it NOW!"
        ],
        
        // HOBBIES
        read: [
            "📚 Pages keep turning, worlds keep opening",
            "🌍 Enjoy every single moment of it!",
            "📖 Reading is dreaming with your eyes",
            "✨ Wide open. Immerse yourself fully!",
            "📘 Every single book is a brand",
            "🌟 New adventure. Start reading now!"
        ],
        
        write: [
            "✍️ Your unique story matters deeply",
            "📝 Write it all down today!",
            "💭 Put those thoughts onto paper",
            "✨ They deserve to exist. Write now!",
            "📖 Future you will read this",
            "😊 And smile. Keep writing!"
        ],
        
        art: [
            "🎨 Create something that never existed before",
            "✨ That's pure magic. Start creating!",
            "🖼️ Your art is completely unique because",
            "💫 YOU made it. Keep going!",
            "🌈 Colors, shapes, imagination flow",
            "🎭 Let it all out creatively!"
        ],
        
        music: [
            "🎵 Make some wonderful noise today",
            "🎶 Music is so good for the soul!",
            "🎸 Practice brings consistent progress",
            "✨ Play on and keep improving!",
            "🥁 Feel the rhythm deep inside",
            "💃 Feel the joy. Make music!"
        ],
        
        game: [
            "🎮 Game time! Level up your fun",
            "🔥 Time to play and enjoy!",
            "🎯 Play hard, rest even harder",
            "😌 You deserve this fun time!",
            "⭐ You deserve some well-earned fun",
            "🎲 Game on and enjoy yourself!"
        ],
        
        // FORGOTTEN BASICS
        charge: [
            "🔋 Plug in right now! Dead phone",
            "📱 = No connection to the world!",
            "🪫 Future you at 5% battery",
            "🙏 Is begging you to charge NOW!",
            "🔋 Full battery = full peace",
            "😌 Of mind. Charge it up!"
        ],
        
        backup: [
            "💾 Save your precious memories now",
            "🙏 Future you will sincerely thank you!",
            "📅 One day you'll want these files",
            "💻 Back them up securely today!",
            "📱 Lost phone? Lost precious photos?",
            "☁️ Not if you backup up NOW!"
        ],
        
        update: [
            "📱 Update now = no bugs ever later",
            "🐛 Future you wants smooth performance. Update!",
            "⚡ Get the latest amazing features",
            "📲 Your device absolutely deserves it!",
            "🔄 New version, new improvements waiting",
            "✨ Update now and enjoy the benefits!"
        ],
        
        password: [
            "🔐 New password = much better security",
            "😴 Future you sleeps better tonight!",
            "🛡️ Don't let those hackers win",
            "🔄 Change that password right now!",
            "✅ Secure today means safe tomorrow",
            "🔒 Protect yourself. Update it now!"
        ],
        
        // DEFAULT - for anything not caught above
        default: [
            "💪 You've absolutely got this now",
            "🌟 Future you is counting on you!",
            "👣 One small step at a time",
            "📈 You're making real progress daily!",
            "🌱 Small actions compound into results",
            "🏆 Big results over time. Keep going!",
            "🙏 Future you will be grateful",
            "✨ You did this. Make them proud!",
            "✅ Done is better than perfect",
            "🚀 Start right now. No excuses!",
            "⭐ You're capable of amazing things",
            "🔨 Prove it to yourself today!",
            "🎯 This task = one step closer",
            "💫 To your biggest goals. Go!",
            "📣 Your future self is cheering",
            "🎉 Loudly for you. Get it done!"
        ]
    },
    
    // ===========================================
    // DETECT CATEGORY FROM TASK
    // ===========================================
    detectCategory: function(taskTitle, taskNotes = '') {
        const text = (taskTitle + ' ' + taskNotes).toLowerCase();
        
        // Check each category
        for (let category in this.categories) {
            const keywords = this.categories[category];
            for (let keyword of keywords) {
                if (text.includes(keyword)) {
                    return category;
                }
            }
        }
        
        return 'default';
    },
    
    // ===========================================
    // 🆕 YAMF-STYLE GUIDANCE (REAL FRIEND VIBES)
    // ===========================================
    getGuidance: function(category, taskTitle) {
        switch(category) {
            case 'exam':
                return "👉 Focus on key concepts, not everything.\nStart with the easiest question to build confidence.";
            case 'study':
                return "👉 Try 25 minutes focus + 5 minutes break.\nRemove distractions and just start.";
            case 'presentation':
                return "👉 Speak slowly and clearly.\nPause, breathe, and look at your audience.";
            case 'project':
                return "👉 Break it into small steps.\nStart with the easiest part right now.";
            case 'meeting':
                return "👉 Prepare 1–2 ideas before joining.\nEven one good point makes a difference.";
            case 'interview':
                return "👉 Be honest and confident.\nThey already saw your potential.";
            case 'workout':
                return "👉 Just start moving.\nEven 5 minutes is a win.";
            case 'clean':
                return "👉 Start with one small area.\nMomentum will follow.";
            case 'call':
                return "👉 Just press call.\nDon't overthink it.";
            case 'birthday':
                return "👉 Be present.\nEnjoy the moment and make memories.";
            case 'computer':
                return "👉 If stuck, debug step by step.\nCheck small parts, not everything at once.";
            case 'math':
                return "👉 Solve one step at a time.\nDon't rush—focus on understanding.";
            case 'essay':
                return "👉 Just start writing.\nThe first draft doesn't have to be perfect.";
            case 'homework':
                return "👉 Pick the shortest problem first.\nMomentum builds quickly.";
            case 'deadline':
                return "👉 Break it down.\nWhat's the smallest thing you can do right now?";
            default:
                return "👉 Start small.\nYou don't need perfect—just begin.";
        }
    },
    
    // ===========================================
    // MAIN MOTIVATION GENERATOR (UPGRADED!)
    // ===========================================
    getMotivation: function(taskTitle, userId, taskNotes = '') {
        // Detect category
        const category = this.detectCategory(taskTitle, taskNotes);
        
        // Get templates for this category (fallback to default)
        const templates = this.templates[category] || this.templates.default;
        
        // Get random template
        let base = templates[Math.floor(Math.random() * templates.length)];
        
        // 🆕 GET YAMF-STYLE GUIDANCE
        const guidance = this.getGuidance(category, taskTitle);
        
        // 🆕 COMBINE = Motivation + Guidance (THIS IS THE MAGIC!)
        let finalMessage = `${base}\n\n${guidance}`;
        
        // Store user data if needed
        if (!this.users[userId]) {
            this.users[userId] = {
                id: userId,
                tasks: []
            };
        }
        
        return finalMessage;
    },
    
    // ===========================================
    // CHAT RESPONSES (UPGRADED - YAMF STYLE!)
    // ===========================================
    chat: function(message, userId, currentTask = '') {
        const msg = message.toLowerCase();
        
        // TIRED response
        if (msg.includes('tired') || msg.includes('exhausted') || msg.includes('pagod')) {
            return "😴 I get it… you're tired.\n👉 Rest for a bit, then do just ONE small step. Don't stop completely.";
        }
        
        // STUCK response
        if (msg.includes('stuck') || msg.includes('confused') || msg.includes('di ko alam')) {
            return "🧩 You're not stuck, just overwhelmed.\n👉 Let's simplify it—what's the smallest thing you can do first?";
        }
        
        // PROCRASTINATE response
        if (msg.includes('procrastinate') || msg.includes('later') || msg.includes('mamaya')) {
            return "⏰ You're overthinking it.\n👉 Start for 2 minutes. That's all. Momentum will follow.";
        }
        
        // NERVOUS response
        if (msg.includes('nervous') || msg.includes('anxious') || msg.includes('kinakabahan')) {
            return "😌 That means this matters to you.\n👉 Breathe… slow down… you're more ready than you think.";
        }
        
        // DONE response
        if (msg.includes('done') || msg.includes('finished') || msg.includes('tapos')) {
            return "🎉 Good job.\n👉 Take a moment, then ask yourself—what's the next small win?";
        }
        
        // HELP response
        if (msg.includes('help') || msg.includes('tulong')) {
            return "🤝 I'm here.\n👉 Tell me what part is hard, and we'll solve it step by step.";
        }
        
        // WHY response (with current task context)
        if (msg.includes('why') && currentTask) {
            return `💡 You chose this for a reason.\n👉 "${currentTask}" matters—remember why you started.`;
        }
        
        // BORED response
        if (msg.includes('bored') || msg.includes('walang gana')) {
            return "🎮 Boredom is just your brain wanting stimulation.\n👉 Make this task a game. Can you beat your own record?";
        }
        
        // Default thoughtful response
        return "💭 I'm here with you.\n👉 Let's take it one step at a time. You don't have to do everything at once.";
    },
    
    // ===========================================
    // USER CONTEXT (for better personalization)
    // ===========================================
    updateUserContext: function(userId, data) {
        if (!this.users[userId]) {
            this.users[userId] = {};
        }
        Object.assign(this.users[userId], data);
    }
};

// Make it available globally
window.AI = AI;
console.log("🚀 AI PROFESSIONAL ENGINE LOADED - Ready for ANY task!");
console.log("✨ UPGRADED: Now with Yamf-style guidance — real friend vibes!");
