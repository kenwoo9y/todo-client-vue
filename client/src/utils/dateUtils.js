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