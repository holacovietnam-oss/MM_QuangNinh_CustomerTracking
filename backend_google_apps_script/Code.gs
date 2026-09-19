const SHEET_NAME = 'DATA';
function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) sh.appendRow(['Timestamp','Ngày','Mã TT','Mã NV','Họ tên','Loại','CODE ngành hàng','Ngành hàng','KH tham khảo','Chốt','Không chốt','Lý do','Ghi chú']);
    const r = body.record;
    sh.appendRow([new Date(),r.date,r.center,r.staffCode,r.staffName,r.type,r.catCode,r.category,r.total,r.closed,r.notClosed,r.reason||'',r.note||'']);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) { return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON); }
}
function doGet(){return ContentService.createTextOutput('MM Customer Tracking API OK');}
