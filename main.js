
// Itinerary Data
const itineraryData = {
  1: {
    title: "初一：漫活北投",
    date: "2/17 (二)",
    desc: "飯店 Check-in & 北投散策",
    warning: "⚠️ 梅庭目前整修中(預計2026重開)，若未開放建議改去「普濟寺」。",
    events: [
      {
        time: "14:00",
        title: "抵達北投 & 停車",
        desc: "前往泉都溫泉會館。若還不能進房，先寄放行李與車輛。",
        location: "泉都溫泉會館",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=泉都溫泉會館"
      },
      {
        time: "15:00",
        title: "北投公園深度遊",
        desc: "除了圖書館與地熱谷，推薦去「少帥禪園」喝下午茶或看夕陽 (需預約)。",
        location: "少帥禪園",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=少帥禪園"
      },
      {
        time: "17:30",
        title: "晚餐選擇",
        desc: "在地首選：**矮仔財滷肉飯** (北投中繼市場) 或 **滿來拉麵**。",
        location: "北投中繼市場",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投中繼市場"
      },
      {
        time: "20:00",
        title: "飯店泡湯",
        desc: "享受私人溫泉，洗去疲憊。",
        location: null
      }
    ]
  },
  2: {
    title: "初二：陽明花季",
    date: "2/18 (三)",
    desc: "賞櫻花 & 豆留森林",
    warning: "💡 豆留森林 (Cama Coffee) 極熱門，想去一定要現在訂位！",
    events: [
      {
        time: "09:00",
        title: "搭公車出發",
        desc: "至北投站搭乘小9或230前往陽明山花鐘。",
        location: "捷運北投站",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=捷運北投站"
      },
      {
        time: "10:30",
        title: "Cama 豆留森林",
        desc: "【達人推薦】號稱「陽明山上的京都」，日式老屋咖啡廳 (需預約)。",
        location: "Cama Coffee Roasters 豆留森林",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Cama Coffee Roasters 豆留森林"
      },
      {
        time: "13:30",
        title: "草山小鎮 & 花鐘",
        desc: "美軍宿舍群拍照，散步至花鐘賞櫻。",
        location: "草山小鎮",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=草山小鎮"
      },
      {
        time: "17:30",
        title: "晚餐：三燔北投 (已訂)",
        desc: "晶泉丰旅 2F (泉都對面)。",
        location: "三燔北投",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=三燔北投"
      }
    ]
  },
  3: {
    title: "初三：淡水藝文",
    date: "2/19 (四)",
    desc: "雲門劇場 & 渡輪夕照",
    warning: "避開老街人擠人，我們去更有氣質的私房景點。",
    events: [
      {
        time: "10:00",
        title: "捷運出發",
        desc: "搭乘捷運至淡水站，轉公車紅26。",
        location: "淡水捷運站",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=淡水捷運站"
      },
      {
        time: "11:00",
        title: "一滴水紀念館",
        desc: "【私房景點】日本移築過來的百年古宅，免費參觀。",
        location: "一滴水紀念館",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=一滴水紀念館"
      },
      {
        time: "12:30",
        title: "雲門劇場園區",
        desc: "就在旁邊，雖然有星巴克但更推薦「大樹書房」喝咖啡看展。",
        location: "雲門劇場",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=雲門劇場"
      },
      {
        time: "16:00",
        title: "漁人碼頭夕陽",
        desc: "搭渡輪從碼頭回老街，或直接在情人橋看夕陽。",
        location: "漁人碼頭",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=淡水漁人碼頭"
      },
      {
        time: "18:00",
        title: "晚餐：奇岩一號 (已訂)",
        desc: "大地酒店內，需計程車前往。",
        location: "北投大地酒店",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投大地酒店"
      }
    ]
  },
  4: {
    title: "初四：在地美食",
    date: "2/20 (五)",
    desc: "復興公園 & 市場尋寶",
    warning: null,
    events: [
      {
        time: "10:00",
        title: "復興公園泡腳",
        desc: "與當地阿公阿嬤一起享受溫泉足湯，孩子玩城堡溜滑梯。",
        location: "北投復興公園",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投復興公園"
      },
      {
        time: "12:00",
        title: "北投市場尋寶",
        desc: "【必吃名單】高記茶莊(紅茶)、陳家剉冰、阿泓潤餅。",
        location: "北投中繼市場",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投中繼市場"
      },
      {
        time: "14:00",
        title: "滿載而歸",
        desc: "帶著放鬆的身心與伴手禮回家。",
        location: null
      }
    ]
  }
};

// Countdown Logic
const targetDate = new Date("2026-02-17T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Tab & Content Logic
function renderDay(dayId) {
  const day = itineraryData[dayId];
  const container = document.getElementById("itinerary-content");
  
  let html = `
    <div style="margin-bottom: 1.5rem;">
      <h2 style="color:white; margin-bottom:0.2rem;">${day.title}</h2>
      <p style="color:var(--text-dim); font-size:0.9rem;">${day.date} • ${day.desc}</p>
    </div>
  `;

  if (day.warning) {
    html += `
      <div class="warning-box">
        <span>⚠️</span>
        <span>${day.warning}</span>
      </div>
    `;
  }

  day.events.forEach(event => {
    html += `
      <div class="timeline-item">
        <span class="time-badge">${event.time}</span>
        <div class="activity-card">
          <h3>${event.title}</h3>
          <p>${event.desc}</p>
          ${event.location && event.mapUrl ? `
            <a href="${event.mapUrl}" target="_blank" class="location-link">
              📍 導航 (Google Maps)
            </a>
          ` : ''}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Event Listeners
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    const day = e.target.getAttribute('data-day');
    renderDay(day);
  });
});

// Share Button Logic
document.getElementById('share-btn').addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: '2026 北投新春之旅',
        text: '這是有規劃好的北投四天三夜行程表，快來看看！',
        url: window.location.href
      });
    } catch (err) {
      console.log('Error sharing:', err);
    }
  } else {
    // Fallback for desktop/unsupported
    navigator.clipboard.writeText(window.location.href);
    alert('網址已複製到剪貼簿！');
  }
});

// Initial Render
renderDay(1);
