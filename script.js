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

// DOM要素の取得
const selectElement = document.getElementById("prefecture");
const searchButton = document.getElementById("search-button");
const weatherCard = document.getElementById("weather-card");
const clothingCard = document.getElementById("clothing-card");
const weeklyForecastContainer = document.getElementById("weekly-forecast-container");

// 都道府県のドロップダウンメニューを生成
prefectures.forEach(pref => {
    const option = document.createElement("option");
    option.value = pref.value;
    option.textContent = pref.name;
    selectElement.appendChild(option);
});

/**
 * Open-Meteoの天気コードから天気テキストを取得
 * @param {number} code - 天気コード
 * @returns {string} 天気テキスト
 */
function getWeatherText(code) {
    if (code === 0) return "快晴";
    if (code === 1) return "晴れ (一部曇り)";
    if (code === 2) return "晴れ (曇り)";
    if (code === 3) return "曇り";
    if (code === 45 || code === 48) return "霧";
    if (code >= 51 && code <= 55) return "霧雨";
    if (code >= 56 && code <= 57) return "着氷性の霧雨";
    if (code >= 61 && code <= 65) return "雨";
    if (code >= 66 && code <= 67) return "着氷性の雨";
    if (code >= 71 && code <= 75) return "雪";
    if (code === 77) return "雪の粒";
    if (code >= 80 && code <= 82) return "にわか雨";
    if (code >= 85 && code <= 86) return "にわか雪";
    if (code === 95 || code === 96) return "雷雨";
    if (code === 99) return "雷雨とひょう";
    return "不明";
}

/**
 * Open-Meteoの天気コードから天気アイコンのファイル名を取得
 * @param {number} code - 天気コード
 * @returns {string} アイコンファイル名
 */
function getWeatherIcon(code) {
    if (code === 0) return "sun.png";
    if (code === 1 || code === 2) return "partly_cloudy.png";
    if (code === 3) return "cloud.png";
    if (code === 45 || code === 48) return "fog.png";
    if (code >= 51 && code <= 57) return "drizzle.png";
    if (code >= 61 && code <= 67) return "rain.png";
    if (code >= 71 && code <= 77) return "snow.png";
    if (code >= 80 && code <= 82) return "shower_rain.png";
    if (code >= 85 && code <= 86) return "shower_snow.png";
    if (code >= 95 && code <= 99) return "thunderstorm.png";
    return "unknown.png";
}

/**
 * 気温に応じた服装アドバイスを取得
 * @param {number} temp - 気温
 * @returns {{text: string, image: string}} 服装アドバイスのテキストと画像パス
 */
function getClothingAdvice(temp) {
    if (temp >= 30) return { text: "半袖がおすすめ！", image: "clothes_T-shirt.png" };
    if (temp >= 25) return { text: "半袖シャツで快適", image: "clothes_T-shirt.png" }; // 25-29度を追加
    if (temp >= 20) return { text: "長袖シャツ1枚でOK", image: "clothes_long_sleeve_shirt.png" };
    if (temp >= 15) return { text: "薄手の羽織もの", image: "clothes_cardigan.jpg" }; // 15-19度を追加
    if (temp >= 10) return { text: "上着があると安心 (カーディガンなど)", image: "clothes_cardigan.jpg" };
    if (temp >= 5) return { text: "セーターやジャケット", image: "clothes_sweater.jpg" }; // 5-9度を追加
    if (temp >= 0) return { text: "厚手のセーターやコート", image: "clothes_coat.jpg" }; // コート画像に修正
    return { text: "コートやダウン必須！", image: "clothes_down_jacket.jpg" };
}


/**
 * 今日から一週間の天気と気温、服装を表示する関数
 * @param {object} dailyData - Open-Meteo APIから取得した日ごとの天気データ
 */
function displayWeeklyForecast(dailyData) {
    // コンテンツをクリアし、初期メッセージを削除
    weeklyForecastContainer.innerHTML = '';

    if (!dailyData || dailyData.time.length === 0) {
        weeklyForecastContainer.innerHTML = '<p class="no-data">週間予報が取得できませんでした。</p>';
        return;
    }

    const dates = dailyData.time;
    const maxTemps = dailyData.temperature_2m_max;
    const minTemps = dailyData.temperature_2m_min;
    const weatherCodes = dailyData.weathercode;

    for (let i = 0; i < dates.length; i++) {
        const date = new Date(dates[i]);
        const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}(${dayOfWeek})`;

        const weatherText = getWeatherText(weatherCodes[i]);
        const weatherIcon = getWeatherIcon(weatherCodes[i]);
        const maxTemp = maxTemps[i];
        const minTemp = minTemps[i];

        // その日の最高気温に基づいて服装アドバイスを取得
        const clothingAdvice = getClothingAdvice(maxTemp);

        const card = document.createElement('div');
        card.classList.add('daily-forecast-card');

        card.innerHTML = `
            <p class="date">${formattedDate}</p>
            <img src="images/${weatherIcon}" alt="${weatherText}">
            <p>${weatherText}</p>
            <p class="temp-range">${minTemp}°C / ${maxTemp}°C</p>
            <div class="clothing-advice-weekly">
                <img src="images/${clothingAdvice.image}" alt="${clothingAdvice.text}" class="clothing-icon-weekly">
                <p class="clothing-text-weekly">${clothingAdvice.text}</p>
            </div>
        `;
        weeklyForecastContainer.appendChild(card);
    }
}


/**
 * 天気情報を取得して表示するメイン関数
 */
async function fetchWeatherAndClothing() {
    const selectedValue = selectElement.value;
    const pref = prefectures.find(p => p.value === selectedValue);

    if (!pref) {
        console.error("Selected prefecture not found.");
        // エラーメッセージを表示するなどの処理を追加しても良い
        return;
    }

    try {
        // APIリクエストのURLを構築
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${pref.lat}&longitude=${pref.lon}&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia/Tokyo`;
        const res = await fetch(apiUrl);

        if (!res.ok) { // HTTPステータスが200番台以外の場合
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        // 今日の天気情報
        const weather = data.current_weather;
        // 週間予報データ
        const dailyForecast = data.daily;

        // 今日の天気カードの更新
        const weatherText = getWeatherText(weather.weathercode);
        const weatherIcon = getWeatherIcon(weather.weathercode);
        const currentTemp = weather.temperature;
        const todayMaxTemp = dailyForecast.temperature_2m_max[0];
        const todayMinTemp = dailyForecast.temperature_2m_min[0];

        document.getElementById("weather-card-image").src = `images/${weatherIcon}`;
        document.getElementById("weather-card-text").textContent = `天気：${weatherText}`;
        // ここでinnerHTMLと<br>を使用して改行を挿入
        document.getElementById("weather-card-text-temp").innerHTML = `気温：${currentTemp}°C<br>(${todayMinTemp}°C / ${todayMaxTemp}°C)`;

        // 服装アドバイスカードの更新
        const clothing = getClothingAdvice(currentTemp); // 現在の気温でアドバイス
        document.getElementById("clothing-image").src = `images/${clothing.image}`;
        document.getElementById("clothing-card-text").textContent = clothing.text;

        // カードを表示
        weatherCard.classList.remove("hidden");
        clothingCard.classList.remove("hidden");

        // 週間予報の表示
        displayWeeklyForecast(dailyForecast);

    } catch (error) {
        console.error("天気情報の取得中にエラーが発生しました:", error);
        // ユーザーにエラーを通知
        alert("天気情報の取得に失敗しました。地域を再選択してお試しください。");
        // カードを非表示にするか、エラーメッセージを表示
        weatherCard.classList.add("hidden");
        clothingCard.classList.add("hidden");
        weeklyForecastContainer.innerHTML = '<p class="no-data">天気情報の取得中にエラーが発生しました。</p>';
    }
}

// イベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    // 初期メッセージの表示
    weeklyForecastContainer.innerHTML = '<p class="initial-message">地域を選択して検索すると、一週間の天気と気温が表示されます。</p>';

    // 検索ボタンにイベントリスナーを設定
    searchButton.addEventListener("click", fetchWeatherAndClothing);

    // （オプション）セレクトボックスの変更時にも自動で検索を行う場合
    // selectElement.addEventListener("change", fetchWeatherAndClothing);
});