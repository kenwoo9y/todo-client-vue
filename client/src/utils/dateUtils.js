export function formatDate(dateString) {
    // dateString が null、undefined、または空文字の場合は null を返す
    if (!dateString) {
        return null;
    }

    // 文字列をDateオブジェクトに変換
    const date = new Date(dateString);

    // 有効な日付かどうかをチェック
    if (isNaN(date.getTime())) {
        return null;
    }

    // 年月日を取り出す
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるので+1
    const day = date.getDate().toString().padStart(2, '0');

    // フォーマットをYYYY-MM-DDにする
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
}

export function formatDateTime(originalDateTime) {
    // 入力された文字列をDateオブジェクトに変換
    const date = new Date(originalDateTime);

    // 年、月、日、時、分を取得
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため+1し、2桁にパディング
    const day = String(date.getDate()).padStart(2, '0'); // 日を2桁にパディング
    const hours = String(date.getHours()).padStart(2, '0'); // 時を2桁にパディング
    const minutes = String(date.getMinutes()).padStart(2, '0'); // 分を2桁にパディング

    // フォーマットを整えて返す
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}`;

    return formattedDateTime;
}