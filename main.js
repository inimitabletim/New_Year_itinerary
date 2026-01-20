
// Itinerary Data
const itineraryData = {
  1: {
    title: "初一：漫活北投",
    date: "2/17 (二)",
    desc: "飯店 Check-in & 北投散策",
    warning: "春節期間 Check-in 可能延至 18:00，建議先致電飯店確認。",
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
        title: "北投公園散策",
        desc: "參觀北投圖書館、溫泉博物館、地熱谷。",
        location: "北投地熱谷",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投地熱谷"
      },
      {
        time: "17:30",
        title: "晚餐",
        desc: "滿來拉麵、樂雅樂 或 蓬萊台菜 (務必提早候位/訂位)。",
        location: "北投樂雅樂",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投樂雅樂"
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
    desc: "賞櫻花 & 美軍宿舍群",
    warning: "陽明山實施交通管制，請務必搭乘公車 (小9, 230) 上山。",
    events: [
      {
        time: "09:00",
        title: "搭公車出發",
        desc: "至北投站搭乘小9或230前往陽明山花鐘。",
        location: "捷運北投站",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=捷運北投站"
      },
      {
        time: "10:00",
        title: "陽明山花鐘",
        desc: "2026 花季賞櫻、杜鵑。",
        location: "陽明山花鐘",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=陽明山花鐘"
      },
      {
        time: "12:00",
        title: "草山小鎮午餐",
        desc: "美軍宿舍群，建議吃 BRICK YARD 33 1/3 或 阿蓋爾俱樂部。",
        location: "草山小鎮",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=草山小鎮"
      },
      {
        time: "16:00",
        title: "搭車下山",
        desc: "提早下山避開塞車，準備晚餐。",
        location: null
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
    title: "初三：淡水夕照",
    date: "2/19 (四)",
    desc: "古蹟巡禮 & 漁人碼頭",
    warning: "一定要搭捷運去淡水，開車會塞爆。",
    events: [
      {
        time: "10:00",
        title: "捷運出發",
        desc: "搭乘捷運至淡水站。",
        location: "淡水老街",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=淡水老街"
      },
      {
        time: "14:00",
        title: "紅毛城 & 渡輪",
        desc: "參觀古蹟後，從碼頭搭船至漁人碼頭。",
        location: "紅毛城",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=紅毛城"
      },
      {
        time: "17:00",
        title: "夕陽 & 回程",
        desc: "一定要在 17:00 前離開淡水，前往北投。",
        location: "漁人碼頭",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=淡水漁人碼頭"
      },
      {
        time: "18:00",
        title: "晚餐：奇岩一號 (已訂)",
        desc: "大地酒店內 (北投區奇岩路1號)，需步行或搭車上坡。",
        location: "北投大地酒店",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投大地酒店"
      }
    ]
  },
  4: {
    title: "初四：親子放電",
    date: "2/20 (五)",
    desc: "復興公園 & 賦歸",
    warning: null,
    events: [
      {
        time: "09:30",
        title: "退房",
        desc: "享用早餐，整理行李。",
        location: null
      },
      {
        time: "10:00",
        title: "復興公園",
        desc: "免費足湯 + 兒童城堡遊戲場。",
        location: "北投復興公園",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=北投復興公園"
      },
      {
        time: "12:00",
        title: "午餐 & 回家",
        desc: "粟家牛肉麵/吳家牛肉麵，帶著伴手禮回家。",
        location: "粟家牛肉麵",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=粟家牛肉麵"
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

// Initial Render
renderDay(1);
