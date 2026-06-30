// I Ching Number Divination - JavaScript

// 八卦對應表
const eightTrigrams = {
    1: { name: "Qian (Creativity)", symbol: "☰", chinese: "乾" },
    2: { name: "Dui (Joy)", symbol: "☱", chinese: "兌" },
    3: { name: "Li (Clarity)", symbol: "☲", chinese: "離" },
    4: { name: "Zhen (Thunder)", symbol: "☳", chinese: "震" },
    5: { name: "Xun (Gentle)", symbol: "☴", chinese: "巽" },
    6: { name: "Kan (Depth)", symbol: "☵", chinese: "坎" },
    7: { name: "Gen (Mountain)", symbol: "☶", chinese: "艮" },
    8: { name: "Kun (Earth)", symbol: "☷", chinese: "坤" }
};

function getExtendedHexagram(num) {
    const baseHexagrams = {
        1: { name: "Hexagram 1 - Creative Heaven", chinese: "乾為天", trigram: "☰☰", meaning: "Pure Yang energy, creativity, and new beginnings.", guidance: "This is a time of powerful new beginnings." },
        2: { name: "Hexagram 2 - Receptive Earth", chinese: "坤為地", trigram: "☷☷", meaning: "Pure Yin energy, receptivity, and nurturing.", guidance: "Be patient and receptive." },
        3: { name: "Hexagram 3 - Difficulty at the Beginning", chinese: "屯為水", trigram: "☵☰", meaning: "Difficulty in starting new ventures.", guidance: "Obstacles are temporary." },
        4: { name: "Hexagram 4 - Youthful Folly", chinese: "蒙為山", trigram: "☶☵", meaning: "Need for education and guidance.", guidance: "Seek knowledge and find a mentor." },
        5: { name: "Hexagram 5 - Waiting", chinese: "需為水", trigram: "☰☵", meaning: "Time of waiting and preparation.", guidance: "Patience is needed." },
        6: { name: "Hexagram 6 - Conflict", chinese: "讼為天", trigram: "☵☰", meaning: "Conflict and dispute.", guidance: "Seek harmony." },
        7: { name: "Hexagram 7 - The Army", chinese: "師為地", trigram: "☷☵", meaning: "Organization and discipline.", guidance: "You need structure." },
        8: { name: "Hexagram 8 - Holding Together", chinese: "比為水", trigram: "☵☷", meaning: "Unity and closeness.", guidance: "Work with others." },
        9: { name: "Hexagram 9 - The Taming Power", chinese: "小畜天", trigram: "☴☰", meaning: "Small taming and accumulation.", guidance: "Progress is slow but steady." },
        10: { name: "Hexagram 10 - Treading Carefully", chinese: "履為天", trigram: "☰☱", meaning: "Careful conduct.", guidance: "Proceed with caution." },
        11: { name: "Hexagram 11 - Peace", chinese: "泰為地", trigram: "☰☷", meaning: "Peace and harmony.", guidance: "Enjoy this time." },
        12: { name: "Hexagram 12 - Stagnation", chinese: "否為天", trigram: "☷☰", meaning: "Stagnation and blockage.", guidance: "This too shall pass." },
        13: { name: "Hexagram 13 - Fellowship", chinese: "同人天", trigram: "☰☲", meaning: "Union and partnership.", guidance: "Seek collaboration." },
        14: { name: "Hexagram 14 - Great Possession", chinese: "大有火", trigram: "☲☰", meaning: "Great abundance.", guidance: "Time of abundance." },
        15: { name: "Hexagram 15 - Modesty", chinese: "謙為山", trigram: "☶☷", meaning: "Humility.", guidance: "Stay humble." },
        16: { name: "Hexagram 16 - Enthusiasm", chinese: "豫為雷", trigram: "☳☷", meaning: "Joy and excitement.", guidance: "Seize the opportunity." },
        17: { name: "Hexagram 17 - Following", chinese: "随為澤", trigram: "☱☳", meaning: "Following and adapting.", guidance: "Follow wise counsel." },
        18: { name: "Hexagram 18 - Work on what is Decayed", chinese: "蠱為山", trigram: "☶☴", meaning: "Repairing and restoring.", guidance: "Time to fix problems." },
        19: { name: "Hexagram 19 - Approach", chinese: "臨為地", trigram: "☷☰", meaning: "Approaching success.", guidance: "Stay the course." },
        20: { name: "Hexagram 20 - Contemplation", chinese: "觀為風", trigram: "☴☷", meaning: "Observation and reflection.", guidance: "Take time to observe." },
        21: { name: "Hexagram 21 - Biting Through", chinese: "噬嗑為雷", trigram: "☳☲", meaning: "Biting through obstacles.", guidance: "Take decisive action." },
        22: { name: "Hexagram 22 - Grace", chinese: "賁為山", trigram: "☶☲", meaning: "Grace and beauty.", guidance: "Focus on presentation." },
        23: { name: "Hexagram 23 - Splitting Apart", chinese: "剝為山", trigram: "☶☷", meaning: "Breaking down.", guidance: "Time of withdrawal." },
        24: { name: "Hexagram 24 - Return", chinese: "復為雷", trigram: "☳☷", meaning: "Return and renewal.", guidance: "A new cycle begins." },
        25: { name: "Hexagram 25 - Innocence", chinese: "無妄天", trigram: "☰☳", meaning: "Natural innocence.", guidance: "Be honest." },
        26: { name: "Hexagram 26 - Great Taming", chinese: "大畜山", trigram: "☶☰", meaning: "Great restraint.", guidance: "Build strength." },
        27: { name: "Hexagram 27 - The Corners of the Mouth", chinese: "頤為山", trigram: "☶☳", meaning: "Nourishment.", guidance: "Take care of basics." },
        28: { name: "Hexagram 28 - Great Excess", chinese: "大過澤", trigram: "☱☴", meaning: "Great exceeding.", guidance: "Balance is key." },
        29: { name: "Hexagram 29 - The Abyss", chinese: "坎為水", trigram: "☵☵", meaning: "The dangerous pit.", guidance: "Be careful." },
        30: { name: "Hexagram 30 - The Clinging Fire", chinese: "離為火", trigram: "☲☲", meaning: "Clinging fire.", guidance: "Seek clarity." },
        31: { name: "Hexagram 31 - Influence", chinese: "咸為澤", trigram: "☱☶", meaning: "Influence.", guidance: "Connection is important." },
        32: { name: "Hexagram 32 - Duration", chinese: "恆為雷", trigram: "☳☴", meaning: "Duration and constancy.", guidance: "Stay constant." },
        33: { name: "Hexagram 33 - Retreat", chinese: "遯為天", trigram: "☰☶", meaning: "Strategic retreat.", guidance: "Sometimes retreat." },
        34: { name: "Hexagram 34 - The Power of the Great", chinese: "大壯雷", trigram: "☳☰", meaning: "Great power.", guidance: "Your power grows." },
        35: { name: "Hexagram 35 - Progress", chinese: "晉為火", trigram: "☲☷", meaning: "Progress.", guidance: "You are progressing." },
        36: { name: "Hexagram 36 - Darkness of the Sun", chinese: "明夷地", trigram: "☷☲", meaning: "Hidden brightness.", guidance: "Stay strong." },
        37: { name: "Hexagram 37 - The Family", chinese: "家人風", trigram: "☴☲", meaning: "Family.", guidance: "Focus on home." },
        38: { name: "Hexagram 38 - Opposition", chinese: "睽為澤", trigram: "☱☲", meaning: "Opposition.", guidance: "Even opposites work." },
        39: { name: "Hexagram 39 - Obstruction", chinese: "蹇為水", trigram: "☵☶", meaning: "Difficulty.", guidance: "Be patient." },
        40: { name: "Hexagram 40 - Deliverance", chinese: "解為雷", trigram: "☳☵", meaning: "Release.", guidance: "Freedom is coming." },
        41: { name: "Hexagram 41 - Decrease", chinese: "損為山", trigram: "☶☱", meaning: "Decrease.", guidance: "Give to receive." },
        42: { name: "Hexagram 42 - Increase", chinese: "益為雷", trigram: "☳☴", meaning: "Increase.", guidance: "You are growing." },
        43: { name: "Hexagram 43 - Resolution", chinese: "夬為澤", trigram: "☱☰", meaning: "Resolution.", guidance: "Make a decisive move." },
        44: { name: "Hexagram 44 - Meeting", chinese: "姤為風", trigram: "☴☰", meaning: "Meeting.", guidance: "Opportunity approaches." },
        45: { name: "Hexagram 45 - Gathering Together", chinese: "萃為澤", trigram: "☱☷", meaning: "Gathering.", guidance: "Unity brings strength." },
        46: { name: "Hexagram 46 - Pushing Upward", chinese: "升為地", trigram: "☷☳", meaning: "Rising.", guidance: "Keep pushing." },
        47: { name: "Hexagram 47 - Oppression", chinese: "困為澤", trigram: "☱☵", meaning: "Oppression.", guidance: "Stay strong." },
        48: { name: "Hexagram 48 - The Well", chinese: "井為水", trigram: "☵☴", meaning: "The well.", guidance: "You sustain others." },
        49: { name: "Hexagram 49 - Revolution", chinese: "革為澤", trigram: "☱☲", meaning: "Revolution.", guidance: "Changes happening." },
        50: { name: "Hexagram 50 - The Cauldron", chinese: "鼎為風", trigram: "☴☲", meaning: "Transformation.", guidance: "Transformation occurs." },
        51: { name: "Hexagram 51 - Thunder and Lightning", chinese: "震為雷", trigram: "☳☳", meaning: "Thunder.", guidance: "Stay prepared." },
        52: { name: "Hexagram 52 - Keeping Still", chinese: "艮為山", trigram: "☶☶", meaning: "Stillness.", guidance: "Be still." },
        53: { name: "Hexagram 53 - Gradual Progress", chinese: "漸為風", trigram: "☴☶", meaning: "Gradual.", guidance: "Progress steadily." },
        54: { name: "Hexagram 54 - The Marrying Maiden", chinese: "歸妹雷", trigram: "☳☱", meaning: "Marriage.", guidance: "New partnership." },
        55: { name: "Hexagram 55 - Abundance", chinese: "豐為雷", trigram: "☳☲", meaning: "Abundance.", guidance: "Peak time." },
        56: { name: "Hexagram 56 - The Wanderer", chinese: "火山旅", trigram: "☲☳", meaning: "Travel.", guidance: "Find stability." },
        57: { name: "Hexagram 57 - The Gentle Wind", chinese: "巽為風", trigram: "☴☴", meaning: "Gentle.", guidance: "Use gentle influence." },
        58: { name: "Hexagram 58 - The Joyous Lake", chinese: "兌為澤", trigram: "☱☱", meaning: "Joy.", guidance: "Enjoy happiness." },
        59: { name: "Hexagram 59 - Dispersion", chinese: "渙為風", trigram: "☴☵", meaning: "Dispersion.", guidance: "Spread influence." },
        60: { name: "Hexagram 60 - Limitation", chinese: "節為水", trigram: "☵☱", meaning: "Limitation.", guidance: "Set boundaries." },
        61: { name: "Hexagram 61 - Inner Truth", chinese: "中孚風", trigram: "☴☱", meaning: "Inner truth.", guidance: "Be true to yourself." },
        62: { name: "Hexagram 62 - Small Excess", chinese: "小過雷", trigram: "☳☶", meaning: "Small excess.", guidance: "Details matter." },
        63: { name: "Hexagram 63 - After Completion", chinese: "未濟火", trigram: "☲☵", meaning: "After completion.", guidance: "Finish strongly." },
        64: { name: "Hexagram 64 - Before Completion", chinese: "未濟火", trigram: "☵☲", meaning: "Before completion.", guidance: "Don't give up." }
    };

    return baseHexagrams[num] || {
        name: "Hexagram " + num,
        chinese: "第" + num + "卦",
        trigram: "?",
        meaning: "This hexagram speaks to your current situation.",
        guidance: "Reflect on the meaning."
    };
}

function getMovingLine(num) {
    const lines = {
        1: "First Line (初九) - The bottom line. The foundation. New beginnings.",
        2: "Second Line (九二) - The second line. Growing strength.",
        3: "Third Line (九三) - The third line. Transition and change.",
        4: "Fourth Line (九四) - The fourth line. New circumstances.",
        5: "Fifth Line (九五) - The fifth line. Peak influence.",
        6: "Sixth Line (上九) - The top line. End of the cycle."
    };
    return lines[num] || "Line " + num;
}

function divinate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);

    if (!num1 || !num2 || !num3) {
        alert("Please enter all three numbers");
        return;
    }

    // 計算八卦（餘數 1-8，0 變成 8）
    const lowerTrigram = (num1 % 8) || 8;
    const upperTrigram = (num2 % 8) || 8;

    // 計算 64 卦：上卦 × 8 + 下卦
    const totalHex = (upperTrigram - 1) * 8 + lowerTrigram;

    // 計算動爻（餘數 1-6，0 變成 6）
    const movingLine = (num3 % 6) || 6;

    // 取得八卦符號
    const lowerSymbol = eightTrigrams[lowerTrigram];
    const upperSymbol = eightTrigrams[upperTrigram];

    // 取得卦象資料
    const hexagram = getExtendedHexagram(totalHex);

    // 顯示結果
    document.getElementById('hexagram-name').textContent = hexagram.name + " " + hexagram.trigram;
    document.getElementById('hexagram-chinese').textContent = hexagram.chinese + " (" + lowerSymbol.chinese + upperSymbol.chinese + ")";
    document.getElementById('hexagram-number').textContent = "Lower Trigram: " + lowerSymbol.symbol + " | Upper Trigram: " + upperSymbol.symbol + " | Moving Line: " + movingLine;
    document.getElementById('hexagram-meaning').textContent = hexagram.meaning;
    document.getElementById('moving-line').textContent = getMovingLine(movingLine);
    document.getElementById('guidance').textContent = hexagram.guidance;

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
}

function upgrade() {
    alert("Upgrade feature coming soon!");
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        divinate();
    }
});
