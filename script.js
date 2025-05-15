


const prefectures = [
    {name:"北海道", value: "hokkaido", lat: 43.06417, lon: 141.34694},
    {name: "青森県",value: "aomori",lat:40.82444,lon:140.74000},
    {name: "岩手県",value: "iwate",lat:39.70361,lon:141.15250},
      { name: "宮城県", value: "miyagi", lat: 38.26889, lon: 140.87194 },
  { name: "秋田県", value: "akita", lat: 39.71861, lon: 140.1025 },
  { name: "山形県", value: "yamagata", lat: 38.24056, lon: 140.36333 },
  { name: "福島県", value: "fukushima", lat: 37.75, lon: 140.46778 },
  { name: "茨城県", value: "ibaraki", lat: 36.34139, lon: 140.44667 },
  { name: "栃木県", value: "tochigi", lat: 36.56583, lon: 139.88361 },
  { name: "群馬県", value: "gunma", lat: 36.39111, lon: 139.06083 },
  { name: "埼玉県", value: "saitama", lat: 35.85694, lon: 139.64889 },
  { name: "千葉県", value: "chiba", lat: 35.60472, lon: 140.12333 },
  { name: "東京都", value: "tokyo", lat: 35.68944, lon: 139.69167 },
  { name: "神奈川県", value: "kanagawa", lat: 35.44778, lon: 139.6425 },
  { name: "新潟県", value: "niigata", lat: 37.90222, lon: 139.02361 },
  { name: "富山県", value: "toyama", lat: 36.69528, lon: 137.21139 },
  { name: "石川県", value: "ishikawa", lat: 36.59444, lon: 136.62556 },
  { name: "福井県", value: "fukui", lat: 36.06528, lon: 136.22194 },
  { name: "山梨県", value: "yamanashi", lat: 35.66389, lon: 138.56833 },
  { name: "長野県", value: "nagano", lat: 36.65139, lon: 138.18111 },
  { name: "岐阜県", value: "gifu", lat: 35.39111, lon: 136.72222 },
  { name: "静岡県", value: "shizuoka", lat: 34.97694, lon: 138.38306 },
  { name: "愛知県", value: "aichi", lat: 35.18028, lon: 136.90667 },
  { name: "三重県", value: "mie", lat: 34.73028, lon: 136.50861 },
  { name: "滋賀県", value: "shiga", lat: 35.00444, lon: 135.86833 },
  { name: "京都府", value: "kyoto", lat: 35.02139, lon: 135.75556 },
  { name: "大阪府", value: "osaka", lat: 34.68639, lon: 135.52 },
  { name: "兵庫県", value: "hyogo", lat: 34.69139, lon: 135.18306 },
  { name: "奈良県", value: "nara", lat: 34.68528, lon: 135.83278 },
  { name: "和歌山県", value: "wakayama", lat: 34.22611, lon: 135.1675 },
  { name: "鳥取県", value: "tottori", lat: 35.50361, lon: 134.23833 },
  { name: "島根県", value: "shimane", lat: 35.47222, lon: 133.05056 },
  { name: "岡山県", value: "okayama", lat: 34.66167, lon: 133.935 },
  { name: "広島県", value: "hiroshima", lat: 34.39639, lon: 132.45944 },
  { name: "山口県", value: "yamaguchi", lat: 34.18583, lon: 131.47139 },
  { name: "徳島県", value: "tokushima", lat: 34.06583, lon: 134.55944 },
  { name: "香川県", value: "kagawa", lat: 34.34028, lon: 134.04333 },
  { name: "愛媛県", value: "ehime", lat: 33.84167, lon: 132.76611 },
  { name: "高知県", value: "kochi", lat: 33.55972, lon: 133.53111 },
  { name: "福岡県", value: "fukuoka", lat: 33.60639, lon: 130.41806 },
  { name: "佐賀県", value: "saga", lat: 33.24944, lon: 130.29889 },
  { name: "長崎県", value: "nagasaki", lat: 32.74472, lon: 129.87361 },
  { name: "熊本県", value: "kumamoto", lat: 32.78972, lon: 130.74167 },
  { name: "大分県", value: "oita", lat: 33.23806, lon: 131.6125 },
  { name: "宮崎県", value: "miyazaki", lat: 31.91111, lon: 131.42389 },
  { name: "鹿児島県", value: "kagoshima", lat: 31.56028, lon: 130.55806 },
  { name: "沖縄県", value: "okinawa", lat: 26.2125, lon: 127.68111 },
];

const select = document.getElementById("prefecture");
prefectures.forEach(pref =>{
    const option = document.createElement("option");
    option.value = pref.value;
    option.textContent = pref.name;
    select.appendChild(option);
});
//api
select.addEventListener("change",async(e) => {
    const selsected = e.target.value;
    const pref =prefectures.find(p => p.value === selsected);
    if(!pref) return;

    const res = await fetch (`https://api.open-meteo.com/v1/forecast?latitude=${pref.lat}&longitude=${pref.lon}&current_weather=true`);
        const data =await res.json();
        const weather = data.current_weather;

  // 天気コード変換

  const weatherText = getWeatherText(weather.weathercode);
  const weatherIcon = getWeatherIcon(weather.weathercode);

  document.getElementById("wether-text").testContent = `天気：${weatherText}`;
  document.getElementById("temp-text").textContent = `気温：${weather.temperature}℃`;
  document.getElementById("icon").src = `images/${weatherIcon}`;

  //服装判定
  const clothing = getClothingAdvice(weather.temperature);
  document.getElementById("clothing-text").textContent = clothing.text;
  document.getElementById("clothing-icon").src = `images/${clothing.image}`;
});

function getWeatherText(code) {
    if (code === 0) return "晴れ";
    if (code<= 3) return "曇り";
    if (code <= 67) return "雨";
    return"不明"
}
 function getWeatherIcon (code) {
    if(code === 0) return "san.png";
    if(code <= 3) return "cloud.png";
    if(code <= 67) return "rain.png";
    return "unknown.png";
 }

 function getClothingAdvice(temp) {
  if (temp >= 30) return { text: "半袖がおすすめ！", image: "summer.png" };
  if (temp >= 20) return { text: "長袖シャツ1枚でOK", image: "spring.png" };
  if (temp >= 10) return { text: "上着があると安心", image: "autumn.png" };
  return { text: "コート必須！", image: "winter.png" };
}

