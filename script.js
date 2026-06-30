// I Ching Number Divination - JavaScript

function getExtendedHexagram(num) {
    const baseHexagrams = {
        1: { name: "The Creative Heaven", chinese: "乾為天", meaning: "Represents pure Yang energy, creativity, and new beginnings. The creative force that initiates all things.", guidance: "This is a time of powerful new beginnings. Trust your creative energy and take initiative." },
        2: { name: "The Receptive Earth", chinese: "坤為地", meaning: "Represents pure Yin energy, receptivity, and nurturing. The earth that supports all life.", guidance: "Be patient and receptive. Allow things to develop naturally." },
        3: { name: "Difficulty at the Beginning", chinese: "屯為水", meaning: "Difficulty in starting new ventures. Like a seed pushing through earth.", guidance: "Obstacles are temporary. Keep pushing forward." },
        4: { name: "Youthful Folly", chinese: "蒙為山", meaning: "Need for education and guidance. Youth needs instruction.", guidance: "Seek knowledge and find a mentor." },
        5: { name: "Waiting", chinese: "需為水", meaning: "Time of waiting and preparation. Like rain that must fall before growth.", guidance: "Patience is needed. Prepare while you wait." },
        6: { name: "Conflict", chinese: "讼為天", meaning: "Conflict and dispute. Testing of will.", guidance: "Seek harmony. Avoid unnecessary conflict." },
        7: { name: "The Army", chinese: "師為地", meaning: "The army represents organization and discipline.", guidance: "You need structure and organization." },
        8: { name: "Holding Together", chinese: "比為水", meaning: "Unity and closeness. Support from others.", guidance: "Work with others. Unity brings strength." },
        9: { name: "The Taming Power", chinese: "小畜天", meaning: "Small taming and accumulation. Building slowly.", guidance: "Progress is slow but steady. Keep building." },
        10: { name: "Treading Carefully", chinese: "履為天", meaning: "Careful conduct in difficult situations.", guidance: "Proceed with caution and integrity." },
        11: { name: "Peace", chinese: "泰為地", meaning: "Peace and harmony. A time of prosperity.", guidance: "Enjoy this time of harmony and prosperity." },
        12: { name: "Stagnation", chinese: "否為天", meaning: "Stagnation and blockage. Difficult times.", guidance: "This too shall pass. Wait for the turn." },
        13: { name: "Fellowship", chinese: "同人天", meaning: "Union and partnership. Working together.", guidance: "Seek partnership and collaboration." },
        14: { name: "Great Possession", chinese: "大有火", meaning: "Great abundance and success.", guidance: "You are entering a time of abundance." },
        15: { name: "Modesty", chinese: "謙為山", meaning: "Humility brings advancement.", guidance: "Stay humble. Your modesty will be rewarded." },
        16: { name: "Enthusiasm", chinese: "豫為雷", meaning: "Joy and excitement. New opportunities.", guidance: "Seize this opportunity with enthusiasm." },
        17: { name: "Following", chinese: "随為澤", meaning: "Following and adapting. Finding guidance.", guidance: "Follow wise counsel and adapt." },
        18: { name: "Work on what is Decayed", chinese: "蠱為山", meaning: "Repairing and restoring. Fixing problems.", guidance: "Time to address and fix problems." },
        19: { name: "Approach", chinese: "臨為地", meaning: "Approaching success. Drawing near to goals.", guidance: "You are approaching your goals. Stay the course." },
        20: { name: "Contemplation", chinese: "觀為風", meaning: "Observation and reflection. Learning from above.", guidance: "Take time to observe and reflect." },
        21: { name: "Biting Through", chinese: "噬嗑為雷", meaning: "Biting through obstacles. Taking action.", guidance: "Take decisive action on problems." },
        22: { name: "Grace", chinese: "賁為山", meaning: "Grace and adornment. External beauty.", guidance: "Focus on presentation and appearance." },
        23: { name: "Splitting Apart", chinese: "剝為山", meaning: "Breaking down. A time of decline.", guidance: "This is a time of withdrawal and healing." },
        24: { name: "Return", chinese: "復為雷", meaning: "Return and renewal. The turning point.", guidance: "A new cycle is beginning. Return to your path." },
        25: { name: "Innocence", chinese: "無妄天", meaning: "Natural innocence. Being without pretension.", guidance: "Be honest and straightforward." },
        26: { name: "Great Taming", chinese: "大畜山", meaning: "Great restraint and accumulation. Building power.", guidance: "Build your strength through restraint." },
        27: { name: "The Corners of the Mouth", chinese: "頤為山", meaning: "Nourishment and sustenance. Feeding properly.", guidance: "Take care of your basic needs." },
        28: { name: "Great Excess", chinese: "大過澤", meaning: "Great exceeding. Going beyond limits.", guidance: "Be careful of excess. Balance is key." },
        29: { name: "The Abyss", chinese: "坎為水", meaning: "The dangerous pit. Deep waters.", guidance: "Be careful. Danger is near." },
        30: { name: "The Clinging Fire", chinese: "離為火", meaning: "Clinging fire. Light and clarity.", guidance: "Seek clarity and illumination." },
        31: { name: "Influence", chinese: "咸為澤", meaning: "Influence and attraction. Mutual feeling.", guidance: "Attraction and connection are important." },
        32: { name: "Duration", chinese: "恆為雷", meaning: "Duration and constancy. Lasting relationships.", guidance: "Stay constant. Duration brings success." },
        33: { name: "Retreat", chinese: "遯為天", meaning: "Strategic retreat. Withdrawing wisely.", guidance: "Sometimes retreat is the best strategy." },
        34: { name: "The Power of the Great", chinese: "大壯雷", meaning: "Great power and strength. Building force.", guidance: "Your power is growing. Use it wisely." },
        35: { name: "Progress", chinese: "晉為火", meaning: "Progress and advancement. Gaining recognition.", guidance: "You are progressing well. Continue forward." },
        36: { name: "Darkness of the Sun", chinese: "明夷地", meaning: "Hidden brightness. Light in darkness.", guidance: "Stay strong even in difficult times." },
        37: { name: "The Family", chinese: "家人風", meaning: "Family and household. Home life.", guidance: "Focus on family and home matters." },
        38: { name: "Opposition", chinese: "睽為澤", meaning: "Opposition and contrast. Differences.", guidance: "Even opposites can work together." },
        39: { name: "Obstruction", chinese: "蹇為水", meaning: "Difficulty and blockage. Moving forward is hard.", guidance: "This is a time of difficulty. Be patient." },
        40: { name: "Deliverance", chinese: "解為雷", meaning: "Release and deliverance. Freedom from trouble.", guidance: "Your difficulties are ending. Freedom is coming." },
        41: { name: "Decrease", chinese: "損為山", meaning: "Decrease and sacrifice. Giving up for gain.", guidance: "Sometimes you must decrease to increase." },
        42: { name: "Increase", chinese: "益為雷", meaning: "Increase and growth. Adding to yourself.", guidance: "You are growing and increasing." },
        43: { name: "Resolution", chinese: "夬為澤", meaning: "Resolution and decision. Breaking through.", guidance: "Time to make a decisive move." },
        44: { name: "Meeting", chinese: "姤為風", meaning: "Meeting and coming together. Unexpected meeting.", guidance: "An unexpected meeting or opportunity approaches." },
        45: { name: "Gathering Together", chinese: "萃為澤", meaning: "Gathering and union. People coming together.", guidance: "Unity brings strength. Work together." },
        46: { name: "Pushing Upward", chinese: "升為地", meaning: "Rising upward. Gradual advancement.", guidance: "You are rising. Keep pushing upward." },
        47: { name: "Oppression", chinese: "困為澤", meaning: "Exhaustion and oppression. Being trapped.", guidance: "You feel trapped but stay strong." },
        48: { name: "The Well", chinese: "井為水", meaning: "The well as a resource. Sustaining others.", guidance: "You are a source of sustenance for others." },
        49: { name: "Revolution", chinese: "革為澤", meaning: "Revolution and change. Transformation.", guidance: "Major changes are happening." },
        50: { name: "The Cauldron", chinese: "鼎為風", meaning: "The cauldron as transformation. New values.", guidance: "Transformation is occurring." },
        51: { name: "Thunder and Lightning", chinese: "震為雷", meaning: "Thunder and shock. Sudden events.", guidance: "Sudden events are coming. Stay prepared." },
        52: { name: "Keeping Still", chinese: "艮為山", meaning: "Stillness and stopping. Meditation.", guidance: "Be still. Focus on inner peace." },
        53: { name: "Gradual Progress", chinese: "漸為風", meaning: "Gradual development. Step by step.", guidance: "Progress slowly but steadily." },
        54: { name: "The Marrying Maiden", chinese: "歸妹雷", meaning: "Marriage and exchange. New partnerships.", guidance: "A new partnership is forming." },
        55: { name: "Abundance", chinese: "豐為雷", meaning: "Abundance and fullness. Peak success.", guidance: "You are at a peak of abundance." },
        56: { name: "The Wanderer", chinese: "火山旅", meaning: "Travel and wandering. Being away from home.", guidance: "You are in a transitional phase. Find stability." },
        57: { name: "The Gentle Wind", chinese: "巽為風", meaning: "Gentle penetration. Subtle influence.", guidance: "Use gentle but persistent influence." },
        58: { name: "The Joyous Lake", chinese: "兌為澤", meaning: "Joy and pleasure. Happiness.", guidance: "Enjoy this time of joy and happiness." },
        59: { name: "Dispersion", chinese: "渙為風", meaning: "Dispersion and spreading. Uniting effort.", guidance: "Spread your influence. Unite others." },
        60: { name: "Limitation", chinese: "節為水", meaning: "Limitation and restraint. Setting limits.", guidance: "Know your limits. Set boundaries." },
        61: { name: "Inner Truth", chinese: "中孚風", meaning: "Inner truth and sincerity. True feeling.", guidance: "Be true to yourself. Sincerity wins." },
        62: { name: "Small Excess", chinese: "小過雷", meaning: "Small exceeding. Attention to details.", guidance: "Pay attention to small details." },
        63: { name: "After Completion", chinese: "未濟火", meaning: "After completion. Not yet finished.", guidance: "Almost done. Finish strongly." },
        64: { name: "Before Completion", chinese: "未濟火", meaning: "Before completion. Almost there.", guidance: "You are almost complete. Don't give up now." }
    };

    return baseHexagrams[num] || {
        name: "Hexagram " + num,
        chinese: "第" + num + "卦",
        meaning: "This hexagram speaks to your current situation. Consider its message carefully.",
        guidance: "Reflect on the meaning and apply it to your life."
    };
}

function getMovingLine(num) {
    const lines = {
        1: "The first line (九一) - The beginning. A dragon hides in the deep. Wait and prepare.",
        2: "The second line (九二) - The emerging. A dragon appears in the field. Time to act.",
        3: "The third line (九三) - The struggle. Anguish and doubt. Stay the course.",
        4: "The fourth line (九四) - The transition. A dragon leaps in the mist. Be cautious.",
        5: "The fifth line (九五) - The peak. A dragon flies in the heavens. Great success.",
        6: "The sixth line (上九) - The end. A dragon surpasses the sky. The ultimate achievement."
    };
    return lines[num] || "Line " + num + " - Consider its meaning in your situation.";
}

function divinate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    if (!num1 || !num2 || !num3) {
        alert("Please enter all three numbers");
        return;
    }

    const lowerHex = ((num1 - 1) % 8) + 1;
    const upperHex = ((num2 - 1) % 8) + 1;
    const totalHex = ((lowerHex - 1) * 8) + upperHex;
    const movingLine = ((num3 - 1) % 6) + 1;

    const hexagram = getExtendedHexagram(totalHex);

    document.getElementById('hexagram-name').textContent = hexagram.name;
    document.getElementById('hexagram-chinese').textContent = hexagram.chinese;
    document.getElementById('hexagram-number').textContent = "Hexagram #" + totalHex + " - Line " + movingLine + " is moving";
    document.getElementById('hexagram-meaning').textContent = hexagram.meaning;
    document.getElementById('moving-line').textContent = getMovingLine(movingLine);
    document.getElementById('guidance').textContent = hexagram.guidance;

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

function upgrade() {
    alert("Upgrade feature coming soon! Thank you for your interest.");
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        divinate();
    }
});
